<template>
  <q-file
    @update:model-value="uploadImage"
    class="imagen"
    v-show="false"
    v-model="userImage"
    label="Standard"
    max-files="1"
    accept=".jpg, image/*"
  />

  <q-page class="profile-config-page">
    <div class="page-container">
      <div class="content-grid">
        <!-- Configuration Panel -->
        <div class="config-panel animated fadeInLeft">
          <q-card class="config-card glass-effect">
            <q-card-section class="config-header">
              <div class="section-title">
                <q-icon name="settings" size="24px" class="q-mr-sm" />
                <span>Profile Settings</span>
              </div>
            </q-card-section>

            <q-card-section class="config-content">
              <!-- Profile Image Section -->
              <div class="image-upload-section">
                <div class="image-upload-container">
                  <div class="image-preview" @click="openSelectFile()">
                    <q-avatar
                      v-if="!userImage"
                      class="upload-placeholder"
                      size="100px"
                      color="grey-3"
                      text-color="grey-6"
                      icon="add_a_photo"
                    />
                    <q-avatar
                      v-else
                      class="profile-preview"
                      size="100px"
                      style="border-radius: 16px"
                    >
                      <img :src="userImage" class="preview-img" />
                    </q-avatar>
                    <div class="upload-overlay">
                      <q-icon name="camera_alt" size="24px" />
                      <span>{{
                        userImage ? "Change Photo" : "Upload Photo"
                      }}</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Configuration Form -->
              <q-form @submit="onSubmit" class="config-form">
                <!-- Color Picker -->
                <div class="form-section">
                  <label class="form-label">Brand Color</label>
                  <q-input
                    v-model="color"
                    class="color-input"
                    outlined
                    dense
                    readonly
                    :style="{ borderColor: color }"
                  >
                    <template v-slot:prepend>
                      <div
                        class="color-preview"
                        :style="{ backgroundColor: color }"
                      ></div>
                    </template>
                    <template v-slot:append>
                      <q-icon name="palette" class="cursor-pointer">
                        <q-popup-proxy
                          cover
                          transition-show="scale"
                          transition-hide="scale"
                        >
                          <q-color v-model="color" />
                        </q-popup-proxy>
                      </q-icon>
                    </template>
                  </q-input>
                </div>

                <!-- Personal Information -->
                <div class="form-section">
                  <div class="section-header">
                    <q-icon name="person" size="20px" class="q-mr-xs" />
                    <span class="section-label">Personal Information</span>
                  </div>

                  <div class="form-grid">
                    <q-input
                      outlined
                      v-model="userName"
                      label="Full Name"
                      class="form-input"
                      :rules="[
                        (val) => (val && val.length > 0) || 'Name is required',
                      ]"
                    />

                    <q-input
                      outlined
                      v-model="userSubdomain"
                      label="Custom Subdomain"
                      class="form-input"
                      prefix="https://"
                      suffix=".bio.awslearn.cloud"
                      :rules="[
                        (val) =>
                          (val && val.length > 0) || 'Subdomain is required',
                      ]"
                    />

                    <q-input
                      outlined
                      v-model="userPosition"
                      label="Job Title"
                      class="form-input"
                      :rules="[
                        (val) =>
                          (val && val.length > 0) || 'Job title is required',
                      ]"
                    />
                  </div>

                  <q-input
                    outlined
                    autogrow
                    v-model="userBio"
                    label="Professional Biography"
                    type="textarea"
                    class="form-input bio-input"
                    :rules="[
                      (val) =>
                        (val && val.length > 9) ||
                        'Biography must be at least 10 characters',
                    ]"
                    hint="Tell your professional story in a few sentences"
                  />
                </div>

                <!-- Social Networks -->
                <div class="form-section">
                  <div class="section-header">
                    <q-icon name="share" size="20px" class="q-mr-xs" />
                    <span class="section-label">Social Networks</span>
                  </div>

                  <q-expansion-item
                    class="social-expansion"
                    expand-separator
                    header-class="expansion-header"
                    label="Configure your social media presence"
                  >
                    <div class="social-networks-grid">
                      <div
                        v-for="(item, i) in userSocialNetworks"
                        :key="i"
                        class="social-network-item"
                      >
                        <div class="social-input-container">
                          <q-input
                            outlined
                            :label="item.name"
                            v-model="item.url"
                            class="social-input"
                            :rules="item.show ? [validateUrl] : []"
                            lazy-rules
                            :hint="`Enter your ${item.name} profile URL`"
                          >
                            <template v-slot:prepend>
                              <q-icon
                                :name="item.icon"
                                :color="item.show ? 'primary' : 'grey-5'"
                              />
                            </template>
                          </q-input>
                          <q-toggle
                            v-model="item.show"
                            class="social-toggle"
                            :color="color"
                          />
                        </div>
                      </div>
                    </div>
                  </q-expansion-item>
                </div>

                <!-- Certifications -->
                <div class="form-section">
                  <div class="section-header">
                    <q-icon name="verified" size="20px" class="q-mr-xs" />
                    <span class="section-label"
                      >Professional Certifications</span
                    >
                  </div>

                  <q-input
                    v-for="item in userCredlyConnections"
                    :key="item"
                    outlined
                    label="Credly Username"
                    v-model="item.credlyUser"
                    class="form-input"
                    prefix="credly.com/users/"
                    hint="Enter your Credly username to display your certifications"
                  >
                    <template v-slot:prepend>
                      <q-icon name="account_circle" />
                    </template>
                    <template v-slot:append>
                      <q-btn
                        round
                        flat
                        icon="refresh"
                        @click="getCertifications(item.credlyUser)"
                        :loading="loadingCertifications"
                      >
                        <q-tooltip>Refresh certifications</q-tooltip>
                      </q-btn>
                    </template>
                  </q-input>
                </div>

                <!-- Save Button -->
                <div class="form-actions">
                  <q-btn
                    label="Save Profile"
                    type="submit"
                    class="save-btn"
                    :style="{ backgroundColor: color }"
                    unelevated
                    rounded
                    no-caps
                    size="lg"
                  />
                </div>
              </q-form>
            </q-card-section>
          </q-card>
        </div>

        <!-- Live Preview -->
        <div class="preview-panel animated fadeInRight">
          <div class="preview-header">
            <div class="preview-title">
              <q-icon name="visibility" size="20px" class="q-mr-xs" />
              <span>Live Preview</span>
            </div>
            <q-btn
              v-if="userSubdomain"
              flat
              round
              icon="launch"
              @click="openPreview()"
              class="preview-btn"
            >
              <q-tooltip>Open in new tab</q-tooltip>
            </q-btn>
          </div>

          <div class="preview-container">
            <bio-component
              :primary-color="color"
              :user-image="userImage"
              :user-name="userName"
              :user-position="userPosition"
              :user-bio="userBio"
              :user-social-networks="userSocialNetworks"
              :user-credly-badges="userCredlyBadges"
            />
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { onMounted, ref, watch, nextTick } from "vue";
//@ts-ignore
import BioComponent from "components/BioComponent.vue";
import { useGeneralStore } from "src/stores/General";
import { useUserStore } from "src/stores/User";
import { useMeta } from "quasar";
import mixin from "../mixins/mixin";

