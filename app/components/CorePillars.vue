<template>
  <!-- SECTION - CORE PILLARS: bg #FAFAFA, padding 64px 140px 120px, col centered, gap 56px -->
  <section id="core-pillars" style="background:#FAFAFA;">
    <div
      class="figma-container"
      style="padding-top:64px; padding-bottom:120px; display:flex; flex-direction:column; align-items:center; gap:56px;"
    >

      <!-- Section Title: Nunito 28px/700, centered -->
      <div style="display:flex; flex-direction:column; align-items:center; gap:24px;">
        <h2 class="section-title">CORE PILLARS</h2>
        <span class="section-underline section-underline-center"></span>
      </div>

      <!-- Pillars Grid: row, 24px gap, 3 equal columns -->
      <div class="pillars-grid">

        <!-- Pillar 1: Pemulihan Material -->
        <div class="pillar-col">
          <!-- Top area: watermark number + icon + text -->
          <div class="pillar-top">
            <!-- Large watermark number -->
            <span class="pillar-number" aria-hidden="true">01</span>
            <!-- Small icon box -->
            <div class="pillar-icon-box">
              <svg width="20" height="20" fill="none" stroke="#17A2B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
              </svg>
            </div>
            <!-- Title + desc -->
            <div class="pillar-text">
              <h3 class="pillar-title">Pemulihan Material</h3>
              <p class="pillar-desc">Material diolah menjadi bahan baku yang dapat dimanfaatkan kembali, bukan hanya dikumpulkan dan dipilah.</p>
            </div>
          </div>

          <!-- Image: border-radius 8px 56px 8px 56px (Figma card 1) -->
          <div class="pillar-img-wrap" style="border-radius:8px 56px 8px 56px;">
            <img
              src="/images/pillar-1.png"
              alt="Pemulihan material - Waste4Change"
              class="pillar-img"
              loading="lazy"
            />
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

          <!-- Image: border-radius 56px 56px 8px 8px (Figma card 2) -->
          <div class="pillar-img-wrap" style="border-radius:56px 56px 8px 8px;">
            <img
              src="/images/pillar-2.png"
              alt="Transparansi dan Ketertelusuran - Waste4Change"
              class="pillar-img"
              loading="lazy"
            />
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

          <!-- Image: border-radius 56px 8px 56px 8px (Figma card 3) -->
          <div class="pillar-img-wrap" style="border-radius:56px 8px 56px 8px;">
            <img
              src="/images/pillar-3.png"
              alt="Penguatan Ekosistem - Waste4Change"
              class="pillar-img"
              loading="lazy"
            />
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
/* ── Grid: row, 24px gap, 3 equal columns ── */
.pillars-grid {
  display: flex;
  flex-direction: row;
  gap: 24px;
  justify-content: center;
  width: 100%;
}

/* ── Each pillar column: flex:1, col layout, 28px gap ── */
.pillar-col {
  display: flex;
  flex-direction: column;
  gap: 28px;
  flex: 1;
  min-width: 0;
}

/* ── Top area: col, 16px gap, relative for watermark number ── */
.pillar-top {
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;
}

/* ── Large watermark number: Asap, very light teal, absolute top-left ── */
.pillar-number {
  font-family: 'Asap', sans-serif;
  font-size: 80px;
  font-weight: 700;
  line-height: 1;
  color: #D6EEF2;       /* very light teal — the "watermark" effect */
  letter-spacing: -2px;
  user-select: none;
  pointer-events: none;
  /* sits behind the icon and text without taking layout space */
  position: absolute;
  top: -12px;
  left: -4px;
  z-index: 0;
}

/* ── Icon box: teal pale, 8px radius, 36×36, sits above watermark ── */
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
  /* push icon down so number watermark peeks above */
  margin-top: 60px;
}

/* ── Text block: sits above watermark ── */
.pillar-text {
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
  z-index: 1;
}

/* ── Pillar title: Open Sans 16px/700, #0A0A0A ── */
.pillar-title {
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.4;
  color: #0A0A0A;
  margin: 0;
}

/* ── Pillar desc: Open Sans 14px/400, #616161 ── */
.pillar-desc {
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.6;
  color: #616161;
  margin: 0;
}

/* ── Image wrapper: unique border-radius set per card via inline style ── */
.pillar-img-wrap {
  width: 100%;
  height: 240px;
  overflow: hidden;
  flex-shrink: 0;
}
.pillar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}
.pillar-img-wrap:hover .pillar-img {
  transform: scale(1.04);
}

/* ── Responsive ── */
@media (max-width: 900px) {
  .pillars-grid {
    flex-wrap: wrap;
  }
  .pillar-col {
    flex: 0 0 calc(50% - 12px);
  }
}
@media (max-width: 600px) {
  .pillar-col {
    flex: 0 0 100%;
  }
  .pillar-number {
    font-size: 60px;
  }
}
</style>
