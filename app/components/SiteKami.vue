<template>
  <section id="site-kami" class="site-section">
    <div class="site-container figma-container">

      <!-- Header -->
      <div class="site-header">
        <div class="site-title-wrap">
          <h2 class="section-title" style="text-align:center;">SITE KAMI</h2>
          <span class="section-underline section-underline-center"></span>
        </div>
        <p class="site-desc">Waste4Change menyediakan fasilitas daur ulang bertanggung jawab di beberapa titik sebagai berikut</p>
      </div>

      <!-- Carousel Viewport -->
      <div class="site-carousel-wrap">
        <div
          class="site-carousel-track"
          :style="{ transform: `translateX(-${currentSlide * slideWidth}%)` }"
        >
          <!-- ===== Card 1: RBF Bekasi ===== -->
          <article class="site-card">
            <div class="site-card-img-wrap">
              <img src="/images/site-card.png" alt="Fasilitas RBF Bekasi" class="site-card-img" loading="lazy"/>
            </div>
            <div class="site-card-body">
              <div class="site-card-header">
                <h3 class="site-card-name">RBF Bekasi</h3>
                <span class="site-card-subtitle">2019 - Present</span>
              </div>
              <p class="site-card-desc">
                Fasilitas kami di Bekasi berfokus pada pengolahan material bernilai rendah, terutama kantong plastik (HDPE/LDPE) dan karton bekas minuman (UBC). Ini adalah satu-satunya fasilitas kami yang mampu mengubah kantong plastik bekas konsumsi menjadi pelet plastik daur ulang.
              </p>
              <div class="site-card-divider"></div>
              <div class="site-stats-grid">
                <div class="site-stat-item">
                  <div class="site-stat-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00A5BA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M12 2v6m0 8v6M6 4h12M6 20h12M8 4l4 4 4-4M8 20l4-4 4 4"/>
                    </svg>
                  </div>
                  <div class="site-stat-text">
                    <span class="site-stat-val">300+</span>
                    <span class="site-stat-lbl">Tons / bulan</span>
                  </div>
                </div>
                <div class="site-stat-item">
                  <div class="site-stat-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00A5BA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                    </svg>
                  </div>
                  <div class="site-stat-text">
                    <span class="site-stat-val">11</span>
                    <span class="site-stat-lbl">Karyawan</span>
                  </div>
                </div>
                <div class="site-stat-item">
                  <div class="site-stat-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00A5BA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M16 11V7a4 4 0 0 0-8 0v4M5 9h14l1 12H4L5 9z"/>
                    </svg>
                  </div>
                  <div class="site-stat-text">
                    <span class="site-stat-val">22</span>
                    <span class="site-stat-lbl">Mitra Informal Sektor</span>
                  </div>
                </div>
                <div class="site-stat-item">
                  <div class="site-stat-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00A5BA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
                    </svg>
                  </div>
                  <div class="site-stat-text">
                    <span class="site-stat-val">2</span>
                    <span class="site-stat-lbl">Bank Sampah</span>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <!-- ===== Card 2: RBF Bali ===== -->
          <article class="site-card">
            <div class="site-card-img-wrap">
              <img src="/images/dsc9954.png" alt="Fasilitas RBF Bali" class="site-card-img" loading="lazy"/>
            </div>
            <div class="site-card-body">
              <div class="site-card-header site-card-header-flex">
                <div>
                  <h3 class="site-card-name">RBF Bali</h3>
                  <span class="site-card-subtitle">2019 - Present</span>
                </div>
                <div class="site-collab">
                  <span class="site-collab-lbl">Kolaborasi dengan:</span>
                  <img src="/images/ecobali-logo.png" alt="EcoBali" class="site-collab-img"/>
                </div>
              </div>
              <p class="site-card-desc">
                Fasilitas kami di Bali berfokus pada pengelolaan sampah yang komprehensif, mengolah material yang bersumber dari bank sampah lokal dan TPS3R. Kami juga bekerja sama dengan organisasi mitra untuk mengelola material bernilai rendah yang sulit, termasuk MLP dan UBC.
              </p>
              <div class="site-card-divider"></div>
              <div class="site-stats-grid">
                <div class="site-stat-item">
                  <div class="site-stat-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00A5BA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M12 2v6m0 8v6M6 4h12M6 20h12M8 4l4 4 4-4M8 20l4-4 4 4"/>
                    </svg>
                  </div>
                  <div class="site-stat-text">
                    <span class="site-stat-val">100+</span>
                    <span class="site-stat-lbl">Tons / bulan</span>
                  </div>
                </div>
                <div class="site-stat-item">
                  <div class="site-stat-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00A5BA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                    </svg>
                  </div>
                  <div class="site-stat-text">
                    <span class="site-stat-val">17</span>
                    <span class="site-stat-lbl">Karyawan</span>
                  </div>
                </div>
                <div class="site-stat-item">
                  <div class="site-stat-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00A5BA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M16 11V7a4 4 0 0 0-8 0v4M5 9h14l1 12H4L5 9z"/>
                    </svg>
                  </div>
                  <div class="site-stat-text">
                    <span class="site-stat-val">200+</span>
                    <span class="site-stat-lbl">Kolaborasi mitra formal/informal</span>
                  </div>
                </div>
                <div class="site-stat-item">
                  <div class="site-stat-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00A5BA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M16 11V7a4 4 0 0 0-8 0v4M5 9h14l1 12H4L5 9z"/>
                    </svg>
                  </div>
                  <div class="site-stat-text">
                    <span class="site-stat-val">200+</span>
                    <span class="site-stat-lbl">Kolaborasi mitra bank sampah</span>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <!-- ===== Card 3: RBF Bandung ===== -->
          <article class="site-card">
            <div class="site-card-img-wrap">
              <img src="/images/workers-1.png" alt="Fasilitas RBF Bandung" class="site-card-img" loading="lazy"/>
            </div>
            <div class="site-card-body">
              <div class="site-card-header">
                <h3 class="site-card-name">RBF Bandung</h3>
                <span class="site-card-subtitle">2022 - Present</span>
              </div>
              <p class="site-card-desc">
                Fasilitas kami di Bandung berfokus pada pengolahan material bernilai rendah, terutama kantong plastik dan kemasan fleksibel. Mitra terpercaya kami, SADA, mengoperasikan fasilitas ini dan merupakan bagian dari Kemitraan Pemasok Waste4Change (WSP).
              </p>
              <div class="site-card-divider"></div>
              <div class="site-stats-grid">
                <div class="site-stat-item">
                  <div class="site-stat-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00A5BA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M12 2v6m0 8v6M6 4h12M6 20h12M8 4l4 4 4-4M8 20l4-4 4 4"/>
                    </svg>
                  </div>
                  <div class="site-stat-text">
                    <span class="site-stat-val">50+</span>
                    <span class="site-stat-lbl">Tons / bulan</span>
                  </div>
                </div>
                <div class="site-stat-item">
                  <div class="site-stat-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00A5BA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                    </svg>
                  </div>
                  <div class="site-stat-text">
                    <span class="site-stat-val">6</span>
                    <span class="site-stat-lbl">Karyawan</span>
                  </div>
                </div>
                <div class="site-stat-item">
                  <div class="site-stat-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00A5BA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M16 11V7a4 4 0 0 0-8 0v4M5 9h14l1 12H4L5 9z"/>
                    </svg>
                  </div>
                  <div class="site-stat-text">
                    <span class="site-stat-val">22</span>
                    <span class="site-stat-lbl">Mitra Informal Sektor</span>
                  </div>
                </div>
              </div>
            </div>
          </article>

        </div>
      </div>

      <!-- Carousel Controls -->
      <div class="site-carousel-controls">
        <!-- Prev arrow -->
        <button
          class="site-arrow-btn"
          @click="prev"
          :disabled="currentSlide === 0"
          aria-label="Previous"
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>

        <!-- Dot indicators -->
        <div class="site-dots">
          <button
            v-for="(_, i) in totalSlides"
            :key="i"
            class="site-dot"
            :class="{ active: currentSlide === i }"
            @click="goTo(i)"
            :aria-label="`Slide ${i + 1}`"
          ></button>
        </div>

        <!-- Next arrow -->
        <button
          class="site-arrow-btn"
          @click="next"
          :disabled="currentSlide === totalSlides - 1"
          aria-label="Next"
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
          </svg>
        </button>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