const general = useGeneralStore();
const metaData = general.getMetadata();
useMeta(metaData);
const user = useUserStore();
const { showLoading, hideLoading, showNoty } = mixin();

// Reactive variables
const userImage: any = ref(undefined);
const color = ref("#402d6b");
const userImagePath: any = ref(undefined);
const userName: any = ref(undefined);
const userPosition: any = ref(undefined);
const userBio: any = ref(undefined);
const userSubdomain: any = ref(undefined);
const loadingCertifications = ref(false);

const sanitizeForSubdomain = (value: any) => {
  const allowedCharacters = /^[a-zA-Z0-9 ]+$/;
  return value
    .split("")
    .filter((char: any) => allowedCharacters.test(char) || char === " ")
    .join("")
    .replace(/\s+/g, "-")
    .toLowerCase();
};

// Watch the userName for changes and sanitize it immediately
watch(userName, (newValue, oldValue) => {
  if (newValue && !user?.userId) {
    const sanitized = sanitizeForSubdomain(newValue);
    userSubdomain.value = sanitized;
  }
});

// Watch for userId changes (in case authentication is delayed)
watch(
  () => user.userId,
  async (newUserId) => {
    if (newUserId && !userName.value) {
      console.log("User ID became available, loading data...");
      await loadUserData();
    }
  }
);

