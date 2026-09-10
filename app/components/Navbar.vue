<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-200 bg-white"
    :class="{ 'shadow-md': scrolled }"
  >
    <!-- TOP MAIN NAVBAR -->
    <div class="navbar-inner border-b border-[#E0E0E0]">
      <div class="figma-container flex items-center justify-between py-3">

        <!-- Left: W4C Logo -->
        <NuxtLink to="/" class="flex items-center gap-2 focus:outline-none">
          <img
            src="/images/w4c-logo.png"
            alt="Waste4Change Logo"
            class="h-8 md:h-10 w-auto object-contain"
          />
        </NuxtLink>

        <!-- Desktop Navigation Items -->
        <nav class="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Main navigation">
          <button
            v-for="item in mobileLinks"
            :key="item"
            class="nav-item"
            @click="showToast(item)"
          >
            {{ item }}
          </button>
        </nav>

        <!-- Right Side: Flag + Hamburger (Mobile) -->
        <div class="flex items-center gap-3">
          <!-- Flag Selector -->
          <button @click="showToast('Language Selector')" class="flex items-center gap-1 text-xs font-semibold text-[#404040] hover:text-[#17A2B8] transition-colors" aria-label="Language selector">
            <span class="w-5 h-3.5 rounded-sm overflow-hidden flex flex-col flex-shrink-0 border border-gray-300">
              <span class="flex-1 bg-[#D80027]"></span>
              <span class="flex-1 bg-white"></span>
            </span>
            <svg class="w-3.5 h-3.5 text-[#404040] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>

          <!-- Mobile Hamburger Button -->
          <button
            @click="mobileOpen = !mobileOpen"
            class="lg:hidden p-1.5 text-[#404040] hover:text-[#17A2B8] transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!mobileOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

      </div>
    </div>

    <!-- SUB-NAVBAR (Desktop & Mobile 100% Match with Screenshot) -->
    <div class="subnav-bar bg-[#F5F5F5] border-b border-[#E7E7E7] w-full">
      <div class="figma-container flex items-center justify-between py-2" style="min-height: 48px;">
        
        <!-- Left: Back Chevron + RWR Text -->
        <button @click="scrollToTop" class="flex items-center gap-2 text-[#0A0A0A] hover:opacity-80 transition-opacity">
          <svg class="w-4 h-4 text-[#0A0A0A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"/>
          </svg>
          <span class="font-bold text-xs sm:text-sm text-[#0A0A0A] tracking-wider">RWR</span>
        </button>

        <!-- Right: Pill CTA Button + Down Chevron Icon -->
        <div class="flex items-center gap-3">
          <button
            class="btn-primary text-[11px] sm:text-xs font-bold tracking-wider px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full shadow-sm whitespace-nowrap"
            style="border-radius: 9999px; background-color: #17A2B8; color: #ffffff;"
            @click="showToast('Dukung Tujuan Kami')"
          >
            DUKUNG TUJUAN KAMI
          </button>

          <button
            @click="subnavOpen = !subnavOpen"
            class="p-1 text-[#0A0A0A] hover:opacity-80 transition-opacity flex items-center justify-center"
            aria-label="Toggle subnav menu"
          >
            <svg
              class="w-4 h-4 text-[#0A0A0A] transition-transform duration-200"
              :class="{ 'rotate-180': subnavOpen }"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>
        </div>

      </div>

      <!-- Subnav Dropdown Drawer (toggled when clicking down chevron) -->
      <Transition name="subnav-drawer">
        <div v-if="subnavOpen" class="bg-white border-t border-gray-200 px-4 sm:px-8 py-3 shadow-md">
          <div class="figma-container">
            <nav class="flex flex-col sm:flex-row sm:items-center sm:justify-around gap-2 sm:gap-4">
              <button
                v-for="link in subnavLinks"
                :key="link"
                class="text-left sm:text-center py-2 px-3 text-xs font-semibold text-[#404040] hover:text-[#17A2B8] transition-colors border-b sm:border-b-0 border-gray-100 last:border-none"
                @click="handleSubnavMobileLink(link)"
              >
                {{ link }}
              </button>
            </nav>
          </div>
        </div>
      </Transition>
    </div>

    <!-- MOBILE MAIN MENU DRAWER -->
    <Transition name="mobile-menu">
      <div v-if="mobileOpen" class="lg:hidden border-t border-gray-100 bg-white shadow-lg">
        <nav class="figma-container py-3 flex flex-col" aria-label="Mobile navigation">
          <button
            v-for="link in mobileLinks"
            :key="link"
            class="mobile-nav-link"
            @click="handleMobileLink(link)"
          >
            {{ link }}
          </button>
          <div class="pt-3 border-t border-gray-100 mt-2 flex items-center gap-2">
            <span class="w-5 h-3.5 rounded-sm overflow-hidden flex flex-col flex-shrink-0 border border-gray-300">
              <span class="flex-1 bg-[#D80027]"></span>
              <span class="flex-1 bg-white"></span>
            </span>
            <span class="text-sm font-semibold text-[#404040]">Indonesia (ID)</span>
          </div>
        </nav>
      </div>
    </Transition>

  </header>

  <!-- TOAST NOTIFICATION -->
  <Transition name="toast">
    <div
      v-if="toastVisible"
      class="fixed bottom-6 right-6 z-[100] flex items-center gap-3 bg-gray-900 text-white px-5 py-3.5 rounded-xl shadow-xl max-w-sm"
      role="alert"
    >
      <svg class="w-4 h-4 text-[#17A2B8] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
      <div class="flex-1 min-w-0">
        <p class="text-sm font-semibold leading-tight">{{ toastPage }}</p>
        <p class="text-xs text-gray-400 mt-0.5">Sedang dalam pengembangan 🚀</p>
      </div>
      <button @click="toastVisible = false" class="text-gray-500 hover:text-white transition-colors ml-1 flex-shrink-0">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const mobileOpen = ref(false)
