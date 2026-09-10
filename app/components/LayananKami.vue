<template>
  <section id="layanan-kami" class="layanan-section">
    <div class="layanan-container figma-container">

      <!-- Section Header -->
      <div class="layanan-header">
        <div class="layanan-title-wrap">
          <div class="layanan-title-text">
            <h2 class="section-title">LAYANAN KAMI</h2>
            <div class="section-title-line layanan-underline"></div>
          </div>
        </div>
        <p class="svc-header-desc">
          Kami menyediakan solusi pengelolaan sampah dari hulu ke hilir untuk bisnis dan industri.
        </p>
      </div>

      <!-- Service Cards List -->
      <div class="svc-cards-list">

        <!-- Card 1: Responsible Packaging Recovery -->
        <div class="svc-card">
          <div class="svc-img-wrap">
            <img src="/images/hero-forklift.png" alt="Responsible Packaging Recovery" class="svc-img" loading="lazy"/>
          </div>
          <div class="svc-info">
            <div class="svc-desc-block">
              <span class="svc-category">Material Traceability</span>
              <h3 class="svc-title">Responsible Packaging Recovery</h3>
              <p class="svc-desc">
                Membantu produsen memulihkan kemasan pascakonsumsi melalui pengumpulan dan daur ulang yang bertanggung jawab, dengan sistem tertelusur dan data kredibel untuk pelaporan keberlanjutan dan EPR.
              </p>
            </div>
            <div class="svc-clients-block">
              <div class="svc-clients-header">
                <span class="svc-clients-label">Klien kami</span>
                <!-- Desktop Navigation Arrows -->
                <div class="svc-nav-arrows svc-nav-desktop">
                  <button class="svc-arrow-btn" @click="scrollLogos('svc1', -1)" aria-label="Previous">
                    <svg width="16" height="16" fill="none" stroke="#17A2B8" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/></svg>
                  </button>
                  <button class="svc-arrow-btn" @click="scrollLogos('svc1', 1)" aria-label="Next">
                    <svg width="16" height="16" fill="none" stroke="#17A2B8" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
                  </button>
                </div>
              </div>

              <!-- Desktop Horizontal Scroll Row -->
              <div class="svc-logos-outer svc-logos-desktop">
                <div class="svc-logos-row" ref="svc1">
                  <div class="svc-logo-box" v-for="client in card1Clients" :key="client.name">
                    <img :src="client.logo" :alt="client.name" class="svc-logo-img"/>
                  </div>
                </div>
                <div class="svc-logos-fade"></div>
              </div>

              <!-- Mobile 2-Column Centered Grid -->
              <div class="svc-logos-grid svc-logos-mobile">
                <div class="svc-logo-box" v-for="client in card1Clients" :key="client.name">
                  <img :src="client.logo" :alt="client.name" class="svc-logo-img"/>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Card 2: Circular Sustainability Initiative -->
        <div class="svc-card">
          <div class="svc-img-wrap">
            <img src="/images/dsc9954.png" alt="Circular Sustainability Initiative" class="svc-img" loading="lazy"/>
          </div>
          <div class="svc-info">
            <div class="svc-desc-block">
              <h3 class="svc-title">Circular Sustainability Initiative</h3>
              <p class="svc-desc">
                Membantu organisasi merancang dan menjalankan program ekonomi sirkular melalui kolaborasi, pelibatan masyarakat, dan penguatan kapasitas untuk mendorong perubahan perilaku dan sistem pengelolaan sampah.
              </p>
            </div>
            <div class="svc-clients-block">
              <div class="svc-clients-header">
                <span class="svc-clients-label">Klien kami</span>
                <!-- Desktop Navigation Arrows -->
                <div class="svc-nav-arrows svc-nav-desktop">
                  <button class="svc-arrow-btn" @click="scrollLogos('svc2', -1)" aria-label="Previous">
                    <svg width="16" height="16" fill="none" stroke="#17A2B8" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/></svg>
                  </button>
                  <button class="svc-arrow-btn" @click="scrollLogos('svc2', 1)" aria-label="Next">
                    <svg width="16" height="16" fill="none" stroke="#17A2B8" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
                  </button>
                </div>
              </div>

              <!-- Desktop Horizontal Scroll Row -->
              <div class="svc-logos-outer svc-logos-desktop">
                <div class="svc-logos-row" ref="svc2">
                  <div class="svc-logo-box" v-for="client in card2Clients" :key="client.name">
                    <img :src="client.logo" :alt="client.name" class="svc-logo-img"/>
                  </div>
                </div>
                <div class="svc-logos-fade"></div>
              </div>

              <!-- Mobile 2-Column Centered Grid -->
              <div class="svc-logos-grid svc-logos-mobile">
                <div class="svc-logo-box" v-for="client in card2Clients" :key="client.name">
                  <img :src="client.logo" :alt="client.name" class="svc-logo-img"/>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Card 3: Recycling Hub -->
        <div class="svc-card">
          <div class="svc-img-wrap">
            <img src="/images/img9835.png" alt="Recycling Hub" class="svc-img" loading="lazy"/>
          </div>
          <div class="svc-info">
            <div class="svc-desc-block">
              <h3 class="svc-title">Recycling Hub</h3>
              <p class="svc-desc">
                Menyediakan fasilitas penyetoran sampah terpilah dan program edukasi untuk meningkatkan pemilahan dari sumber, didukung sistem data kredibel untuk pelaporan keberlanjutan dan EPR.
              </p>
            </div>
            <div class="svc-clients-block">
              <div class="svc-clients-header">
                <span class="svc-clients-label">Klien kami</span>
                <!-- Desktop Navigation Arrows -->
                <div class="svc-nav-arrows svc-nav-desktop">
                  <button class="svc-arrow-btn" @click="scrollLogos('svc3', -1)" aria-label="Previous">
                    <svg width="16" height="16" fill="none" stroke="#17A2B8" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/></svg>
                  </button>
                  <button class="svc-arrow-btn" @click="scrollLogos('svc3', 1)" aria-label="Next">
                    <svg width="16" height="16" fill="none" stroke="#17A2B8" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
                  </button>
                </div>
              </div>

              <!-- Desktop Horizontal Scroll Row -->
              <div class="svc-logos-outer svc-logos-desktop">
                <div class="svc-logos-row" ref="svc3">
                  <div class="svc-logo-box" v-for="client in card3Clients" :key="client.name">
                    <img :src="client.logo" :alt="client.name" class="svc-logo-img"/>
                  </div>
                </div>
                <div class="svc-logos-fade"></div>
              </div>

              <!-- Mobile 2-Column Centered Grid -->
              <div class="svc-logos-grid svc-logos-mobile">
                <div class="svc-logo-box" v-for="client in card3Clients" :key="client.name">
                  <img :src="client.logo" :alt="client.name" class="svc-logo-img"/>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineEmits(['detail'])