const validateUrl = (val: string) => {
  const pattern =
    /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
  return pattern.test(val) || "Please enter a valid URL";
};

const userCredlyConnections = ref([
  {
    credlyUser: "",
  },
]);

const getCertifications = async (userName: string) => {
  if (!userName) {
    console.log("No Credly username provided");
    return;
  }

  try {
    loadingCertifications.value = true;
    console.log("Loading certifications for:", userName);
    const response: any = await general.getCredlyCertifications(userName);

    if (response.status) {
      userCredlyBadges.value = response.badges;
      console.log(`Found ${response.badges.length} certifications`);
      if (response.badges.length > 0) {
        showNoty("success", `Found ${response.badges.length} certifications`);
      }
    } else {
      console.error("Failed to load certifications:", response.message);
      showNoty("error", response.message);
    }
  } catch (error) {
    console.error("Error loading certifications:", error);
    showNoty("error", "Failed to load certifications");
  } finally {
    loadingCertifications.value = false;
  }
};

const userCredlyBadges: any = ref([]);

const userSocialNetworks: any = ref([
  {
    icon: "fab fa-linkedin",
    url: "",
    name: "LinkedIn",
    show: true,
  },
  {
    icon: "fab fa-github",
    url: "",
    name: "GitHub",
    show: true,
  },
  {
    icon: "fab fa-medium",
    url: "",
    name: "Medium",
    show: false,
  },
  {
    icon: "fab fa-facebook",
    url: "",
    name: "Facebook",
    show: false,
  },
  {
    icon: "fab fa-instagram",
    url: "",
    name: "Instagram",
    show: false,
  },
  {
    icon: "fab fa-youtube",
    url: "",
    name: "YouTube",
    show: false,
  },
  {
    icon: "fab fa-x-twitter",
    url: "",
    name: "Twitter X",
    show: false,
  },
]);

const openSelectFile = () => {
  const element = document.getElementsByClassName("imagen");
  //@ts-ignore
  element[0].click();
};

const uploadImage = async (file: any) => {
  showLoading("Uploading image...");
  const response = await general.uploadImageUser(
    file,
    `users/${user.userId}/${Date.now()}-${file.name}`
  );
  hideLoading();
  if (response.status) {
    userImage.value = response.url;
    userImagePath.value = response.path;
    showNoty("success", "Image uploaded successfully");
  } else {
    showNoty("error", "Failed to upload image");
  }
};

const openPreview = () => {
  if (userSubdomain.value) {
    window.open(`https://${userSubdomain.value}.bio.awslearn.cloud`, "_blank");
  }
};

