<template>
  <q-page class="flex flex-center">
    <div id="particles-js" :style="particlesStyle"></div>
    <div
      class="animated bounceInUp q-mt-lg"
      v-bind:style="$q.screen.lt.sm ? { width: '90%' } : { width: '35%' }"
    >
      <q-card class="bg-white q-mt-lg profile-card">
        <q-card-section>
          <q-avatar
            style="
              height: initial;
              border-radius: 40px;
              transform: translate(-50%, -5%);
            "
            size="125px"
            class="absolute-center shadow-19 avatar-pulse-glow"
            :style="{ '--primary-color': props.primaryColor }"
          >
            <img :src="props.userImage" />
          </q-avatar>
        </q-card-section>

        <q-card-section
          class="text-black"
          style="padding-top: 170px; text-align: center"
        >
          <div class="row justify-center" style="display: contents">
            <div class="col-12 col-md-auto">
              <div class="text-h5 text-bold ft">{{ props.userName }}</div>
            </div>
            <div class="col-12 col-md-auto q-mt-sm">
              <div
                class="position-badge"
                :style="{
                  backgroundColor: props.primaryColor,
                  color: 'white',
                  padding: '6px 16px',
                  borderRadius: '20px',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  display: 'inline-flex',
                  alignItems: 'center',
                  boxShadow: `0 3px 10px ${props.primaryColor}40`,
                }"
              >
                <q-icon name="work_outline" size="14px" class="q-mr-xs" />
                {{ props.userPosition }}
              </div>
            </div>
            <q-separator inset class="q-my-sm" />
            <div class="col-12 col-md-auto q-pa-sm">
              <p class="text-subtitle2 text-grey-7">
                {{ props.userBio }}
              </p>
            </div>
          </div>
        </q-card-section>

        <q-separator class="bg-grey-4" />

        <q-card-section
          v-if="visibleSocialNetworks.length > 0"
          class="text-black"
          style="text-align: center"
        >
          <div class="social-title q-mb-md">
            <q-icon
              name="share"
              size="16px"
              :color="props.primaryColor"
              class="q-mr-xs"
            />
            <span class="text-subtitle2 text-weight-medium"
              >Connect with me</span
            >
          </div>

          <div class="row justify-center q-gutter-md">
            <q-btn
              v-for="(item, index) in visibleSocialNetworks"
              :key="index"
              @click="redirectToNetwork(item.url)"
              class="social-btn"
              :style="{
                '--primary-color': props.primaryColor,
                borderColor: props.primaryColor,
                color: props.primaryColor,
              }"
              size="md"
              round
              outline
            >
              <q-icon :name="item.icon" size="1.2rem" />
              <q-tooltip
                class="text-body2"
                :style="{ backgroundColor: props.primaryColor }"
              >
                {{ item.name }}
              </q-tooltip>
            </q-btn>
          </div>
        </q-card-section>
      </q-card>

      <!-- Certifications Section - Para todas las pantallas -->
      <div
        v-if="props.userCredlyBadges && props.userCredlyBadges.length > 0"
        class="animated bounceInUp q-py-md certifications-section"
      >
        <q-card class="bg-white certifications-card">
          <q-card-section class="text-center">
            <div class="certifications-title q-mb-md">
              <q-icon
                name="verified"
                size="18px"
                :color="certificationTextColor"
                class="q-mr-xs"
              />
              <span
                class="text-subtitle1 text-weight-bold"
                :style="{ color: certificationTextColor }"
              >
                Professional Certifications
              </span>
            </div>
            <p
              class="text-body2 text-weight-medium q-mb-md"
              :style="{ color: certificationTextColor }"
            >
              Click on any badge to verify
            </p>

            <div class="badges-grid">
              <q-img
                v-for="(badge, index) in props.userCredlyBadges"
                :key="index"
                @click="redirectToNetwork(badge.url)"
                :src="badge.image"
                class="badge-image"
                :class="`badge-animation-${(index % 4) + 1}`"
                :style="{
                  animationDelay: `${index * 0.2}s`,
                }"
                :alt="badge.name || 'Certification Badge'"
                loading="lazy"
                fit="contain"
              >
                <template v-slot:error>
                  <div class="badge-error">
                    <q-icon name="error_outline" size="24px" color="grey-5" />
                  </div>
                </template>
              </q-img>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { computed, onMounted, onBeforeMount } from "vue";
import { useQuasar, setCssVar } from "quasar";

const $q = useQuasar();