// Responsive: how many cards per view
const cardsPerView = ref(3)
const totalCards = 3
const currentSlide = ref(0)

const totalSlides = computed(() => Math.ceil(totalCards / cardsPerView.value))
const slideWidth = computed(() => 100 / cardsPerView.value * cardsPerView.value / totalSlides.value)

const updateCardsPerView = () => {
  if (window.innerWidth < 640) {
    cardsPerView.value = 1
  } else if (window.innerWidth < 1024) {
    cardsPerView.value = 1
  } else {
    cardsPerView.value = 3
  }
  // Clamp currentSlide
  if (currentSlide.value >= totalSlides.value) {
    currentSlide.value = totalSlides.value - 1
  }
}

onMounted(() => {
  updateCardsPerView()
  window.addEventListener('resize', updateCardsPerView)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateCardsPerView)
})

const prev = () => { if (currentSlide.value > 0) currentSlide.value-- }
const next = () => { if (currentSlide.value < totalSlides.value - 1) currentSlide.value++ }
const goTo = (i: number) => { currentSlide.value = i }
</script>

<style scoped>
/* ===== Section ===== */
.site-section {
  background: #FAFAFA;
  overflow: hidden;
}

.site-container {
  padding-top: 80px;
  padding-bottom: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
}

/* ===== Header ===== */
.site-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  text-align: center;
}