const onSubmit = async () => {
  console.log("🚀 Starting profile submission...");

  // Enhanced validation with detailed logging
  if (!userImage.value) {
    console.error("❌ Validation failed: No profile image");
    showNoty("error", "Profile image is required");
    return;
  }

  if (!user.userId) {
    console.error("❌ Validation failed: User not authenticated");
    console.log("User object:", user);
    showNoty("error", "User not authenticated. Please log in again.");
    return;
  }

  if (!userName.value?.trim()) {
    console.error("❌ Validation failed: No user name");
    showNoty("error", "Full name is required");
    return;
  }

  if (!userSubdomain.value?.trim()) {
    console.error("❌ Validation failed: No subdomain");
    showNoty("error", "Subdomain is required");
    return;
  }

  if (!userPosition.value?.trim()) {
    console.error("❌ Validation failed: No job position");
    showNoty("error", "Job title is required");
    return;
  }

  try {
    // Prepare social networks data
    let socialNetwork = [];
    console.log(
      "📱 Processing social networks:",
      userSocialNetworks.value.length
    );

    for (let i = 0; i < userSocialNetworks.value.length; i++) {
      try {
        const socialData = JSON.stringify(userSocialNetworks.value[i]);
        socialNetwork.push(socialData);
        console.log(
          `  ✅ Social network ${i + 1} processed:`,
          userSocialNetworks.value[i].name
        );
      } catch (socialError) {
        console.error(
          `❌ Error processing social network ${i + 1}:`,
          socialError
        );
      }
    }

    // Log all data being sent
    const submissionData = {
      userId: user.userId,
      color: color.value,
      imagePath: userImagePath.value,
      email: user.email,
      fullName: userName.value.trim(),
      subdomain: userSubdomain.value.trim(),
      jobOcupation: userPosition.value.trim(),
      bio: userBio.value?.trim() || "",
      socialNetworkCount: socialNetwork.length,
      credlyUser: userCredlyConnections.value[0]?.credlyUser || "",
    };

    console.log("📦 Submission data prepared:", submissionData);
    console.log("🔍 Data validation:");
    console.log("  - User ID:", !!submissionData.userId);
    console.log("  - Color:", !!submissionData.color);
    console.log("  - Image Path:", !!submissionData.imagePath);
    console.log("  - Email:", !!submissionData.email);
    console.log("  - Full Name:", !!submissionData.fullName);
    console.log("  - Subdomain:", !!submissionData.subdomain);
    console.log("  - Job Title:", !!submissionData.jobOcupation);
    console.log("  - Bio Length:", submissionData.bio.length);
    console.log("  - Social Networks:", submissionData.socialNetworkCount);

    showLoading("Saving profile...");

    console.log("🌐 Making API call to saveUserInformation...");
    const response = await general.saveUserInformation(
      user.userId,
      color.value,
      userImagePath.value,
      user.email,
      userName.value.trim(),
      userSubdomain.value.trim(),
      userPosition.value.trim(),
      userBio.value?.trim() || "",
      socialNetwork,
      userCredlyConnections.value[0]?.credlyUser || ""
    );

    console.log("📡 API Response received:", response);

    if (response && response.status) {
      console.log("✅ Profile saved successfully");
      showNoty("success", "Profile saved successfully!");

      // Update user store with new subdomain if needed
      if (user.subdomain !== userSubdomain.value) {
        user.subdomain = userSubdomain.value;
        console.log("🔄 Updated user store subdomain:", user.subdomain);
      }
    } else {
      console.error("❌ Save failed - API returned error:");
      console.error("  - Response:", response);
      console.error("  - Status:", response?.status);
      console.error("  - Message:", response?.message);

      const errorMessage =
        response?.message || "Unknown error occurred while saving";
      showNoty("error", `Save failed: ${errorMessage}`);
    }
  } catch (error) {
    console.error("❌ Critical error during profile save:");
    console.error("  - Error message:", error.message);
    console.error("  - Error stack:", error.stack);
    console.error("  - User ID:", user.userId);
    console.error("  - Full error object:", error);

    // More specific error messages
    if (
      error.message?.includes("network") ||
      error.message?.includes("fetch")
    ) {
      showNoty(
        "error",
        "Network error. Please check your connection and try again."
      );
    } else if (
      error.message?.includes("unauthorized") ||
      error.message?.includes("401")
    ) {
      showNoty("error", "Session expired. Please log in again.");
    } else if (error.message?.includes("validation")) {
      showNoty(
        "error",
        "Data validation error. Please check all required fields."
      );
    } else {
      showNoty("error", `Save failed: ${error.message || "Unknown error"}`);
    }
  } finally {
    hideLoading();
  }
};

