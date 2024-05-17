<template>
  <router-view />
</template>

<script setup lang="ts">
// Polyfill for 'global' object
if (typeof global === "undefined") {
  //@ts-ignore
  window.global = window;
}
import { onBeforeMount, watch } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "./stores/User";
import { Hub } from "aws-amplify/utils";
//@ts-ignore
import mixin from "./mixins/mixin";
const user = useUserStore();
const router = useRouter();
const { hideLoading } = mixin();

watch(user, (val) => {
  if (val.$state.token) {
    hideLoading();
    router.push("/");
  }
});

onBeforeMount(async () => {
  Hub.listen("auth", ({ payload }) => {
    console.log("PAYLOAD::::", payload);
    switch (payload.event) {
      case "signedIn":
        console.log("user have been signedIn successfully.");
        user.currentSession();
        break;
      case "signedOut":
        console.log("user have been signedOut successfully.");
        router.push("/login");
        break;
      case "tokenRefresh":
        console.log("auth tokens have been refreshed.");
        break;
      case "tokenRefresh_failure":
        console.log("failure while refreshing auth tokens.");
        break;
      case "signInWithRedirect":
        console.log("signInWithRedirect API has successfully been resolved.");
        break;
      case "signInWithRedirect_failure":
        console.log("failure while trying to resolve signInWithRedirect API.");
        break;
      case "customOAuthState":
        console.log("custom state returned from CognitoHosted UI");
        break;
    }
  });
});
</script>
