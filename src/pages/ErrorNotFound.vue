<template>
  <div
    class="fullscreen bg-blue text-white text-center q-pa-md flex flex-center"
  >
    <div>
      <div style="font-size: 30vh">404</div>

      <div class="text-h2" style="opacity: 0.4">
        Oops. We can't find your Bio web site...
      </div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="blue"
        unelevated
        @click="openSite('https://app.bio.awslearn.cloud')"
        label="Go to BIO Platform"
        no-caps
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const openSite = (url: any) => {
  window.open(url);
};
defineOptions({
  name: "ErrorNotFound",
});
</script>
