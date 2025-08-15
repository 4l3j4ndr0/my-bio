import { defineStore } from "pinia";
import { get } from "aws-amplify/api";
import { uploadData, getUrl } from "aws-amplify/storage";
import { generateClient } from "aws-amplify/data";
import { type Schema } from "../../amplify/data/resource";
import { useUserStore } from "./User";
import { log } from "console";
const client = generateClient<Schema>();
const user = useUserStore();
export const useGeneralStore = defineStore("general", {
  state: () => ({
    certifications: [],
    action: "create",
  }),
  actions: {
    async getPresignedUrl(path: string) {
      const linkToStorageFile = await getUrl({
        path: path,
        options: {
          expiresIn: 3600,
        },
      });
      return linkToStorageFile.url;
    },
    async getCredlyCertifications(userName: string) {
      try {
        const restOperation = get({
          apiName: "BioRestApi",
          path: `badges?userName=${userName}`,
        });

        const { body } = await restOperation.response;
        const response: any = await body.json();

        return {
          status: true,
          badges: response.badges,
          message: `Successfully fetched badges from Credly with user: ${userName}`,
        };
      } catch (error) {
        console.log("ERROR:::::", error);
        return {
          status: false,
          message: `Failed to fetch badges from Credly with user: ${userName}`,
        };
      }
    },
    async uploadImageUser(file: any, filePath: string) {
      try {
        const result = await uploadData({
          path: filePath,
          data: file,
          options: {
            onProgress: ({ transferredBytes, totalBytes }) => {
              if (totalBytes) {
                console.log(
                  `Upload progress ${Math.round(
                    (transferredBytes / totalBytes) * 100
                  )} %`
                );
              }
            },
          },
        }).result;

        return {
          status: true,
          message: "Image uploaded successfully.",
          path: result.path,
          url: await this.getPresignedUrl(result.path),
        };
      } catch (error) {
        console.log("Error : ", error);
        return {
          status: false,
          message: `Failed to upload image.`,
        };
      }
    },
    async validateSubdomain(subdomain: string) {
      console.log("🔍 validateSubdomain called with:", subdomain);
      console.log("👤 Current user ID:", user.userId);

      if (!subdomain?.trim()) {
        console.error("❌ No subdomain provided for validation");
        return false;
      }

      try {
        const { data, errors } = await client.models.User.list({
          filter: {
            and: [
              {
                subdomain: { eq: subdomain.trim() },
              },
              {
                id: { ne: user.userId },
              },
            ],
          },
        });

        console.log("📡 Subdomain validation response:");
        console.log("  - Data length:", data?.length || 0);
        console.log("  - Errors:", errors);
        console.log("  - Found users with same subdomain:", data);

        if (errors) {
          console.error("❌ Error validating subdomain:", errors);
          return false;
        }

        const isAvailable = data.length === 0;
        console.log("✅ Subdomain availability result:", isAvailable);
        
        return isAvailable;
      } catch (error) {
        console.error("❌ Critical error in validateSubdomain:");
        console.error("  - Error:", error);
        console.error("  - Subdomain:", subdomain);
        return false;
      }
    },
    async saveUserInformation(
      id: string,
      color: string,
      image: string,
      email: string,
      fullName: string,
      subdomain: string,
      jobOcupation: string,
      bio: string,
      socialNetwork: string[],
      credlyUsername: string
    ) {
      console.log("💾 saveUserInformation called with:");
      console.log("  - ID:", id);
      console.log("  - Color:", color);
      console.log("  - Image:", image);
      console.log("  - Email:", email);
      console.log("  - Full Name:", fullName);
      console.log("  - Subdomain:", subdomain);
      console.log("  - Job Occupation:", jobOcupation);
      console.log("  - Bio length:", bio?.length || 0);
      console.log("  - Social Networks count:", socialNetwork?.length || 0);
      console.log("  - Credly Username:", credlyUsername);
      console.log("  - Current action:", this.action);

      // Validate required fields
      if (!id) {
        console.error("❌ Validation failed: No ID provided");
        return {
          status: false,
          message: "User ID is required",
        };
      }

      if (!fullName?.trim()) {
        console.error("❌ Validation failed: No full name provided");
        return {
          status: false,
          message: "Full name is required",
        };
      }

      if (!subdomain?.trim()) {
        console.error("❌ Validation failed: No subdomain provided");
        return {
          status: false,
          message: "Subdomain is required",
        };
      }

      try {
        console.log("🔍 Validating subdomain availability...");
        const isSubdomainAvailable = await this.validateSubdomain(subdomain);
        console.log("📋 Subdomain validation result:", isSubdomainAvailable);

        if (isSubdomainAvailable === false) {
          console.warn("⚠️ Subdomain already in use:", subdomain);
          return {
            status: false,
            message: `The subdomain ${subdomain} is already in use.`,
          };
        }

        console.log("🔄 Setting subdomain in user store:", subdomain);
        user.setSubdomain(subdomain);

        if (this.action === "create") {
          console.log("➕ Creating new user...");
          const { errors, data: newUser } = await client.models.User.create({
            id,
            color,
            image,
            email,
            fullName,
            subdomain,
            jobOcupation,
            bio,
            socialNetwork,
            credlyUsername,
          });

          console.log("📡 Create response:");
          console.log("  - Errors:", errors);
          console.log("  - New User:", newUser);

          if (errors) {
            console.error("❌ Create failed with errors:", errors);
            return {
              status: false,
              message: Array.isArray(errors) ? errors.join(', ') : errors,
            };
          }

          console.log("✅ User created successfully");
          return {
            status: true,
            newUser,
            message: "Information saved successfully.",
          };
        } else {
          console.log("🔄 Updating existing user...");
          const { errors, data: updatedUser } = await client.models.User.update({
            id,
            color,
            image,
            email,
            fullName,
            subdomain,
            jobOcupation,
            bio,
            socialNetwork,
            credlyUsername,
          });

          console.log("📡 Update response:");
          console.log("  - Errors:", errors);
          console.log("  - Updated User:", updatedUser);

          if (errors) {
            console.error("❌ Update failed with errors:", errors);
            return {
              status: false,
              message: Array.isArray(errors) ? errors.join(', ') : errors,
            };
          }

          console.log("✅ User updated successfully");
          return {
            status: true,
            updatedUser,
            message: "Information updated successfully.",
          };
        }
      } catch (error) {
        console.error("❌ Critical error in saveUserInformation:");
        console.error("  - Error message:", error.message);
        console.error("  - Error stack:", error.stack);
        console.error("  - User ID:", id);
        console.error("  - Action:", this.action);
        
        return {
          status: false,
          message: `Save failed: ${error.message || 'Unknown error'}`,
        };
      }
    },
    async getUserById(id: string) {
      console.log("🔍 getUserById called with ID:", id);
      
      if (!id) {
        console.error("❌ getUserById: No ID provided");
        return null;
      }

      try {
        console.log("🌐 Making GraphQL query to get user...");
        const { data, errors } = await client.models.User.get({
          id,
        });

        console.log("📡 GraphQL response received:");
        console.log("  - Data:", data);
        console.log("  - Errors:", errors);

        if (errors && errors.length > 0) {
          console.error("❌ GraphQL errors:", errors);
          return null;
        }

        if (data?.id) {
          console.log("✅ User data found:");
          console.log("  - ID:", data.id);
          console.log("  - Full Name:", data.fullName);
          console.log("  - Subdomain:", data.subdomain);
          console.log("  - Email:", data.email);
          console.log("  - Job Occupation:", data.jobOcupation);
          console.log("  - Has Image:", !!data.image);
          console.log("  - Has Bio:", !!data.bio);
          console.log("  - Color:", data.color);
          console.log("  - Social Networks Count:", data.socialNetwork?.length || 0);
          console.log("  - Credly Username:", data.credlyUsername);

          this.action = "update";
          
          // Update user store with subdomain
          if (data.subdomain) {
            console.log("🔄 Setting subdomain in user store:", data.subdomain);
            user.setSubdomain(data.subdomain);
          } else {
            console.warn("⚠️ No subdomain found in user data");
          }
          
          return data;
        } else {
          console.warn("⚠️ No user data found for ID:", id);
          return null;
        }
      } catch (error) {
        console.error("❌ Error in getUserById:");
        console.error("  - Error message:", error.message);
        console.error("  - Error stack:", error.stack);
        console.error("  - User ID:", id);
        return null;
      }
    },
    async getUserBySubdomain(subdomain: string) {
      const { data, errors } = await client.models.User.list({
        filter: {
          subdomain: { eq: subdomain },
        },
        authMode: "apiKey",
      });

      return data && data.length > 0 ? data[0] : null;
    },
    getMetadata() {
      return {
        title: "BIO Platform",
        description:
          "Create your unique biography with BIO Platform. Showcase your knowledge, certifications, and social links on a personal site that tells your professional story.",
      };
    },
  },
});
