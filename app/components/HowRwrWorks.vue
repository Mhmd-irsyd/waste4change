<template>
  <!-- SECTION - HOW RWR WORKS -->
  <section id="how-rwr-works" style="background:#FFFFFF;">
    <div class="rwr-container">

      <!-- Section Title -->
      <div class="rwr-header">
        <h2 class="rwr-section-title">HOW RWR WORKS</h2>
        <span class="section-underline"></span>
      </div>

      <!-- ===== DESKTOP: Alternating zigzag layout ===== -->
      <div class="rwr-steps rwr-desktop">

        <!-- Step 1: text LEFT (right-aligned), image RIGHT -->
        <div class="rwr-row">
          <div class="rwr-col rwr-col-left">
            <div class="rwr-text rwr-text-right">
              <h3 class="rwr-title-right">1. Pengadaan Material</h3>
              <p class="rwr-desc-right">Pengumpulan kemasan pascakonsumsi melalui jaringan mitra terverifikasi dan bertanggung jawab.</p>
            </div>
          </div>
          <div class="rwr-timeline">
            <div class="rwr-line"></div>
            <div class="rwr-icon-circle">
              <svg width="24" height="24" fill="none" stroke="#17A2B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                <rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
              </svg>
            </div>
            <div class="rwr-line"></div>
          </div>
          <div class="rwr-col rwr-col-right">
            <div class="rwr-img-wrap">
              <img src="/images/rwr-step-1.png" alt="Pengadaan material" class="rwr-img" loading="lazy"/>
            </div>
          </div>
        </div>

        <!-- Step 2: image LEFT, text RIGHT -->
        <div class="rwr-row">
          <div class="rwr-col rwr-col-left">
            <div class="rwr-img-wrap">
              <img src="/images/rwr-step-2.png" alt="Pemilahan dan pengendalian mutu" class="rwr-img" loading="lazy"/>
            </div>
          </div>
          <div class="rwr-timeline">
            <div class="rwr-line"></div>
            <div class="rwr-icon-circle">
              <svg width="24" height="24" fill="none" stroke="#17A2B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
              </svg>
            </div>
            <div class="rwr-line"></div>
          </div>
          <div class="rwr-col rwr-col-right">
            <div class="rwr-text rwr-text-left">
              <h3 class="rwr-title-left">2. Pemilahan &amp; Pengendalian Mutu</h3>
              <p class="rwr-desc-left">Pemilahan menyeluruh dengan pengecekan kualitas agar material yang diproses tetap konsisten dan sesuai standar.</p>
            </div>
          </div>
        </div>

        <!-- Step 3: text LEFT (right-aligned), image RIGHT -->
        <div class="rwr-row">
          <div class="rwr-col rwr-col-left">
            <div class="rwr-text rwr-text-right">
              <h3 class="rwr-title-right">3. Pengolahan &amp; Daur Ulang</h3>
              <p class="rwr-desc-right">Pengolahan kemasan menjadi material baru yang siap digunakan kembali melalui proses daur ulang yang efisien.</p>
            </div>
          </div>
          <div class="rwr-timeline">
            <div class="rwr-line"></div>
            <div class="rwr-icon-circle">
              <svg width="24" height="24" fill="none" stroke="#17A2B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>
              </svg>
            </div>
            <div class="rwr-line"></div>
          </div>
          <div class="rwr-col rwr-col-right">
            <div class="rwr-img-wrap">
              <img src="/images/rwr-step-3.png" alt="Pengolahan dan daur ulang" class="rwr-img" loading="lazy"/>
            </div>
          </div>
        </div>

        <!-- Step 4: image LEFT, text RIGHT -->
        <div class="rwr-row">
          <div class="rwr-col rwr-col-left">
            <div class="rwr-img-wrap">
              <img src="/images/rwr-step-4.png" alt="Bahan baku hasil pemulihan" class="rwr-img" loading="lazy"/>
            </div>
          </div>
          <div class="rwr-timeline">
            <div class="rwr-line"></div>
            <div class="rwr-icon-circle">
              <svg width="24" height="24" fill="none" stroke="#17A2B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/>
              </svg>
            </div>
            <div class="rwr-line"></div>
          </div>
          <div class="rwr-col rwr-col-right">
            <div class="rwr-text rwr-text-left">
              <h3 class="rwr-title-left">4. Bahan Baku Hasil Pemulihan</h3>
              <p class="rwr-desc-left">Material hasil pemulihan yang dapat kembali masuk ke siklus produksi sebagai bahan baku.</p>
            </div>
          </div>
        </div>

        <!-- Step 5: text LEFT (right-aligned), image RIGHT -->
        <div class="rwr-row">
          <div class="rwr-col rwr-col-left">
            <div class="rwr-text rwr-text-right">
              <h3 class="rwr-title-right">5. Pelaporan &amp; Dokumentasi</h3>
              <p class="rwr-desc-right">Pelacakan dan dokumentasi yang transparan untuk mendukung kebutuhan pelaporan serta komitmen keberlanjutan.</p>
            </div>
          </div>
          <div class="rwr-timeline">
            <div class="rwr-line"></div>
            <div class="rwr-icon-circle">
              <svg width="24" height="24" fill="none" stroke="#17A2B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
            </div>
            <div class="rwr-line invisible"></div>
          </div>
          <div class="rwr-col rwr-col-right">
            <div class="rwr-img-wrap">
              <img src="/images/rwr-step-5.png" alt="Pelaporan dan dokumentasi" class="rwr-img" loading="lazy"/>
            </div>
          </div>
        </div>

      </div>

      <!-- ===== MOBILE: Vertical timeline on LEFT, content on RIGHT ===== -->
      <div class="rwr-mobile">

        <!-- Step 1 -->
        <div class="m-rwr-step">
          <div class="m-rwr-left">
            <div class="m-rwr-icon">
              <svg width="20" height="20" fill="none" stroke="#17A2B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                <rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
              </svg>
            </div>
            <div class="m-rwr-vline"></div>
          </div>
          <div class="m-rwr-right">
            <h3 class="m-rwr-title">1. Pengadaan Material</h3>
            <p class="m-rwr-desc">Pengumpulan kemasan pascakonsumsi melalui jaringan mitra terverifikasi dan bertanggung jawab.</p>
            <div class="m-rwr-img-wrap">
              <img src="/images/rwr-step-1.png" alt="Pengadaan material" class="m-rwr-img" loading="lazy"/>
            </div>
          </div>
        </div>

        <!-- Step 2 -->
        <div class="m-rwr-step">
          <div class="m-rwr-left">
            <div class="m-rwr-icon">
              <svg width="20" height="20" fill="none" stroke="#17A2B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
              </svg>
            </div>
            <div class="m-rwr-vline"></div>
          </div>
          <div class="m-rwr-right">
            <h3 class="m-rwr-title">2. Pemilahan &amp; Pengendalian Mutu</h3>
            <p class="m-rwr-desc">Pemilahan menyeluruh dengan pengecekan kualitas agar material yang diproses tetap konsisten dan sesuai standar.</p>
            <div class="m-rwr-img-wrap">
              <img src="/images/rwr-step-2.png" alt="Pemilahan dan pengendalian mutu" class="m-rwr-img" loading="lazy"/>
            </div>
          </div>
        </div>

        <!-- Step 3 -->
        <div class="m-rwr-step">
          <div class="m-rwr-left">
            <div class="m-rwr-icon">
              <svg width="20" height="20" fill="none" stroke="#17A2B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>
              </svg>
            </div>
            <div class="m-rwr-vline"></div>
          </div>
          <div class="m-rwr-right">
            <h3 class="m-rwr-title">3. Pengolahan &amp; Daur Ulang</h3>
            <p class="m-rwr-desc">Pengolahan kemasan menjadi material baru yang siap digunakan kembali melalui proses daur ulang yang efisien.</p>
            <div class="m-rwr-img-wrap">
              <img src="/images/rwr-step-3.png" alt="Pengolahan dan daur ulang" class="m-rwr-img" loading="lazy"/>
            </div>
          </div>
        </div>

        <!-- Step 4 -->
        <div class="m-rwr-step">
          <div class="m-rwr-left">
            <div class="m-rwr-icon">
              <svg width="20" height="20" fill="none" stroke="#17A2B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/>
              </svg>
            </div>
            <div class="m-rwr-vline"></div>
          </div>
          <div class="m-rwr-right">
            <h3 class="m-rwr-title">4. Bahan Baku Hasil Pemulihan</h3>
            <p class="m-rwr-desc">Material hasil pemulihan yang dapat kembali masuk ke siklus produksi sebagai bahan baku.</p>
            <div class="m-rwr-img-wrap">
              <img src="/images/rwr-step-4.png" alt="Bahan baku hasil pemulihan" class="m-rwr-img" loading="lazy"/>
            </div>
          </div>
        </div>

        <!-- Step 5 (last - no bottom line) -->
        <div class="m-rwr-step m-rwr-step-last">
          <div class="m-rwr-left">
            <div class="m-rwr-icon">
              <svg width="20" height="20" fill="none" stroke="#17A2B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
            </div>
          </div>
          <div class="m-rwr-right">
            <h3 class="m-rwr-title">5. Pelaporan &amp; Dokumentasi</h3>
            <p class="m-rwr-desc">Pelacakan dan dokumentasi yang transparan untuk mendukung kebutuhan pelaporan serta komitmen keberlanjutan.</p>
            <div class="m-rwr-img-wrap">
              <img src="/images/rwr-step-5.png" alt="Pelaporan dan dokumentasi" class="m-rwr-img" loading="lazy"/>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
