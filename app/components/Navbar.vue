<template>
  <header class="sticky top-0 z-50 bg-white" :class="{ 'shadow-nav': scrolled }">

    <!-- MAIN NAVBAR -->
    <div class="navbar-inner">
      <div class="figma-container flex items-center justify-between h-16 lg:h-[84px]">

        <!-- Logo -->
        <NuxtLink to="/" class="flex-shrink-0 flex items-center">
          <img
            src="/images/w4c-logo.png"
            alt="Waste4Change - Responsible Waste Management"
            class="h-8 lg:h-9 w-auto"
            width="120"
            height="36"
          />
        </NuxtLink>

        <!-- Desktop Navigation Links -->
        <nav class="hidden lg:flex items-center gap-9" aria-label="Main navigation">
          <button class="nav-item flex items-center gap-1" @click="showToast('Layanan')">
            LAYANAN
            <svg class="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>

          <button class="nav-item flex items-center gap-1" @click="showToast('Produk')">
            PRODUK
            <svg class="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>

          <button class="nav-item" @click="showToast('Tentang')">TENTANG</button>
          <button class="nav-item" @click="showToast('Riset')">RISET</button>

          <button class="nav-item flex items-center gap-1" @click="showToast('Blog & Media')">
            BLOG &amp; MEDIA
            <svg class="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>

          <button class="nav-item" @click="showToast('Portofolio')">PORTOFOLIO</button>

          <button class="nav-item flex items-center gap-1" @click="showToast('Karier')">
            KARIER
            <svg class="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>

          <button class="nav-item" @click="showToast('Kontak')">KONTAK</button>
        </nav>

        <!-- Right Controls: Language Selector + Mobile Toggle -->
        <div class="flex items-center gap-4 lg:gap-4">
          <!-- Language Selector (Mobile & Desktop) -->
          <button
            class="flex items-center gap-1.5 px-1 py-1 rounded hover:bg-gray-50 transition-colors"
            @click="showToast('Language Selector')"
            aria-label="Pilih Bahasa"
          >
            <span class="w-6 h-4 rounded-[2px] overflow-hidden flex flex-col flex-shrink-0 border border-gray-300 shadow-sm">
              <span class="flex-1 bg-[#D80027]"></span>
              <span class="flex-1 bg-white"></span>
            </span>
            <span class="hidden lg:inline text-[11px] font-bold text-[#404040] tracking-wide">ID</span>
            <svg class="w-3.5 h-3.5 text-[#2B2B2B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>

          <!-- Mobile Hamburger -->
          <button
            class="lg:hidden p-1 rounded hover:bg-gray-100 transition-colors text-[#0A0A0A]"
            @click="mobileOpen = !mobileOpen"
            :aria-expanded="mobileOpen"
            aria-label="Toggle navigation menu"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path v-if="!mobileOpen" stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
              <path v-else stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

      </div>
    </div>

    <!-- SECONDARY SUBNAV BAR -->
    <div class="hidden lg:block bg-[#F5F5F5] shadow-nav">
      <div class="figma-container flex items-center justify-between" style="height:44px;">

        <!-- Subnav Links -->
        <nav class="flex items-center gap-6" aria-label="Secondary navigation">
          <button
            v-for="link in subnavLinks"
            :key="link"
            class="subnav-item"
            @click="showToast(link)"
          >
            {{ link }}
          </button>
        </nav>

        <!-- Subnav CTA -->
        <button class="btn-primary" style="font-size:12px; letter-spacing:0.08em;" @click="showToast('Dukung Tujuan Kami')">
          DUKUNG TUJUAN KAMI
        </button>

      </div>
    </div>

    <!-- MOBILE DRAWER -->
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
const mobileOpen = ref(false)
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

.toast-enter-active,
.toast-leave-active { transition: all 0.25s ease; }
.toast-enter-from,
.toast-leave-to { opacity: 0; transform: translateY(12px); }
</style>