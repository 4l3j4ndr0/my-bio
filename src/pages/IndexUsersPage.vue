<template>
  <q-layout
    view="hHh Lpr fFf"
    :style="$q.platform.is.bex ? 'min-width: 750px; min-height: 500px' : ''"
  >
    <q-page-container class="bg-grey-2">
      <bio-component
        v-if="userInfo"
        :user-image="userImage"
        :user-name="userInfo.fullName"
        :user-position="userInfo.jobOcupation"
        :user-bio="userInfo.bio"
        :user-social-networks="userSocialNetworks"
        :user-credly-badges="userCredlyBadges"
      ></bio-component>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
//@ts-ignore
import BioComponent from "components/BioComponent.vue";
//@ts-ignore
import { useGeneralStore } from "src/stores/General";
const general = useGeneralStore();

import mixin from "../mixins/mixin";
import { useRouter } from "vue-router";
const router = useRouter();
const { showLoading, hideLoading } = mixin();

const userInfo: any = ref(null);
const userImage: any = ref(null);
const userSocialNetworks: any = ref([]);
const userCredlyBadges: any = ref(null);

onBeforeMount(async () => {
  showLoading("Loading information...");
  const hostname: any = window.location.hostname;
  const parts = hostname.split(".");
  const subdomain = parts[0];
  try {
    const user = await general.getUserBySubdomain(subdomain);
    if (user) {
      userInfo.value = user;
      userImage.value = await general.getPresignedUrl(user.image);
      userSocialNetworks.value = user.socialNetwork?.map((i: any) =>
        JSON.parse(i)
      );
      if (user.credlyUsername) {
        const response: any = await general.getCredlyCertifications(
          user.credlyUsername
        );
        if (response.status) {
          userCredlyBadges.value = response.badges;
          // showNoty("success", response.message);
        }
      }
    } else {
      router.push("/not-found");
    }
  } catch (error) {
    console.log(error);
    router.push("/not-found");
  }
  hideLoading();
});

defineOptions({
  name: "IndexUserPage",
});
</script>
