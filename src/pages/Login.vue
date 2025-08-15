<template>
  <q-layout style="min-height: 100vh">
    <q-page-container>
      <q-page class="login-page">
        <!-- Particles Background -->
        <div id="login-particles" class="particles-background"></div>

        <!-- Floating Elements -->
        <div class="floating-elements">
          <div class="floating-shape shape-1"></div>
          <div class="floating-shape shape-2"></div>
          <div class="floating-shape shape-3"></div>
          <div class="floating-shape shape-4"></div>
        </div>

        <!-- Main Content -->
        <div class="login-container">
          <!-- Login Card -->
          <q-card class="login-card glass-effect animated fadeInUp">
            <q-card-section class="login-header">
              <div class="welcome-text">
                <h1 class="brand-title">BIO Platform</h1>
                <p class="brand-subtitle">
                  Create your professional digital presence
                </p>
              </div>
            </q-card-section>

            <q-card-section class="login-form-section">
              <div class="amplify-container">
                <authenticator>
                  <template v-slot:header>
                    <div class="auth-header">
                      <div class="logo-container">
                        <img
                          class="brand-logo"
                          alt="BIO Platform Logo"
                          src="icon.png"
                        />
                        <div class="logo-glow"></div>
                      </div>
                      <h3 class="auth-title">Access Your Account</h3>
                    </div>
                  </template>
                </authenticator>
              </div>
            </q-card-section>
          </q-card>

          <!-- Personal Branding Section -->
          <div class="personal-branding animated fadeInUp">
            <div class="creator-info">
              <p class="created-by">Created by</p>
              <h3 class="creator-name">Alejandro Castañeda Ocampo</h3>
              <a
                href="https://alejandro.bio.awslearn.cloud"
                target="_blank"
                rel="noopener noreferrer"
                class="creator-link"
              >
                <q-icon name="launch" size="16px" class="q-mr-xs" />
                alejandro.bio.awslearn.cloud
              </a>
            </div>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { Authenticator } from "@aws-amplify/ui-vue";
import "@aws-amplify/ui-vue/styles.css";
import { useMeta } from "quasar";
import { useGeneralStore } from "src/stores/General";

const general = useGeneralStore();
const metaData = general.getMetadata();
useMeta(metaData);

const initLoginParticles = () => {
  //@ts-ignore
  if (typeof particlesJS !== "undefined") {
    //@ts-ignore
    particlesJS("login-particles", {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800,
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
        },
        opacity: {
          value: 0.2,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.05,
            sync: false,
          },
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: true,
            speed: 2,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#ffffff",
          opacity: 0.1,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
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
              opacity: 0.3,
            },
          },
          push: {
            particles_nb: 4,
          },
        },
      },
      retina_detect: true,
    });
  }
};

onMounted(() => {
  setTimeout(() => {
    initLoginParticles();
  }, 100);
});
</script>

<style scoped>
/* Main Login Page */
.login-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #402d6b 0%, #1a1a2e 50%, #16213e 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  position: relative;
  overflow: hidden;
}

/* Particles Background */
.particles-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

/* Floating Elements */
.floating-elements {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 2;
}

.floating-shape {
  position: absolute;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 50%;
  animation: floatShape 8s ease-in-out infinite;
}

.shape-1 {
  width: 120px;
  height: 120px;
  top: 10%;
  left: 10%;
  animation-delay: 0s;
}

.shape-2 {
  width: 80px;
  height: 80px;
  top: 20%;
  right: 15%;
  animation-delay: 2s;
}

.shape-3 {
  width: 100px;
  height: 100px;
  bottom: 20%;
  left: 15%;
  animation-delay: 4s;
}

.shape-4 {
  width: 60px;
  height: 60px;
  bottom: 30%;
  right: 20%;
  animation-delay: 6s;
}

@keyframes floatShape {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  25% {
    transform: translateY(-20px) rotate(90deg);
  }
  50% {
    transform: translateY(-10px) rotate(180deg);
  }
  75% {
    transform: translateY(-30px) rotate(270deg);
  }
}

/* Main Container */
.login-container {
  width: 100%;
  max-width: 450px;
  z-index: 3;
  position: relative;
}

/* Login Card */
.login-card {
  margin-bottom: 30px;
  overflow: hidden;
}

.glass-effect {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
}