// Card 1: Responsible Packaging Recovery (9 Clients)
const card1Clients = [
  { name: 'rePurpose',      logo: '/images/clients/repurpose.png' },
  { name: 'CleanHub',       logo: '/images/clients/cleanhub.png' },
  { name: 'ogyre',          logo: '/images/clients/ogyre.png' },
  { name: 'Plastic-Offset', logo: '/images/clients/client-3.png' },
  { name: 'IPRO',           logo: '/images/clients/client-4.png' },
  { name: 'Tetra Pak',      logo: '/images/clients/tetra-pak.png' },
  { name: 'KAO',            logo: '/images/clients/client-5.png' },
  { name: 'Coca-Cola',      logo: '/images/clients/coca-cola.png' },
  { name: 'Avoskin',        logo: '/images/clients/avoskin.png' },
]

// Card 2: Circular Sustainability Initiative (6 Clients)
const card2Clients = [
  { name: 'WWF',          logo: '/images/clients/client-8.png' },
  { name: 'DBS',          logo: '/images/clients/client-9.png' },
  { name: 'Unilever',     logo: '/images/clients/client-10.png' },
  { name: 'J Trust Bank', logo: '/images/clients/client-11.png' },
  { name: 'Lifebuoy',     logo: '/images/clients/lifebuoy.png' },
  { name: 'Sprite',       logo: '/images/clients/sprite.svg' },
]

// Card 3: Recycling Hub (2 Clients)
const card3Clients = [
  { name: 'Nestlé',       logo: '/images/clients/client-14.png' },
  { name: 'MedcoEnergi', logo: '/images/clients/client-13.png' },
]

// Scroll logos carousel (desktop)
const svc1 = ref<HTMLElement | null>(null)
const svc2 = ref<HTMLElement | null>(null)
const svc3 = ref<HTMLElement | null>(null)

const scrollLogos = (refName: string, dir: number) => {
  const el = refName === 'svc1' ? svc1.value : refName === 'svc2' ? svc2.value : svc3.value
  if (el) el.scrollBy({ left: dir * 120, behavior: 'smooth' })
}
</script>

<style scoped>
/* ===== Main Container ===== */
.layanan-container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 100px 140px 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
}

/* ===== Header ===== */
.layanan-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  gap: 24px;
  width: 100%;
}

.layanan-title-wrap {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.layanan-title-text {
  text-align: left;
}

.layanan-underline {
  margin-top: 0;
}

.svc-header-desc {
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  color: #616161;
  max-width: 300px;
  text-align: right;
  margin: 0;
  flex-shrink: 0;
}

/* ===== Cards List ===== */
.svc-cards-list {
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
}

/* ===== Service Card ===== */
.svc-card {
  display: flex;
  flex-direction: row;
  gap: 32px;
  padding: 32px 40px;
  border: 1px solid #E7E6E7;
  border-radius: 8px;
  background: #ffffff;
  align-items: flex-start;
  width: 100%;
  box-sizing: border-box;
}

/* Left image */
.svc-img-wrap {
  width: 300px;
  height: 220px;
  flex-shrink: 0;
  border-radius: 8px;
  overflow: hidden;
}
.svc-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}
.svc-card:hover .svc-img { transform: scale(1.04); }