const loadUserData = async () => {
  if (!user.userId) {
    console.log("User ID not available yet");
    return;
  }

  try {
    showLoading("Loading profile...");
    console.log("🔍 Loading user data for userId:", user.userId);
    const userInformation = await general.getUserById(user.userId);
    console.log("📦 Raw user information received:", userInformation);

    if (userInformation) {
      // Load certifications first if available
      if (userInformation.credlyUsername) {
        console.log(
          "🏆 Loading certifications for:",
          userInformation.credlyUsername
        );
        getCertifications(userInformation.credlyUsername);
      }

      // Set basic information with detailed logging
      if (userInformation.color) {
        color.value = userInformation.color;
        console.log("🎨 Color set to:", userInformation.color);
      }

      userName.value = userInformation.fullName || "";
      console.log("👤 Name set to:", userName.value);

      userBio.value = userInformation.bio || "";
      console.log("📝 Bio set to:", userBio.value?.substring(0, 50) + "...");

      userPosition.value = userInformation.jobOcupation || "";
      console.log("💼 Position set to:", userPosition.value);

      // CRITICAL: Subdomain assignment with detailed logging
      const receivedSubdomain = userInformation.subdomain;
      console.log("🌐 Received subdomain from API:", receivedSubdomain);
      console.log("🔍 Subdomain type:", typeof receivedSubdomain);
      console.log("❓ Subdomain is null/undefined:", receivedSubdomain == null);
      console.log("📏 Subdomain length:", receivedSubdomain?.length);

      if (receivedSubdomain && receivedSubdomain.trim()) {
        userSubdomain.value = receivedSubdomain.trim();
        console.log("✅ Subdomain successfully set to:", userSubdomain.value);
      } else {
        console.warn("⚠️ No valid subdomain received from API");
        console.log("🔄 Current userSubdomain.value:", userSubdomain.value);

        // Don't overwrite if we don't have a subdomain from API
        if (!userSubdomain.value && userName.value) {
          // Generate from name as fallback
          const fallbackSubdomain = sanitizeForSubdomain(userName.value);
          userSubdomain.value = fallbackSubdomain;
          console.log("🆘 Generated fallback subdomain:", fallbackSubdomain);
        }
      }

      // Load image if available
      if (userInformation.image) {
        console.log("🖼️ Loading image:", userInformation.image);
        userImage.value = await general.getPresignedUrl(userInformation.image);
        userImagePath.value = userInformation.image;
        console.log("✅ Image loaded successfully");
      }

      // Set Credly connections
      userCredlyConnections.value = [
        {
          credlyUser: userInformation.credlyUsername || "",
        },
      ];
      console.log("🔗 Credly connections set:", userCredlyConnections.value);

      // Load social networks
      if (
        userInformation.socialNetwork &&
        userInformation.socialNetwork.length > 0
      ) {
        try {
          userSocialNetworks.value = userInformation.socialNetwork.map(
            (i: any) => JSON.parse(i)
          );
          console.log(
            "📱 Social networks loaded:",
            userSocialNetworks.value.length,
            "networks"
          );
        } catch (socialError) {
          console.error("❌ Error parsing social networks:", socialError);
        }
      }

      console.log("✅ User data loaded successfully");
      console.log("📊 Final state summary:");
      console.log("  - Name:", userName.value);
      console.log("  - Subdomain:", userSubdomain.value);
      console.log("  - Position:", userPosition.value);
      console.log("  - Has Image:", !!userImage.value);
    } else {
      console.error("❌ No user information received from API");
      showNoty(
        "error",
        "No profile data found. Please try refreshing the page."
      );
    }
  } catch (error) {
    console.error("❌ Critical error loading user data:", error);
    console.error("Error details:", {
      message: error.message,
      stack: error.stack,
      userId: user.userId,
    });
    showNoty(
      "error",
      "Failed to load profile data. Please check your connection and try again."
    );
  } finally {
    hideLoading();
  }
};

onMounted(async () => {
  // Wait for user to be fully loaded
  await nextTick();

  // If user is already loaded, load data immediately
  if (user.userId) {
    await loadUserData();
  } else {
    // Wait for user to be loaded
    const checkUser = setInterval(async () => {
      if (user.userId) {
        clearInterval(checkUser);
        await loadUserData();
      }
    }, 100);

    // Timeout after 5 seconds
    setTimeout(() => {
      clearInterval(checkUser);
      if (!user.userId) {
        console.error("User not loaded after timeout");
        showNoty("error", "Authentication error. Please refresh the page.");
      }
    }, 5000);
  }
});

defineOptions({
  name: "IndexPage",
});
</script>

