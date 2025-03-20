<template>
  <q-layout>
    <q-page-container>
      <bio-component
        v-if="userInfo"
        :primary-color="primaryColor"
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
import { setCssVar, useMeta } from "quasar";
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
const primaryColor = ref("#402d6b");

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
      if (user?.color) {
        primaryColor.value = user.color;
        setCssVar("primary", primaryColor.value);
      }

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
      useMeta({
        title: `${user.fullName}`,
        meta: {
          keywords: {
            name: "keywords",
            content: `${user.fullName} - ${user.jobOcupation}`,
          },
          description: {
            name: "description",
            content: `${user.fullName} - ${user.jobOcupation}`,
          },
          ogType: {
            property: "og:type",
            content: "website",
          },
          ogUrl: {
            property: "og:url",
            content: `${window.location.href}`,
          },
          ogTitle: {
            property: "og:title",
            content: `${user.fullName} - ${user.jobOcupation}`,
          },
          ogDescription: {
            property: "og:description",
            content: `${user.fullName} - ${user.jobOcupation}`,
          },
          ogImage: {
            property: "og:image",
            content: userImage.value,
          },
          twiterCard: {
            name: "twitter:card",
            content: "summary_large_image",
          },
          twitterTitle: {
            name: "twitter:title",
            content: `${user.fullName} - ${user.jobOcupation}`,
          },
          twitterDescription: {
            name: "twitter:description",
            content: `${user.fullName} - ${user.jobOcupation}`,
          },
          twitterImage: {
            name: "twitter:image",
            content: userImage.value,
          },
        },
      });
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