.login-header {
  padding: 25px 30px 20px;
  text-align: center;
  background: linear-gradient(135deg, #402d6b 0%, #1976d2 100%);
  color: white;
}

.brand-title {
  font-size: 2.2rem;
  font-weight: 700;
  margin: 0 0 8px 0;
  background: linear-gradient(45deg, #ffffff, #e3f2fd);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.brand-subtitle {
  font-size: 1rem;
  opacity: 0.9;
  margin: 0 0 20px 0;
  font-weight: 300;
}

.header-separator {
  width: 60px;
  height: 2px;
  background: rgba(255, 255, 255, 0.3);
  margin: 0 auto 20px auto;
  border-radius: 1px;
}

.welcome-title {
  font-size: 1.6rem;
  font-weight: 600;
  margin: 0 0 8px 0;
}

.welcome-subtitle {
  font-size: 0.95rem;
  opacity: 0.9;
  margin: 0;
  font-weight: 300;
}

.login-form-section {
  padding: 30px;
}

.amplify-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.auth-header {
  text-align: center;
  margin-bottom: 20px;
}

.logo-container {
  position: relative;
  display: inline-block;
  margin-bottom: 15px;
}

.brand-logo {
  width: 60px;
  height: 60px;
  border-radius: 15px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  position: relative;
  z-index: 2;
}

.brand-logo:hover {
  transform: scale(1.1);
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.3);
}

.logo-glow {
  position: absolute;
  top: -8px;
  left: -8px;
  right: -8px;
  bottom: -8px;
  background: linear-gradient(45deg, #402d6b, #1976d2, #402d6b);
  border-radius: 20px;
  opacity: 0.3;
  animation: logoGlow 3s ease-in-out infinite;
  z-index: 1;
}

@keyframes logoGlow {
  0%,
  100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(1.05);
  }
}

.auth-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: #2c3e50;
  margin: 10px 0 0 0;
}

/* Personal Branding Section */
.personal-branding {
  text-align: center;
  margin-top: 20px;
}

.creator-info {
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 12px;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.06);
  transition: all 0.3s ease;
  max-width: 280px;
  margin: 0 auto;
}

.creator-info:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(-1px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.created-by {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
  margin: 0 0 4px 0;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.creator-name {
  font-size: 0.95rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
  margin: 0 0 8px 0;
}

.creator-link {
  display: inline-flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  font-size: 0.8rem;
  font-weight: 400;
  padding: 4px 8px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  backdrop-filter: blur(3px);
}

.creator-link:hover {
  color: rgba(255, 255, 255, 0.9);
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-0.5px);
  text-decoration: none;
}

/* Animations */
.animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}

.fadeInDown {
  animation-name: fadeInDown;
}

.fadeInUp {
  animation-name: fadeInUp;
  animation-delay: 0.3s;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .login-container {
    max-width: 95%;
  }

  .login-header {
    padding: 20px 20px 15px;
  }

  .brand-title {
    font-size: 1.8rem;
  }

  .brand-subtitle {
    font-size: 0.9rem;
  }

  .welcome-title {
    font-size: 1.4rem;
  }

  .welcome-subtitle {
    font-size: 0.9rem;
  }

  .login-form-section {
    padding: 20px;
  }

  .creator-info {
    padding: 10px 12px;
    max-width: 260px;
  }

  .creator-name {
    font-size: 0.9rem;
  }

  .creator-link {
    font-size: 0.75rem;
    padding: 3px 6px;
  }
}

@media (max-width: 480px) {
  .login-page {
    padding: 10px;
  }

  .login-header {
    padding: 18px 15px 12px;
  }

  .brand-title {
    font-size: 1.6rem;
  }

  .welcome-title {
    font-size: 1.2rem;
  }
}

.brand-logo {
  width: 60px;
  height: 60px;
}

.brand-title {
  font-size: 1.8rem;
}
</style>

<style>
/* Global Amplify UI Customizations */
.amplify-authenticator {
  width: 100% !important;
  max-width: 400px !important;
  margin: 0 auto !important;
}

.amplify-button--primary {
  background: linear-gradient(135deg, #402d6b 0%, #1976d2 100%) !important;
  border: none !important;
  border-radius: 12px !important;
  padding: 12px 24px !important;
  font-weight: 600 !important;
  transition: all 0.3s ease !important;
  box-shadow: 0 4px 15px rgba(64, 45, 107, 0.3) !important;
  width: 100% !important;
}

.amplify-button--primary:hover {
  transform: translateY(-2px) !important;
  box-shadow: 0 8px 25px rgba(64, 45, 107, 0.4) !important;
}

.amplify-input {
  border-radius: 12px !important;
  border: 2px solid #e0e0e0 !important;
  padding: 12px 16px !important;
  transition: all 0.3s ease !important;
  width: 100% !important;
}

.amplify-input:focus {
  border-color: #402d6b !important;
  box-shadow: 0 0 0 3px rgba(64, 45, 107, 0.1) !important;
}

.amplify-card {
  border: none !important;
  box-shadow: none !important;
  background: transparent !important;
  width: 100% !important;
}

.amplify-tabs-item[data-state="active"] {
  color: #402d6b !important;
  border-bottom-color: #402d6b !important;
}

.amplify-link {
  color: #402d6b !important;
}

.amplify-link:hover {
  color: #1976d2 !important;
}

.amplify-form {
  width: 100% !important;
}

.amplify-field {
  margin-bottom: 20px !important;
}

.amplify-field-group {
  width: 100% !important;
}
</style>