.site-title-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.site-desc {
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.6;
  color: #5A5A5A;
  text-align: center;
  max-width: 340px;
  margin: 0;
}

/* ===== Carousel ===== */
.site-carousel-wrap {
  width: 100%;
  overflow: hidden;
}

.site-carousel-track {
  display: flex;
  flex-direction: row;
  transition: transform 0.45s cubic-bezier(0.4, 0, 0.2, 1);
  gap: 0;
  /* each card takes 1/3 width (3 cards visible) */
  width: 100%;
}

/* Each card: 1/3 of track width on desktop, full width on mobile */
.site-card {
  flex: 0 0 calc(33.333% - 16px);
  width: calc(33.333% - 16px);
  margin-right: 24px;
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  border-radius: 12px;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.05);
  border: 1px solid #EAEAEA;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.site-card:hover {
  transform: translateY(-4px);
  box-shadow: 0px 16px 45px rgba(0, 0, 0, 0.09);
}

/* Image */
.site-card-img-wrap {
  width: 100%;
  height: 240px;
  overflow: hidden;
  background: #F0F0F0;
}

.site-card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.site-card:hover .site-card-img { transform: scale(1.03); }

/* Body */
.site-card-body {
  display: flex;
  flex-direction: column;
  padding: 28px 32px 32px 32px;
  flex: 1;
}

/* Card Header */
.site-card-header {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 16px;
}

.site-card-header-flex {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 16px;
}

.site-card-name {
  font-family: 'Asap', sans-serif;
  font-size: 22px;
  font-weight: 700;
  color: #0A0A0A;
  margin: 0;
  line-height: 1.2;
}

.site-card-subtitle {
  font-family: 'Open Sans', sans-serif;
  font-size: 13px;
  font-weight: 400;
  color: #9E9E9E;
  display: block;
  margin-top: 2px;
}

/* Collaboration badge */
.site-collab {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
  flex-shrink: 0;
}

.site-collab-lbl {
  font-family: 'Open Sans', sans-serif;
  font-size: 11px;
  color: #9E9E9E;
  font-weight: 400;
  white-space: nowrap;
}

.site-collab-img {
  height: 28px;
  width: auto;
  object-fit: contain;
}

/* Description */
.site-card-desc {
  font-family: 'Open Sans', sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.6;
  color: #616161;
  margin: 0;
  flex: 1;
}

/* Divider */
.site-card-divider {
  border-top: 1px solid #EBF0F2;
  margin: 24px 0;
}

/* Stats Grid */
.site-stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px 12px;
}

.site-stat-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.site-stat-icon {
  width: 42px;
  height: 42px;
  border-radius: 8px;
  background: #E0F2F1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.site-stat-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.site-stat-val {
  font-family: 'Asap', sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: #0A0A0A;
  line-height: 1.2;
}

.site-stat-lbl {
  font-family: 'Open Sans', sans-serif;
  font-size: 11px;
  font-weight: 400;
  color: #757575;
  line-height: 1.3;
}

/* ===== Carousel Controls ===== */
.site-carousel-controls {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 220px;
  gap: 16px;
}

/* Arrow button: circle, grey border, white bg */
.site-arrow-btn {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid #D0D0D0;
  background: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #404040;
  transition: background 0.2s, border-color 0.2s, color 0.2s;
  flex-shrink: 0;
}

.site-arrow-btn:hover:not(:disabled) {
  background: #E3F4F6;
  border-color: #00A5BA;
  color: #00A5BA;
}

.site-arrow-btn:disabled {
  opacity: 0.35;
  cursor: default;
}

/* Dots */
.site-dots {
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
}

.site-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #D0D0D0;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: background 0.2s, transform 0.2s;
}

.site-dot.active {
  background: #00A5BA;
  transform: scale(1.15);
}

/* ===== RESPONSIVE ===== */
@media (max-width: 1440px) {
  .figma-container.site-container { padding-left: 80px; padding-right: 80px; }
}

@media (max-width: 1024px) {
  .figma-container.site-container { padding-left: 40px; padding-right: 40px; }
  /* On tablet, show 1 card at a time */
  .site-card {
    flex: 0 0 100%;
    width: 100%;
    margin-right: 0;
  }
  .site-carousel-track {
    gap: 0;
  }
}

@media (max-width: 768px) {
  .site-container {
    padding-left: 20px !important;
    padding-right: 20px !important;
    padding-top: 48px;
    padding-bottom: 48px;
    gap: 32px;
  }

  .site-card {
    flex: 0 0 100%;
    width: 100%;
    margin-right: 0;
  }

  .site-card-body { padding: 20px 20px 24px 20px; }
  .site-card-img-wrap { height: 200px; }
  .site-card-name { font-size: 20px; }
  .site-stats-grid { gap: 12px 8px; }
  .site-stat-val { font-size: 16px; }

  /* Smaller controls on mobile */
  .site-carousel-controls { max-width: 180px; }
  .site-arrow-btn { width: 40px; height: 40px; }
}
</style>