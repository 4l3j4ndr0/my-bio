<template>
  <q-page class="flex flex-center">
    <div id="particles-js"></div>
    <div
      class="animated bounceInUp"
      v-bind:style="
        $q.screen.lt.sm
          ? { width: '90%', 'padding-top': '100px' }
          : { width: '45%' }
      "
    >
      <q-card class="bg-white">
        <q-card-section>
          <q-avatar size="150px" class="absolute-center shadow-19">
            <img class="circle" :src="props.userImage" />
          </q-avatar>
        </q-card-section>
        <q-card-section
          class="text-black"
          style="padding-top: 100px; text-align: center"
        >
          <div class="row justify-center" style="display: contents">
            <div class="col-12 col-md-auto">
              <div class="text-h5 text-bold ft">{{ props.userName }}</div>
            </div>
            <div class="col-12 col-md-auto">
              <p class="text-subtitle2 text-grey-5">
                {{ props.userPosition }}
              </p>
            </div>
            <q-separator inset />
            <div class="col-12 col-md-auto q-pa-sm">
              <p class="text-subtitle3 text-grey-7">
                {{ props.userBio }}
              </p>
            </div>
          </div>
        </q-card-section>
        <q-separator class="bg-grey-4" />
        <q-card-section class="text-black" style="text-align: center">
          <div class="row justify-center q-gutter-md">
            <q-btn
              v-for="item in userSocialNetworks.filter((i) => i.show)"
              @click="redirectToNetwork(`${item.url}`)"
              class="text-primary"
              size="md"
              round
              outline
            >
              <q-icon color="primary" :name="item.icon" size="1.2rem" />
            </q-btn>
          </div>
        </q-card-section>
      </q-card>
      <div class="animated bounceInUp q-py-md">
        <div class="bg-transparent" style="text-align: center">
          <q-img
            @click="redirectToNetwork(item.url)"
            v-for="item in userCredlyBadges"
            style="width: 30%; height: 30%; cursor: pointer"
            :src="item.image"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from "vue";
import { Certifications, SocialNetworks } from "./models";
import { useQuasar } from "quasar";
const $q = useQuasar();
interface Props {
  userImage?: string;
  userName?: string;
  userPosition?: string;
  userBio?: string;
  userCredlyBadges?: any[];
  userSocialNetworks?: any[];
}

const props = withDefaults(defineProps<Props>(), {
  //@ts-ignore
  userImage: () => new URL("../../avatar.png", import.meta.url).href,
  userName: () => "Jhon Doe",
  userPosition: () => "AWS Architect",
  userBio: () =>
    "John Doe is a seasoned AWS Cloud Architect and DevOps Engineer with extensive experience in designing scalable cloud solutions and automating deployment pipelines. An AWS Certified Solutions Architect, John excels in optimizing infrastructure for security, cost, and performance, leveraging tools like Terraform and Kubernetes. ",
  userCredlyCertifications: () => [],
  userSocialNetworks: () => [],
});

const redirectToNetwork = (url: string) => {
  window.open(url);
};

onMounted(() => {
  //@ts-ignore
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 700,
        },
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 5,
        },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 0.1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 10,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  });
});
</script>
<style>
#particles-js {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(145deg, rgb(74, 94, 137) 15%, #030303 70%);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
}
</style>
