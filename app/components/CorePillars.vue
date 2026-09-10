<template>
  <!-- SECTION - CORE PILLARS: bg #FAFAFA -->
  <section id="core-pillars" style="background:#FAFAFA;">
    <div class="pillars-container">

      <!-- Section Title -->
      <div class="pillars-header">
        <h2 class="section-title">CORE PILLARS</h2>
        <span class="section-underline section-underline-center"></span>
      </div>

      <!-- Pillars Grid: 3 columns desktop, 1 column mobile -->
      <div class="pillars-grid">

        <!-- Pillar 1: Pemulihan Material -->
        <div class="pillar-col">
          <div class="pillar-top">
            <span class="pillar-number" aria-hidden="true">01</span>
            <div class="pillar-icon-box">
              <svg width="20" height="20" fill="none" stroke="#17A2B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
              </svg>
            </div>
            <div class="pillar-text">
              <h3 class="pillar-title">Pemulihan Material</h3>
              <p class="pillar-desc">Material diolah menjadi bahan baku yang dapat dimanfaatkan kembali, bukan hanya dikumpulkan dan dipilah.</p>
            </div>
          </div>
          <div class="pillar-img-wrap pillar-img-1">
            <img src="/images/pillar-1.png" alt="Pemulihan material - Waste4Change" class="pillar-img" loading="lazy"/>
          </div>
        </div>

        <!-- Pillar 2: Transparansi & Ketertelusuran -->
        <div class="pillar-col">
          <div class="pillar-top">
            <span class="pillar-number" aria-hidden="true">02</span>
            <div class="pillar-icon-box">
              <svg width="20" height="20" fill="none" stroke="#17A2B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
            </div>
            <div class="pillar-text">
              <h3 class="pillar-title">Transparansi &amp; Ketertelusuran</h3>
              <p class="pillar-desc">Alur material didokumentasikan secara sistematis, dapat diverifikasi, dan siap mendukung kebutuhan pelaporan.</p>
            </div>
          </div>
          <div class="pillar-img-wrap pillar-img-2">
            <img src="/images/pillar-2.png" alt="Transparansi dan Ketertelusuran - Waste4Change" class="pillar-img" loading="lazy"/>
          </div>
        </div>

        <!-- Pillar 3: Penguatan Ekosistem -->
        <div class="pillar-col">
          <div class="pillar-top">
            <span class="pillar-number" aria-hidden="true">03</span>
            <div class="pillar-icon-box">
              <svg width="20" height="20" fill="none" stroke="#17A2B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <div class="pillar-text">
              <h3 class="pillar-title">Penguatan Ekosistem</h3>
              <p class="pillar-desc">Kami berkolaborasi dengan pelaku daur ulang formal dan informal untuk membangun sistem yang lebih inklusif dan berkelanjutan.</p>
            </div>
          </div>
          <div class="pillar-img-wrap pillar-img-3">
            <img src="/images/pillar-3.png" alt="Penguatan Ekosistem - Waste4Change" class="pillar-img" loading="lazy"/>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Core Pillars section
</script>

<style scoped>
/* Container */
.pillars-container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 64px 140px 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 56px;
}

/* Header */
.pillars-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}

/* Grid: row on desktop, single column on mobile */
.pillars-grid {
  display: flex;
  flex-direction: row;
  gap: 24px;
  justify-content: center;
  width: 100%;
}

/* Each pillar column */
.pillar-col {
  display: flex;
  flex-direction: column;
  gap: 28px;
  flex: 1;
  min-width: 0;
}

/* Top area: relative for watermark number overlay */
.pillar-top {
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;
}

/* Large watermark number: very light teal, absolute */
.pillar-number {
  font-family: 'Asap', sans-serif;
  font-size: 80px;
  font-weight: 700;
  line-height: 1;
  color: #D6EEF2;
  letter-spacing: -2px;
  user-select: none;
  pointer-events: none;
  position: absolute;
  top: -12px;
  left: -4px;
  z-index: 0;
}

/* Icon box: teal pale, 8px radius, 36x36 */
.pillar-icon-box {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background-color: #E3F4F6;
  flex-shrink: 0;
  position: relative;
  z-index: 1;
  margin-top: 60px;
}

/* Text block */
.pillar-text {
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
  z-index: 1;
}

/* Pillar title */
.pillar-title {
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.4;
  color: #0A0A0A;
  margin: 0;
}

/* Pillar description */
.pillar-desc {
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.6;
  color: #616161;
  margin: 0;
}

/* Image wrapper: desktop radii per Figma */
.pillar-img-wrap {
  width: 100%;
  height: 240px;
  overflow: hidden;
  flex-shrink: 0;
}

.pillar-img-1 { border-radius: 8px 56px 8px 56px; }
.pillar-img-2 { border-radius: 56px 56px 8px 8px; }
.pillar-img-3 { border-radius: 56px 8px 56px 8px; }

.pillar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}
.pillar-img-wrap:hover .pillar-img {
  transform: scale(1.04);
}

/* ===== RESPONSIVE ===== */

@media (max-width: 1440px) {
  .pillars-container { padding-left: 80px; padding-right: 80px; }
}

@media (max-width: 1024px) {
  .pillars-container { padding-left: 40px; padding-right: 40px; }
}

/* Tablet: 2 columns */
@media (max-width: 900px) {
  .pillars-grid {
    flex-wrap: wrap;
  }
  .pillar-col {
    flex: 0 0 calc(50% - 12px);
  }
}

/* Mobile: 1 column, matching screenshot exactly */
@media (max-width: 640px) {
  .pillars-container {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 48px;
    padding-bottom: 64px;
    gap: 0;
  }

  .pillars-header {
    margin-bottom: 40px;
  }

  .pillars-grid {
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 0;
    width: 100%;
  }

  /* Each pillar: full width, bottom border separator except last */
  .pillar-col {
    flex: 0 0 100%;
    width: 100%;
    gap: 20px;
    padding-bottom: 40px;
    margin-bottom: 8px;
  }

  /* Top section: number + icon + text in left-aligned layout */
  .pillar-top {
    position: relative;
    gap: 12px;
    padding-top: 0;
  }

  /* Watermark number: large, light teal, positioned top-left */
  .pillar-number {
    font-size: 72px;
    top: -8px;
    left: 0;
    letter-spacing: -3px;
  }

  /* Icon box: pushed down below number */
  .pillar-icon-box {
    margin-top: 56px;
    width: 36px;
    height: 36px;
  }

  /* Pillar title: slightly larger on mobile for readability */
  .pillar-title {
    font-size: 18px;
    font-weight: 700;
    color: #1A1A1A;
    line-height: 1.35;
  }

  /* Description text */
  .pillar-desc {
    font-size: 13.5px;
    line-height: 1.65;
    color: #555555;
  }

  /* Image: full width, standard height, ALL corners rounded equally on mobile */
  .pillar-img-wrap {
    width: 100%;
    height: 220px;
  }

  /* Override desktop border-radius with uniform rounded corners on mobile */
  .pillar-img-1,
  .pillar-img-2,
  .pillar-img-3 {
    border-radius: 14px !important;
  }
}

@media (max-width: 400px) {
  .pillar-img-wrap {
    height: 190px;
  }
  .pillar-number {
    font-size: 60px;
  }
}
</style>