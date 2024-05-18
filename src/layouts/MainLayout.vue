<template>
  <q-layout view="hHh Lpr fFf" v-if="user.token">
    <q-header class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title class="row">
          <div
            class="header-div"
            v-if="$q.screen.gt.xs"
            style="cursor: pointer"
            @click="$router.push('/')"
          ></div>
        </q-toolbar-title>
        <q-btn
          v-if="user.subdomain"
          color="white"
          text-color="primary"
          glossy
          unelevated
          icon="fa-solid fa-globe"
          no-caps
          :label="`https://${user.subdomain}.bio.awslearn.cloud`"
          rounded
          @click="openSite()"
          size="lg"
          class="q-mr-lg"
        />
        <q-chip
          color="secondary"
          text-color="white"
          icon="person"
          class="q-ml-lg"
        >
          {{ user.email }}
        </q-chip>

        <div class="q-gutter-lg">
          <q-btn
            @click="closeSession()"
            flat
            round
            dense
            icon="fas fa-sign-out-alt"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container class="bg-grey-2">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { useUserStore } from "../stores/User";
//@ts-ignore
import mixin from "../mixins/mixin";
const { showLoading, hideLoading, showNoty } = mixin();
const user = useUserStore();
const openSite = () => {
  window.open(`https://${user.subdomain}.bio.awslearn.cloud`);
};
const closeSession = async () => {
  showLoading("Login out...");
  await user.logOut();
  hideLoading();
};
</script>
<style>
.header-div {
  width: 20%; /* Full width */
  height: 90px; /* Adjust the height as necessary */
  background-image: url("https://app.bio.awslearn.cloud/icon.png"); /* Path to your PNG image */
  background-size: cover; /* Cover the entire div area */
  background-repeat: no-repeat; /* Prevent the image from repeating */
  background-position: center center; /* Center the image in the div */
}
</style>