/* Right info */
.svc-info {
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex: 1;
  min-width: 0;
}

.svc-desc-block {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.svc-category {
  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.5;
  color: #00A5BA;
}

.svc-title {
  font-family: 'Asap', sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.2;
  color: #0A0A0A;
  margin: 0;
}

.svc-desc {
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  color: #414041;
  margin: 0;
}

/* ===== Clients Block ===== */
.svc-clients-block {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.svc-clients-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}

.svc-clients-label {
  font-family: 'Asap', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.2;
  color: #404040;
}

.svc-nav-arrows {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
}

.svc-arrow-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: none;
  background: transparent;
  cursor: pointer;
  color: #17A2B8;
  padding: 0;
  transition: background 0.15s;
}
.svc-arrow-btn:hover { background: #E3F4F6; }

/* ===== Desktop Logo Row ===== */
.svc-logos-outer {
  position: relative;
  overflow: hidden;
}

.svc-logos-row {
  display: flex;
  flex-direction: row;
  gap: 8px;
  overflow-x: auto;
  scroll-behavior: smooth;
  -ms-overflow-style: none;
  scrollbar-width: none;
  padding-bottom: 2px;
}
.svc-logos-row::-webkit-scrollbar { display: none; }

.svc-logos-fade {
  position: absolute;
  top: 0; right: 0;
  width: 80px;
  height: 100%;
  background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%);
  pointer-events: none;
}

/* ===== Default logo box (Desktop) ===== */
.svc-logo-box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 56px;
  border: 1px solid #E7E7E7;
  border-radius: 4px;
  flex-shrink: 0;
  background: #ffffff;
  padding: 8px;
  box-sizing: border-box;
}

.svc-logo-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: opacity 0.2s;
}

/* Visibility Control */
.svc-logos-desktop { display: block; }
.svc-logos-mobile  { display: none; }
.svc-nav-desktop   { display: flex; }

/* Responsive Adjustments */
@media (max-width: 1440px) {
  .layanan-container { padding-left: 80px; padding-right: 80px; }
}

@media (max-width: 1024px) {
  .layanan-container { padding-left: 40px; padding-right: 40px; }
  .svc-card { flex-direction: column; padding: 24px; }
  .svc-img-wrap { width: 100%; height: 220px; }
  .svc-header-desc { text-align: left; max-width: 100%; }
}

/* ===== MOBILE VIEW (< 768px): EXACT 2-COLUMN LOGO GRID MATCH ===== */
@media (max-width: 768px) {
  .layanan-container {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 48px;
    padding-bottom: 56px;
    gap: 28px;
  }

  .layanan-header {
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }

  .layanan-title-wrap {
    align-items: center;
    gap: 16px;
  }

  .layanan-title-text {
    text-align: center;
  }

  .svc-header-desc {
    text-align: center;
    max-width: 100%;
    font-size: 14px;
  }

  .svc-card {
    flex-direction: column;
    padding: 0;
    gap: 16px;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid #E7E6E7;
    padding-bottom: 28px;
  }

  .svc-cards-list {
    gap: 24px;
  }

  .svc-img-wrap {
    width: 100%;
    height: 200px;
    border-radius: 8px;
  }

  .svc-info { gap: 16px; }

  .svc-title {
    font-size: 18px;
    font-weight: 700;
    line-height: 1.3;
  }

  .svc-desc {
    font-size: 13px;
    line-height: 1.6;
  }

  /* Show Mobile Grid, Hide Desktop Scroll */
  .svc-logos-desktop { display: none !important; }
  .svc-logos-mobile  { display: flex !important; }
  .svc-nav-desktop   { display: none !important; }

  /* Mobile Logo Grid: 2 columns per row, centered last row */
  .svc-logos-grid {
    display: flex !important;
    flex-wrap: wrap !important;
    justify-content: center !important;
    gap: 12px !important;
    width: 100% !important;
    margin-top: 8px !important;
  }

  .svc-logos-mobile .svc-logo-box {
    width: calc(50% - 6px) !important;
    height: 64px !important;
    padding: 12px 16px !important;
    border: 1px solid #EAEAEA !important;
    border-radius: 8px !important;
    background: #ffffff !important;
    box-sizing: border-box !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    flex-shrink: 0 !important;
  }
}

@media (max-width: 480px) {
  .svc-logos-mobile .svc-logo-box {
    width: calc(50% - 6px) !important;
    height: 60px !important;
    padding: 10px 14px !important;
  }
  .svc-img-wrap { height: 180px; }
}
</style>