interface Props {
  userImage?: string;
  primaryColor?: string;
  userName?: string;
  userPosition?: string;
  userBio?: string;
  userCredlyBadges?: any[];
  userSocialNetworks?: any[];
}

const props = withDefaults(defineProps<Props>(), {
  //@ts-ignore
  userImage: () => new URL("../../public/avatar.png", import.meta.url).href,
  primaryColor: () => "#402d6b",
  userName: () => "John Doe",
  userPosition: () => "AWS Cloud Architect",
  userBio: () =>
    "John Doe is a seasoned AWS Cloud Architect and DevOps Engineer with extensive experience in designing scalable cloud solutions and automating deployment pipelines. An AWS Certified Solutions Architect, John excels in optimizing infrastructure for security, cost, and performance, leveraging tools like Terraform and Kubernetes.",
  userCredlyBadges: () => [],
  userSocialNetworks: () => [],
});

// Computed properties
const visibleSocialNetworks = computed(() => {
  return (
    props.userSocialNetworks?.filter(
      (network) => network.show && network.url
    ) || []
  );
});

// Function to determine if a color is light or dark
const isLightColor = (color: string) => {
  const hex = color.replace("#", "");
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 155;
};

const certificationTextColor = computed(() => {
  return isLightColor(props.primaryColor) ? "#2c3e50" : props.primaryColor;
});

const particlesStyle = computed(() => ({
  position: "absolute" as const,
  width: "100%",
  height: "100%",
  background: `linear-gradient(145deg, ${props.primaryColor} 15%, #030303 70%)`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "50% 50%",
  transition: "background 0.3s ease",
}));

// Methods
const redirectToNetwork = (url: string) => {
  if (url) {
    const formattedUrl = url.startsWith("http") ? url : `https://${url}`;
    window.open(formattedUrl, "_blank", "noopener,noreferrer");
  }
};

// Lifecycle hooks
onBeforeMount(() => {
  setCssVar("primary", props.primaryColor);
});

const initParticles = () => {
  //@ts-ignore
  if (typeof particlesJS !== "undefined") {
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
  }
};

onMounted(() => {
  setTimeout(() => {
    initParticles();
  }, 100);
});
</script>

<style scoped>
/* Avatar Pulse Glow Animation - Simple and Clean */
.avatar-pulse-glow {
  animation: avatarPulseGlow 3s ease-in-out infinite;
}

.avatar-pulse-glow img {
  width: 100% !important;
  height: 100% !important;
  object-fit: cover !important;
  object-position: center !important;
  border-radius: 40px !important;
  display: block !important;
}

@keyframes avatarPulseGlow {
  0%,
  100% {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1),
      0 0 10px var(--primary-color, #402d6b),
      0 0 15px var(--primary-color, #402d6b);
    filter: brightness(1);
  }
  50% {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1),
      0 0 20px var(--primary-color, #402d6b),
      0 0 30px var(--primary-color, #402d6b),
      0 0 40px var(--primary-color, #402d6b);
    filter: brightness(1.05);
  }
}

/* Profile Card Styles */
.profile-card {
  border-radius: 15px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  overflow: hidden;
}

.profile-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
}

.position-badge {
  transition: all 0.3s ease;
  animation: fadeInUp 0.6s ease-out 0.3s both;
}

.position-badge:hover {
  transform: translateY(-1px);
}

.social-title {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2c3e50;
}

.social-btn {
  transition: all 0.3s ease;
}

.social-btn:hover {
  transform: translateY(-2px) scale(1.05);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
}

.certifications-title {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2c3e50;
}

.badges-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 15px;
  justify-items: center;
  max-width: 400px;
  margin: 0 auto;
}

.badge-image {
  width: 100px;
  height: 100px;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 8px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  opacity: 0;
  animation-fill-mode: both;
  animation-duration: 0.8s;
  animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.badge-image:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

/* Animaciones desde diferentes direcciones */
.badge-animation-1 {
  animation-name: slideInFromLeft;
}

.badge-animation-2 {
  animation-name: slideInFromTop;
}

.badge-animation-3 {
  animation-name: slideInFromRight;
}

.badge-animation-4 {
  animation-name: bounceInFromBottom;
}

/* Keyframes para las animaciones */
@keyframes slideInFromLeft {
  0% {
    opacity: 0;
    transform: translateX(-100px) rotate(-180deg) scale(0.3);
  }
  50% {
    opacity: 0.8;
    transform: translateX(10px) rotate(-90deg) scale(0.8);
  }
  100% {
    opacity: 1;
    transform: translateX(0) rotate(0deg) scale(1);
  }
}

@keyframes slideInFromTop {
  0% {
    opacity: 0;
    transform: translateY(-100px) rotate(180deg) scale(0.3);
  }
  50% {
    opacity: 0.8;
    transform: translateY(10px) rotate(90deg) scale(0.8);
  }
  100% {
    opacity: 1;
    transform: translateY(0) rotate(0deg) scale(1);
  }
}

@keyframes slideInFromRight {
  0% {
    opacity: 0;
    transform: translateX(100px) rotate(180deg) scale(0.3);
  }
  50% {
    opacity: 0.8;
    transform: translateX(-10px) rotate(90deg) scale(0.8);
  }
  100% {
    opacity: 1;
    transform: translateX(0) rotate(0deg) scale(1);
  }
}

@keyframes bounceInFromBottom {
  0% {
    opacity: 0;
    transform: translateY(100px) scale(0.3) rotate(-180deg);
  }
  50% {
    opacity: 0.8;
    transform: translateY(-20px) scale(1.1) rotate(-90deg);
  }
  70% {
    opacity: 1;
    transform: translateY(10px) scale(0.9) rotate(-45deg);
  }
  85% {
    transform: translateY(-5px) scale(1.05) rotate(0deg);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1) rotate(0deg);
  }
}

.badge-error {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  background: #f5f5f5;
  border-radius: 8px;
}

/* Certifications Section */
.certifications-section {
  margin-top: 20px;
}

.certifications-card {
  border-radius: 15px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  overflow: hidden;
}

.certifications-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
}