const subnavOpen = ref(false)
const scrolled = ref(false)
const toastVisible = ref(false)
const toastPage = ref('')
let toastTimer: ReturnType<typeof setTimeout> | null = null

const mobileLinks = ['LAYANAN', 'PRODUK', 'TENTANG', 'RISET', 'BLOG & MEDIA', 'PORTOFOLIO', 'KARIER', 'KONTAK']
const subnavLinks = ['TENTANG', 'AKTIVITAS KAMI', 'SITE KAMI', 'DUKUNG TUJUAN KAMI', 'LAYANAN KAMI']

const showToast = (page: string) => {
  toastPage.value = page
  toastVisible.value = true
  if (toastTimer) clearTimeout(toastTimer)
  toastTimer = setTimeout(() => { toastVisible.value = false }, 3500)
}

const handleMobileLink = (page: string) => {
  mobileOpen.value = false
  showToast(page)
}

const handleSubnavMobileLink = (link: string) => {
  subnavOpen.value = false
  showToast(link)
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  const handleScroll = () => { scrolled.value = window.scrollY > 4 }
  window.addEventListener('scroll', handleScroll, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', handleScroll))
})
</script>

<style scoped>
.navbar-inner {
  border-bottom: 1px solid #E0E0E0;
}

.nav-item {
  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
  font-weight: 600;
  color: #404040;
  line-height: 1;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  white-space: nowrap;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  transition: color 0.15s;
}
.nav-item:hover { color: #17A2B8; }

.subnav-item {
  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: #616161;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  white-space: nowrap;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  transition: color 0.15s;
}
.subnav-item:hover { color: #0A0A0A; }

.mobile-nav-link {
  width: 100%;
  text-align: left;
  padding: 12px 0;
  font-family: 'Open Sans', sans-serif;
  font-size: 13px;
  font-weight: 600;
  color: #404040;
  background: none;
  border: none;
  border-bottom: 1px solid #F5F5F5;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  transition: color 0.15s;
}
.mobile-nav-link:hover { color: #17A2B8; }

.mobile-menu-enter-active,
.mobile-menu-leave-active { transition: all 0.2s ease; }
.mobile-menu-enter-from,
.mobile-menu-leave-to { opacity: 0; transform: translateY(-6px); }

.subnav-drawer-enter-active,
.subnav-drawer-leave-active { transition: all 0.2s ease; }
.subnav-drawer-enter-from,
.subnav-drawer-leave-to { opacity: 0; transform: translateY(-4px); }

.toast-enter-active,
.toast-leave-active { transition: all 0.25s ease; }
.toast-enter-from,
.toast-leave-to { opacity: 0; transform: translateY(12px); }
</style>
