<template>
  <q-layout view="hHh Lpr fFf" v-if="user.token" class="main-layout">
    <!-- Particles Background -->
    <div id="main-particles" class="particles-background"></div>

    <q-header class="modern-header glass-header">
      <q-toolbar class="header-toolbar">
        <!-- Logo Section -->
        <q-toolbar-title class="header-title">
          <div
            class="logo-section"
            v-if="$q.screen.gt.xs"
            @click="$router.push('/')"
          >
            <img
              src="https://app.bio.awslearn.cloud/icon.png"
              alt="BIO Platform"
              class="header-logo"
            />
            <div class="brand-text">
              <span class="brand-name">BIO Platform</span>
              <span class="brand-tagline">Admin Panel</span>
            </div>
          </div>
        </q-toolbar-title>

        <!-- Action Buttons -->
        <div class="header-actions">
          <!-- View Site Button -->
          <q-btn
            v-if="user.subdomain"
            class="view-site-btn"
            unelevated
            rounded
            no-caps
            @click="openSite()"
          >
            <q-icon name="launch" size="18px" class="q-mr-xs" />
            <span class="btn-text">View Site</span>
            <q-tooltip class="text-body2"> Open your public profile </q-tooltip>
          </q-btn>

          <!-- User Info -->
          <div class="user-info">
            <q-avatar size="32px" class="user-avatar">
              <img v-if="user.userImage" :src="user.userImage" />
              <q-icon v-else name="person" size="18px" />
            </q-avatar>
            <div class="user-details" v-if="$q.screen.gt.sm">
              <span class="user-name">{{ user.fullName || "User" }}</span>
              <span class="user-email">{{ user.email }}</span>
            </div>
          </div>

          <!-- Logout Button -->
          <q-btn
            @click="closeSession()"
            class="logout-btn"
            round
            flat
            icon="logout"
          >
            <q-tooltip class="text-body2"> Sign out </q-tooltip>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container class="page-container">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useUserStore } from "../stores/User";
//@ts-ignore
import mixin from "../mixins/mixin";
import { useRouter } from "vue-router";

const router = useRouter();
const { showLoading, hideLoading, showNoty } = mixin();
const user = useUserStore();

const openSite = () => {
  window.open(`https://${user.subdomain}.bio.awslearn.cloud`, "_blank");
};

const closeSession = async () => {
  showLoading("Signing out...");
  await user.logOut();
  hideLoading();
  router.push("/login");
};

const initMainParticles = () => {
  //@ts-ignore
  if (typeof particlesJS !== "undefined") {
    //@ts-ignore
    particlesJS("main-particles", {
      particles: {
        number: {
          value: 60,
          density: {
            enable: true,
            value_area: 1000,
          },
        },
        color: {
          value: "#ffffff",
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: 0.1,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.02,
            sync: false,
          },
        },
        size: {
          value: 2,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: true,
          distance: 120,
          color: "#ffffff",
          opacity: 0.05,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.5,
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
            enable: false,
          },
          onclick: {
            enable: false,
          },
          resize: true,
        },
      },
      retina_detect: true,
    });
  }
};

onMounted(() => {
  setTimeout(() => {
    initMainParticles();
  }, 100);
});
</script>

<style scoped>
/* Main Layout */
.main-layout {
  background: linear-gradient(135deg, #402d6b 0%, #1a1a2e 50%, #16213e 100%);
  min-height: 100vh;
}

/* Particles Background */
.particles-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}

/* Header Styles */
.modern-header {
  background: rgba(255, 255, 255, 0.95) !important;
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.header-toolbar {
  padding: 8px 20px;
  min-height: 70px;
}

/* Logo Section */
.logo-section {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 8px 12px;
  border-radius: 12px;
}

.logo-section:hover {
  background: rgba(64, 45, 107, 0.1);
  transform: translateY(-1px);
}

.header-logo {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.brand-text {
  display: flex;
  flex-direction: column;
}

.brand-name {
  font-size: 1.1rem;
  font-weight: 700;
  color: #402d6b;
  line-height: 1.2;
}

.brand-tagline {
  font-size: 0.75rem;
  color: #666;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Header Actions */
.header-actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.view-site-btn {
  background: linear-gradient(135deg, #402d6b 0%, #1976d2 100%);
  color: white;
  padding: 8px 16px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(64, 45, 107, 0.3);
}

.view-site-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(64, 45, 107, 0.4);
}

.btn-text {
  font-size: 0.9rem;
}

/* User Info */
.user-info {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px 12px;
  background: rgba(64, 45, 107, 0.08);
  border-radius: 20px;
  transition: all 0.3s ease;
}

.user-info:hover {
  background: rgba(64, 45, 107, 0.12);
}

.user-avatar {
  border: 2px solid rgba(64, 45, 107, 0.2);
  transition: all 0.3s ease;
}

.user-avatar:hover {
  border-color: #402d6b;
  transform: scale(1.05);
}

.user-details {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.user-name {
  font-size: 0.85rem;
  font-weight: 600;
  color: #402d6b;
  line-height: 1.2;
}

.user-email {
  font-size: 0.75rem;
  color: #666;
  line-height: 1.2;
}

/* Logout Button */
.logout-btn {
  color: #666;
  transition: all 0.3s ease;
}

.logout-btn:hover {
  color: #402d6b;
  background: rgba(64, 45, 107, 0.1);
  transform: scale(1.05);
}

/* Page Container */
.page-container {
  background: transparent;
  position: relative;
  z-index: 2;
  padding-top: 20px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .header-toolbar {
    padding: 8px 15px;
    min-height: 60px;
  }

  .header-actions {
    gap: 8px;
  }

  .view-site-btn {
    padding: 6px 12px;
  }

  .btn-text {
    display: none;
  }

  .user-info {
    padding: 4px 8px;
  }
}

@media (max-width: 480px) {
  .header-toolbar {
    padding: 8px 10px;
  }

  .brand-name {
    font-size: 1rem;
  }

  .brand-tagline {
    font-size: 0.7rem;
  }

  .header-logo {
    width: 32px;
    height: 32px;
  }
}
</style>
