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
      const { data, errors } = await client.models.User.list({
        filter: {
          and: [
            {
              subdomain: { eq: subdomain },
            },
            {
              id: { ne: user.userId },
            },
          ],
        },
      });

      return data.length === 0 ? true : false;
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
      if ((await this.validateSubdomain(subdomain)) === false) {
        return {
          status: false,
          message: `The subdomain ${subdomain} is already in use.`,
        };
      }
      user.setSubdomain(subdomain);
      if (this.action === "create") {
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

        if (errors) {
          return {
            status: false,
            message: errors,
          };
        }
        return {
          status: true,
          newUser,
          message: "Information saved successfully.",
        };
      } else {
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

        if (errors) {
          return {
            status: false,
            message: errors,
          };
        }
        return {
          status: true,
          updatedUser,
          message: "Information updated successfully.",
        };
      }
    },
    async getUserById(id: string) {
      const { data, errors } = await client.models.User.get({
        id,
      });

      if (data?.id) {
        this.action = "update";
        user.setSubdomain(data.subdomain);
      }
      return data ? data : null;
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