// How RWR Works section
</script>

<style scoped>
/* ===== Container ===== */
.rwr-container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 64px 140px 80px;
}

/* ===== Section Header ===== */
.rwr-header {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 56px;
}

.rwr-section-title {
  font-family: 'Nunito', sans-serif;
  font-size: 28px;
  font-weight: 700;
  color: #0A0A0A;
  margin: 0;
  text-align: left;
}

/* ===== DESKTOP Layout ===== */
.rwr-desktop { display: flex; flex-direction: column; }
.rwr-mobile  { display: none; }

/* Desktop row: 3 cols — left(1fr) | timeline(80px) | right(1fr) */
.rwr-row {
  display: grid;
  grid-template-columns: 1fr 80px 1fr;
  align-items: center;
  min-height: 280px;
}

.rwr-col { display: flex; align-items: center; padding: 24px 0; }
.rwr-col-left  { justify-content: flex-end; }
.rwr-col-right { justify-content: flex-start; }

/* Desktop image */
.rwr-img-wrap {
  width: 100%;
  max-width: 400px;
  height: 240px;
  border-radius: 8px;
  overflow: hidden;
}
.rwr-img {
  width: 100%; height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}
.rwr-img-wrap:hover .rwr-img { transform: scale(1.04); }

/* Desktop text */
.rwr-text { max-width: 468px; }
.rwr-text-right { text-align: right; }
.rwr-text-left  { text-align: left; }

