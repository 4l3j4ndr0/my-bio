<template>
  <q-layout style="min-height: 500px">
    <q-page-container>
      <q-page class="flex bg-image flex-center">
        <q-card>
          <authenticator>
            <template v-slot:header>
              <div style="text-align: center">
                <img
                  class="amplify-image"
                  alt="Amplify logo"
                  src="icon.png"
                  style="width: 200px"
                />
              </div>
            </template>
          </authenticator>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script setup lang="ts">
import { Authenticator } from "@aws-amplify/ui-vue";
import "@aws-amplify/ui-vue/styles.css";
import { useMeta } from "quasar";
import { useGeneralStore } from "src/stores/General";
const general = useGeneralStore();
const metaData = general.getMetadata();
useMeta(metaData);
</script>

<style>
.bg-image {
  background-image: linear-gradient(135deg, #402d6b 0%, #411329 100%);
}
.amplify-button--primary {
  background: #402d6b;
}
</style>
