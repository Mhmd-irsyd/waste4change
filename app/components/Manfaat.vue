<template>
  <section id="manfaat" class="manfaat-section">
    <div class="manfaat-container figma-container">

      <!-- Header -->
      <div class="manfaat-header">
        <div class="manfaat-title-wrap">
          <h2 class="manfaat-title">MANFAAT</h2>
          <div class="manfaat-title-line"></div>
        </div>
        <p class="manfaat-header-desc">
          Berikut adalah manfaat yang akan Anda peroleh dengan mendukung tujuan kami
        </p>
      </div>

      <!-- Carousel Wrapper -->
      <div 
        class="manfaat-carousel-wrapper"
        @touchstart="handleTouchStart"
        @touchend="handleTouchEnd"
      >
        <div 
          class="manfaat-carousel-track"
          :style="{ transform: `translateX(calc(-${currentSlide} * (100% + 24px)))` }"
        >
          <div 
            v-for="item in manfaatList" 
            :key="item.id"
            class="manfaat-card"
          >
            <!-- Icon -->
            <div class="manfaat-icon-box">
              <svg v-if="item.icon === 'star'" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#17A2B8" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              <svg v-else-if="item.icon === 'handshake'" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#17A2B8" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"/>
              </svg>
              <svg v-else-if="item.icon === 'globe'" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#17A2B8" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              <svg v-else-if="item.icon === 'search'" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#17A2B8" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <svg v-else-if="item.icon === 'user'" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#17A2B8" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              <svg v-else-if="item.icon === 'clipboard'" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#17A2B8" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                <polyline points="9 11 12 14 22 4"></polyline>
              </svg>
            </div>

            <!-- Text -->
            <div class="manfaat-card-text">
              <h3 class="manfaat-card-title">{{ item.title }}</h3>
              <p class="manfaat-card-desc">{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Controls (Arrows + Dots) -->
      <div class="manfaat-controls">
        <button
          class="manfaat-arrow-btn"
          :disabled="currentSlide === 0"
          @click="prevSlide"
          aria-label="Previous slide"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        <div class="manfaat-dots">
          <button
            v-for="(_, index) in totalSlides"
            :key="index"
            class="manfaat-dot"
            :class="{ active: currentSlide === index }"
            @click="goToSlide(index)"
            :aria-label="`Go to slide ${index + 1}`"
          ></button>
        </div>

        <button
          class="manfaat-arrow-btn"
          :disabled="currentSlide >= totalSlides - 1"
          @click="nextSlide"
          aria-label="Next slide"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>

      <!-- CTA Banner -->
      <div class="manfaat-cta">
        <div class="manfaat-cta-inner">
          <div class="manfaat-cta-overlay"></div>
          <h3 class="manfaat-cta-title">Mulai Dampakmu Sekarang!</h3>
          <button
            class="manfaat-cta-btn"
            @click="$emit('hubungi')"
          >
            HUBUNGI KAMI
          </button>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'

defineEmits(['hubungi'])

const manfaatList = [
  {
    id: 1,
    title: 'Citra Publik menjadi Positif',
    desc: 'Membangun citra merek yang positif dan menarik pelanggan yang sadar lingkungan.',
    icon: 'star'
  },
  {
    id: 2,
    title: 'Hubungan dengan Stakeholder yang Lebih Baik',
    desc: 'Meningkatkan hubungan dengan investor, karyawan, dan masyarakat setempat.',
    icon: 'handshake'
  },
  {
    id: 3,
    title: 'Akses ke Investasi Hijau dan Pasar Global',
    desc: 'Membuka akses ke peluang pendanaan dan memfasilitasi ekspansi strategis ke pasar baru.',
    icon: 'globe'
  },
  {
    id: 4,
    title: 'Validasi dan Verifikasi Dampak',
    desc: 'Menyebarluaskan dampak nyata yang dapat diverifikasi, memastikan pendekatan dan hasil yang terukur.',
    icon: 'search'
  },
  {
    id: 5,
    title: 'Menarik dan Mempertahankan Pelanggan',
    desc: 'Preferensi konsumen beralih ke produk dan praktik berkelanjutan.',
    icon: 'user'
  },
  {
    id: 6,
    title: 'Kepatuhan terhadap Peraturan',
    desc: 'Memastikan kepatuhan terhadap peraturan lingkungan dan menghindari potensi denda dan penalti.',
    icon: 'clipboard'
  }
]

const currentSlide = ref(0)
const windowWidth = ref(1200)

const updateCardsPerView = () => {
  if (typeof window !== 'undefined') {
    windowWidth.value = window.innerWidth
  }
}

onMounted(() => {
  updateCardsPerView()
  window.addEventListener('resize', updateCardsPerView)
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', updateCardsPerView)
  }
})

const cardsPerView = computed(() => {
  if (windowWidth.value < 640) return 1
  if (windowWidth.value < 1024) return 2
  return 3
})

const totalSlides = computed(() => {
  return Math.ceil(manfaatList.length / cardsPerView.value)
})

watch(totalSlides, (newTotal) => {
  if (currentSlide.value >= newTotal) {
    currentSlide.value = Math.max(0, newTotal - 1)
  }
})