.rwr-title-left, .rwr-title-right {
  font-family: 'Open Sans', sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.4;
  color: #0A0A0A;
  margin: 0 0 8px;
}
.rwr-title-right { text-align: right; }
.rwr-title-left  { text-align: left; }

.rwr-desc-left, .rwr-desc-right {
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  color: #404040;
  margin: 0;
}
.rwr-desc-right { text-align: right; }
.rwr-desc-left  { text-align: left; }

/* Desktop timeline */
.rwr-timeline {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: stretch;
}
.rwr-line {
  width: 2px;
  background-color: #CFD6D8;
  flex: 1;
}
.rwr-line.invisible { visibility: hidden; }

.rwr-icon-circle {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: #E3F4F6;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

/* ===== MOBILE Layout ===== */
/* Left column: icon + vertical line; Right column: title + desc + image */
.m-rwr-step {
  display: flex;
  flex-direction: row;
  gap: 16px;
  margin-bottom: 8px;
}

.m-rwr-step-last .m-rwr-right {
  padding-bottom: 0;
}

/* Left: icon + line */
.m-rwr-left {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  width: 40px;
}

/* Icon circle */
.m-rwr-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #E3F4F6;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  z-index: 1;
}

/* Vertical line below icon */
.m-rwr-vline {
  width: 2px;
  flex: 1;
  background-color: #CFD6D8;
  margin-top: 6px;
}

/* Right: content */
.m-rwr-right {
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
  min-width: 0;
  padding-bottom: 28px;
}

.m-rwr-title {
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.4;
  color: #0A0A0A;
  margin: 0;
  padding-top: 8px;
}

.m-rwr-desc {
  font-family: 'Open Sans', sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.6;
  color: #555555;
  margin: 0;
}

.m-rwr-img-wrap {
  width: 100%;
  height: 180px;
  border-radius: 12px;
  overflow: hidden;
  margin-top: 8px;
}

.m-rwr-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}
.m-rwr-img-wrap:hover .m-rwr-img { transform: scale(1.04); }

/* ===== Responsive Breakpoints ===== */
@media (max-width: 1440px) {
  .rwr-container { padding-left: 80px; padding-right: 80px; }
}

@media (max-width: 1024px) {
  .rwr-container { padding-left: 40px; padding-right: 40px; }
}

/* Switch to mobile layout below 768px */
@media (max-width: 768px) {
  .rwr-container {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 48px;
    padding-bottom: 48px;
  }

  .rwr-header {
    margin-bottom: 32px;
  }

  .rwr-section-title {
    font-size: 22px;
  }

  .rwr-desktop { display: none; }
  .rwr-mobile  { display: flex; flex-direction: column; }
}

@media (max-width: 480px) {
  .m-rwr-img-wrap { height: 160px; }
  .m-rwr-title    { font-size: 15px; }
}
</style>