<style scoped>
/* Main Page Styles */
.profile-config-page {
  background: transparent;
  min-height: calc(100vh - 70px);
  padding: 0;
}

.page-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
}

/* Content Grid */
.content-grid {
  display: grid;
  grid-template-columns: 400px 1fr;
  gap: 30px;
  align-items: start;
}

/* Configuration Panel */
.config-panel {
  position: sticky;
  top: 20px;
}

.config-card {
  border-radius: 20px;
  overflow: hidden;
}

.glass-effect {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
}

.config-header {
  background: linear-gradient(135deg, #402d6b 0%, #1976d2 100%);
  color: white;
  padding: 20px 25px;
}

.section-title {
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 600;
}

.config-content {
  padding: 25px 20px;
}

/* Image Upload */
.image-upload-section {
  text-align: center;
  margin-bottom: 25px;
}

.image-upload-container {
  position: relative;
  display: inline-block;
}

.image-preview {
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
}

.image-preview:hover {
  transform: scale(1.05);
}

.upload-placeholder {
  border: 2px dashed #ddd;
  transition: all 0.3s ease;
}

.upload-placeholder:hover {
  border-color: #402d6b;
  background: rgba(64, 45, 107, 0.05);
}

.profile-preview {
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.preview-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
}

.upload-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  opacity: 0;
  transition: all 0.3s ease;
  font-size: 0.85rem;
  font-weight: 500;
}

.image-preview:hover .upload-overlay {
  opacity: 1;
}

/* Form Styles */
.config-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-section {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.form-label {
  font-size: 0.95rem;
  font-weight: 600;
  color: #402d6b;
  margin-bottom: 5px;
}

.section-header {
  display: flex;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 2px solid rgba(64, 45, 107, 0.1);
}

.section-label {
  font-size: 1rem;
  font-weight: 600;
  color: #402d6b;
}

.form-grid {
  display: grid;
  gap: 15px;
}

.form-input {
  transition: all 0.3s ease;
}

.color-input {
  max-width: 200px;
}

.color-preview {
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.bio-input {
  min-height: 100px;
}

/* Social Networks */
.social-expansion {
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  overflow: hidden;
}

.social-networks-grid {
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.social-network-item {
  background: rgba(64, 45, 107, 0.02);
  border-radius: 10px;
  padding: 12px;
  transition: all 0.3s ease;
}

.social-network-item:hover {
  background: rgba(64, 45, 107, 0.05);
}

.social-input-container {
  display: flex;
  align-items: center;
  gap: 15px;
}

.social-input {
  flex: 1;
}

.social-toggle {
  flex-shrink: 0;
}

/* Form Actions */
.form-actions {
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.save-btn {
  color: white;
  font-weight: 600;
  padding: 12px 40px;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.save-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

/* Preview Panel */
.preview-panel {
  position: sticky;
  top: 20px;
}

.preview-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 15px 15px 0 0;
  padding: 15px 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: none;
}

.preview-title {
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-weight: 600;
  color: #402d6b;
}

.preview-btn {
  color: #666;
  transition: all 0.3s ease;
}

.preview-btn:hover {
  color: #402d6b;
  transform: scale(1.1);
}

.preview-container {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 0 0 15px 15px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-top: none;
  padding: 20px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
}

/* Animations */
.animated {
  animation-duration: 0.8s;
  animation-fill-mode: both;
}

.fadeInLeft {
  animation-name: fadeInLeft;
}

.fadeInRight {
  animation-name: fadeInRight;
  animation-delay: 0.2s;
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

/* Responsive Design */
@media (max-width: 1400px) {
  .content-grid {
    grid-template-columns: 380px 1fr;
  }
}

@media (max-width: 1200px) {
  .content-grid {
    grid-template-columns: 360px 1fr;
  }
}

@media (max-width: 1000px) {
  .content-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .preview-panel {
    position: static;
  }
}

@media (max-width: 768px) {
  .page-container {
    padding: 15px;
  }

  .config-content {
    padding: 20px 15px;
  }

  .social-input-container {
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
  }
}

@media (max-width: 480px) {
  .image-preview .q-avatar {
    width: 100px !important;
    height: 100px !important;
  }
}
</style>