.certifications-title {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
}

.certifications-title span {
  font-size: 1.1rem;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  letter-spacing: 0.5px;
}

.badges-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 15px;
  justify-items: center;
  max-width: 500px;
  margin: 0 auto;
}

.badge-image {
  width: 100px;
  height: 100px;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 8px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  opacity: 0;
  animation-fill-mode: both;
  animation-duration: 0.8s;
  animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.badge-image:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.badge-error {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  background: #f5f5f5;
  border-radius: 8px;
}

/* Animaciones desde diferentes direcciones */
.badge-animation-1 {
  animation-name: slideInFromLeft;
}

.badge-animation-2 {
  animation-name: slideInFromTop;
}

.badge-animation-3 {
  animation-name: slideInFromRight;
}

.badge-animation-4 {
  animation-name: bounceInFromBottom;
}

/* Keyframes para las animaciones */
@keyframes slideInFromLeft {
  0% {
    opacity: 0;
    transform: translateX(-100px) rotate(-180deg) scale(0.3);
  }
  50% {
    opacity: 0.8;
    transform: translateX(10px) rotate(-90deg) scale(0.8);
  }
  100% {
    opacity: 1;
    transform: translateX(0) rotate(0deg) scale(1);
  }
}

@keyframes slideInFromTop {
  0% {
    opacity: 0;
    transform: translateY(-100px) rotate(180deg) scale(0.3);
  }
  50% {
    opacity: 0.8;
    transform: translateY(10px) rotate(90deg) scale(0.8);
  }
  100% {
    opacity: 1;
    transform: translateY(0) rotate(0deg) scale(1);
  }
}

@keyframes slideInFromRight {
  0% {
    opacity: 0;
    transform: translateX(100px) rotate(180deg) scale(0.3);
  }
  50% {
    opacity: 0.8;
    transform: translateX(-10px) rotate(90deg) scale(0.8);
  }
  100% {
    opacity: 1;
    transform: translateX(0) rotate(0deg) scale(1);
  }
}

@keyframes bounceInFromBottom {
  0% {
    opacity: 0;
    transform: translateY(100px) scale(0.3) rotate(-180deg);
  }
  50% {
    opacity: 0.8;
    transform: translateY(-20px) scale(1.1) rotate(-90deg);
  }
  70% {
    opacity: 1;
    transform: translateY(10px) scale(0.9) rotate(-45deg);
  }
  85% {
    transform: translateY(-5px) scale(1.05) rotate(0deg);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1) rotate(0deg);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .badges-grid {
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    gap: 12px;
  }

  .badge-image {
    width: 80px;
    height: 80px;
  }

  .badge-error {
    height: 80px;
  }
}

/* Responsive */
@media (max-width: 768px) {
  .badges-grid {
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    gap: 12px;
  }

  .badge-image {
    width: 80px;
    height: 80px;
  }

  .badge-error {
    height: 80px;
  }
}
</style>