const nextSlide = () => {
  if (currentSlide.value < totalSlides.value - 1) {
    currentSlide.value++
  }
}

const prevSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--
  }
}

const goToSlide = (index: number) => {
  currentSlide.value = index
}

// Touch swipe
const touchStartX = ref(0)
const touchEndX = ref(0)

const handleTouchStart = (e: TouchEvent) => {
  touchStartX.value = e.touches[0].clientX
}

const handleTouchEnd = (e: TouchEvent) => {
  touchEndX.value = e.changedTouches[0].clientX
  const diff = touchStartX.value - touchEndX.value
  if (diff > 40) {
    nextSlide()
  } else if (diff < -40) {
    prevSlide()
  }
}
</script>

<style scoped>
.manfaat-section {
  width: 100%;
  padding: 80px 24px;
  background: #F7F7F6;
  display: flex;
  justify-content: center;
}

.manfaat-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  width: 100%;
  max-width: 1162px;
}

.manfaat-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  text-align: center;
}

.manfaat-title-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.manfaat-title {
  font-family: 'Asap', sans-serif;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: #0A0A0A;
  margin: 0;
  text-align: center;
}

.manfaat-title-line {
  width: 72px;
  height: 4px;
  background: #17A2B8;
  border-radius: 2px;
}

.manfaat-header-desc {
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  color: #616161;
  text-align: center;
  max-width: 500px;
  margin: 0;
}

/* Carousel Outer Wrapper */
.manfaat-carousel-wrapper {
  width: 100%;
  max-width: 1162px;
  overflow: hidden;
}

/* Carousel Track */
.manfaat-carousel-track {
  display: flex;
  gap: 24px;
  width: 100%;
  transition: transform 0.45s cubic-bezier(0.25, 1, 0.5, 1);
  will-change: transform;
}

/* Card Styling */
.manfaat-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 40px 28px;
  flex: 0 0 calc((100% - 48px) / 3);
  width: calc((100% - 48px) / 3);
  box-sizing: border-box;
  border-radius: 12px;
  border: 1px solid #EAEAEA;
  background: #ffffff;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0,0,0,0.03);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.manfaat-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(0,0,0,0.08);
}

.manfaat-icon-box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  flex-shrink: 0;
}

.manfaat-card-text {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  text-align: center;
  width: 100%;
}

.manfaat-card-title {
  font-family: 'Asap', sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.4;
  color: #2A2A2A;
  margin: 0;
  text-align: center;
}

.manfaat-card-desc {
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.6;
  color: #6B7280;
  margin: 0;
  text-align: center;
}

/* Controls */
.manfaat-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  margin-top: 8px;
}

.manfaat-arrow-btn {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid #E2E8F0;
  background: #ffffff;
  color: #17A2B8;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  transition: all 0.2s ease;
}

.manfaat-arrow-btn:hover:not(:disabled) {
  background: #E3F4F6;
  border-color: #17A2B8;
  transform: scale(1.05);
}

.manfaat-arrow-btn:disabled {
  opacity: 0.35;
  cursor: not-allowed;
  box-shadow: none;
}

.manfaat-dots {
  display: flex;
  align-items: center;
  gap: 10px;
}

.manfaat-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #D1D5DB;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: all 0.3s ease;
}

.manfaat-dot.active {
  background: #17A2B8;
  transform: scale(1.2);
}

/* CTA Banner */
.manfaat-cta {
  width: 100%;
  max-width: 1162px;
  margin-top: 24px;
}

.manfaat-cta-inner {
  position: relative;
  width: 100%;
  min-height: 260px;
  border-radius: 12px;
  background-color: #17A2B8;
  background-image: url('/images/support-section.png');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding: 48px 24px;
  overflow: hidden;
  box-sizing: border-box;
}

.manfaat-cta-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(23, 162, 184, 0.6) 0%, rgba(34, 183, 140, 0.85) 100%);
  border-radius: 12px;
}

.manfaat-cta-title {
  position: relative;
  z-index: 1;
  font-family: 'Asap', sans-serif;
  font-size: 32px;
  font-weight: 700;
  line-height: 1.3;
  color: #ffffff;
  margin: 0;
  text-align: center;
  max-width: 320px;
}

.manfaat-cta-btn {
  position: relative;
  z-index: 1;
  background: #ffffff;
  color: #17A2B8;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.05em;
  padding: 12px 32px;
  border-radius: 9999px;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.manfaat-cta-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .manfaat-card {
    flex: 0 0 calc((100% - 24px) / 2);
    width: calc((100% - 24px) / 2);
  }
}

@media (max-width: 640px) {
  .manfaat-section {
    padding: 48px 16px;
  }
  
  .manfaat-card {
    flex: 0 0 100%;
    width: 100%;
    padding: 32px 20px;
  }

  .manfaat-cta-inner {
    min-height: 380px;
    padding: 56px 20px;
  }

  .manfaat-cta-title {
    font-size: 28px;
    max-width: 220px;
  }

  .manfaat-arrow-btn {
    width: 44px;
    height: 44px;
  }
}
</style>
