<template>
  <q-file
    @input="uploadImage"
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
          style="cursor: pointer"
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
              label="The social neetworks will show in your Bio web page."
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
            >
              <template v-slot:before>
                <q-icon name="fa-solid fa-globe" />
              </template>
              <template v-slot:hint> credly.com/users/your-user </template>
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
    <div class="col-md">
      <bio-component
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
import { ref } from "vue";
//@ts-ignore
import BioComponent from "components/BioComponent.vue";
import { useGeneralStore } from "src/stores/General";
const general = useGeneralStore();
const userImage = ref(undefined);
const userName = ref(undefined);
const userPosition = ref(undefined);
const userBio = ref(undefined);
import mixin from "../mixins/mixin";
const { showLoading, hideLoading, showNoty } = mixin();

const userCredlyConnections = ref([
  {
    credlyUser: "",
  },
]);

const getCertifications = async (userName: string) => {
  if (!userName) return;
  const response = await general.getCredlyCertifications(userName);
  if (response.status) {
    userCredlyBadges.value = response.badges;
    showNoty("success", response.message);
  } else {
    showNoty("error", response.message);
  }
};

const userCredlyBadges: any = ref([]);

const userSocialNetworks = ref([
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

const uploadImage = (file: any) => {
  console.log("FILE", file);
};

const onSubmit = () => {};
defineOptions({
  name: "IndexPage",
});
</script>
