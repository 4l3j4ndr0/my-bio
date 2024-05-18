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
  <q-page class="row items-start justify-evenly q-gutter-md">
    <div class="col-md q-py-lg">
      <div class="row justify-center">
        <q-avatar
          v-if="!userImage"
          style="cursor: pointer"
          @click="openSelectFile()"
          rounded
          size="100px"
          font-size="82px"
          color="dark"
          text-color="white"
          icon="add_a_photo"
          label="logo"
        ></q-avatar>
        <q-avatar
          v-else
          style="cursor: pointer; height: initial; border-radius: 40px"
          rounded
          size="100px"
          font-size="82px"
          color="dark"
          text-color="white"
          label="logo"
        >
          <img @click="openSelectFile()" :src="userImage" />
        </q-avatar>
      </div>
      <div class="row justify-center q-py-md">
        <q-form @submit="onSubmit" class="q-gutter-sm" style="width: 80%">
          <fieldset>
            <legend>
              <div class="text-subtitle1 ft"><b>Personal information</b></div>
            </legend>
            <q-input
              outlined
              dense
              v-model="userName"
              label="Full name *"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'The value is required.',
              ]"
            />
            <q-input
              outlined
              dense
              v-model="userSubdomain"
              label="Subdomain *"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'The value is required.',
              ]"
              prefix="https://"
              suffix=".bio.awslearn.cloud"
            />
            <q-input
              outlined
              dense
              v-model="userPosition"
              label="Current job ocupation *"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'The value is required.',
              ]"
            />

            <q-input
              outlined
              dense
              autogrow
              v-model="userBio"
              label="Short Biography"
              type="textarea"
              lazy-rules
              :rules="[
                (val) =>
                  (val && val.length > 9) ||
                  'The value is required at least 10 character.',
              ]"
              clearable
            />
          </fieldset>
          <fieldset>
            <legend>
              <div class="text-subtitle1 ft">
                <b>Social Network information</b>
              </div>
            </legend>
            <q-expansion-item
              expand-separator
              label="Display your social networks prominently on your BIO webpage"
            >
              <q-card>
                <div v-for="(item, i) in userSocialNetworks">
                  <div class="row justify-center">
                    <q-input
                      color="primary"
                      standout
                      :label="item.name"
                      bottom-slots
                      v-model="item.url"
                      outlined
                      dense
                      style="width: 80%"
                      :rules="item.show ? [validateUrl] : []"
                      lazy-rules
                    >
                      <template v-slot:prepend>
                        <q-icon :name="item.icon" />
                      </template>
                    </q-input>
                    <div><q-toggle v-model="item.show" /></div>
                  </div>
                </div>
              </q-card>
            </q-expansion-item>
          </fieldset>
          <fieldset>
            <legend>
              <div class="text-subtitle1 ft">
                <b>Credly Certifications</b>
              </div>
            </legend>
            <q-input
              v-for="item in userCredlyConnections"
              color="primary"
              standout
              label="Credly user"
              bottom-slots
              v-model="item.credlyUser"
              outlined
              dense
              prefix="credly.com/users/"
            >
              <template v-slot:before>
                <q-icon name="fa-solid fa-globe" />
              </template>
              <template v-slot:append>
                <q-btn
                  round
                  dense
                  flat
                  icon="fa-solid fa-rotate"
                  @click="getCertifications(item.credlyUser)"
                />
              </template>
            </q-input>
          </fieldset>
          <div style="text-align: center" class="q-py-md">
            <q-btn label="Save information" type="submit" color="primary" />
          </div>
        </q-form>
      </div>
    </div>
    <div class="col-md-8">
      <bio-component
        :user-image="userImage"
        :user-name="userName"
        :user-position="userPosition"
        :user-bio="userBio"
        :user-social-networks="userSocialNetworks"
        :user-credly-badges="userCredlyBadges"
      ></bio-component>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { onBeforeMount, ref, computed, watch } from "vue";
//@ts-ignore
import BioComponent from "components/BioComponent.vue";
import { useGeneralStore } from "src/stores/General";
import { useUserStore } from "src/stores/User";
const general = useGeneralStore();
const user = useUserStore();
const userImage: any = ref(undefined);
const userImagePath: any = ref(undefined);
const userName: any = ref(undefined);
const userPosition: any = ref(undefined);
const userBio: any = ref(undefined);
const userSubdomain: any = ref(undefined);
const sanitizeForSubdomain = (value: any) => {
  const allowedCharacters = /^[a-zA-Z0-9 ]+$/; // Include space in allowed characters
  return value
    .split("")
    .filter((char: any) => allowedCharacters.test(char) || char === " ")
    .join("")
    .replace(/\s+/g, "-") // Replace consecutive spaces with a single hyphen
    .toLowerCase(); // Convert to lowercase
};

// Watch the userName for changes and sanitize it immediately
watch(userName, (newValue, oldValue) => {
  const sanitized = sanitizeForSubdomain(newValue);
  userSubdomain.value = sanitized; // Keep userSubdomain in sync
});

import mixin from "../mixins/mixin";

const validateUrl = (val: string) => {
  const pattern =
    /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
  return pattern.test(val) || "Please enter a valid URL";
};

onBeforeMount(async () => {
  showLoading("Loading information...");
  const userInformation = await general.getUserById(user.userId);
  hideLoading();
  if (userInformation) {
    if (userInformation.credlyUsername) {
      getCertifications(userInformation.credlyUsername);
    }
    userName.value = userInformation.fullName;
    userBio.value = userInformation.bio;
    userPosition.value = userInformation.jobOcupation;
    userImage.value = await general.getPresignedUrl(userInformation.image);
    userImagePath.value = userInformation.image;
    userSubdomain.value = userInformation.subdomain;
    userCredlyConnections.value = [
      {
        //@ts-ignore
        credlyUser: userInformation.credlyUsername,
      },
    ];
    userSocialNetworks.value = userInformation.socialNetwork?.map((i: any) =>
      JSON.parse(i)
    );
  }
});

const { showLoading, hideLoading, showNoty } = mixin();

const userCredlyConnections = ref([
  {
    credlyUser: "",
  },
]);

const getCertifications = async (userName: string) => {
  if (!userName) return;
  const response: any = await general.getCredlyCertifications(userName);
  if (response.status) {
    userCredlyBadges.value = response.badges;
    // showNoty("success", response.message);
  } else {
    showNoty("error", response.message);
  }
};

const userCredlyBadges: any = ref([]);

const userSocialNetworks: any = ref([
  {
    icon: "fab fa-linkedin",
    url: "",
    name: "Linkedin",
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
    name: "Youtube",
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
  }
  console.log(response);
};

const onSubmit = async () => {
  if (!userImage.value) {
    showNoty("error", "The user image is required.");
  }
  let socialNetwork = [];
  for (let i = 0; i < userSocialNetworks.value.length; i++) {
    socialNetwork.push(JSON.stringify(userSocialNetworks.value[i]));
  }
  showLoading("Saving information...");
  const response = await general.saveUserInformation(
    user.userId,
    userImagePath.value,
    user.email,
    userName.value,
    userSubdomain.value.trim(),
    userPosition.value,
    userBio.value,
    socialNetwork,
    userCredlyConnections.value[0].credlyUser
  );
  if (response.status) {
    showNoty("success", response.message);
  } else {
    showNoty("error", response.message);
  }

  hideLoading();
};
defineOptions({
  name: "IndexPage",
});
</script>
