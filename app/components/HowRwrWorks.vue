<template>
  <!-- SECTION - HOW RWR WORKS: bg white, padding 64px 140px, gap 56px, centered -->
  <section id="how-it-works" style="background:#ffffff;">
    <div class="figma-container" style="padding-top:64px; padding-bottom:64px; display:flex; flex-direction:column; align-items:center; gap:56px;">

      <!-- Section Title: Nunito 28px/700, centered -->
      <div style="display:flex; flex-direction:column; align-items:center; gap:24px;">
        <h2 class="section-title">HOW RWR WORKS</h2>
        <span class="section-underline section-underline-center"></span>
      </div>

      <!-- Steps -->
      <div class="rwr-steps">

        <!-- Step 1: image LEFT, text RIGHT — left-aligned text -->
        <div class="rwr-row">
          <div class="rwr-col rwr-col-left">
            <div class="rwr-img-wrap">
              <img src="/images/rwr-step-1.png" alt="Pengadaan Material" class="rwr-img" loading="lazy"/>
            </div>
          </div>
          <div class="rwr-timeline">
            <div class="rwr-line" :class="{ invisible: true }"></div>
            <div class="rwr-icon-circle rwr-icon-teal">
              <svg width="24" height="24" fill="none" stroke="#17A2B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                <rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 5v3h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
              </svg>
            </div>
            <div class="rwr-line"></div>
          </div>
          <div class="rwr-col rwr-col-right">
            <div class="rwr-text rwr-text-left">
              <h3 class="rwr-title-left">1. Pengadaan Material</h3>
              <p class="rwr-desc-left">Pengumpulan kemasan pascakonsumsi melalui jaringan mitra terverifikasi dan bertanggung jawab.</p>
            </div>
          </div>
        </div>

        <!-- Step 2: text LEFT (right-aligned), image RIGHT -->
        <div class="rwr-row">
          <div class="rwr-col rwr-col-left">
            <div class="rwr-text rwr-text-right">
              <h3 class="rwr-title-right">Pemilahan &amp; Pengendalian Mutu</h3>
              <p class="rwr-desc-right">Pemilahan menyeluruh dengan pengecekan kualitas agar material yang diproses tetap konsisten dan sesuai standar.</p>
            </div>
          </div>
          <div class="rwr-timeline">
            <div class="rwr-line"></div>
            <div class="rwr-icon-circle rwr-icon-pale">
              <svg width="24" height="24" fill="none" stroke="#17A2B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
              </svg>
            </div>
            <div class="rwr-line"></div>
          </div>
          <div class="rwr-col rwr-col-right">
            <div class="rwr-img-wrap">
              <img src="/images/rwr-step-2.png" alt="Pemilahan dan pengendalian mutu" class="rwr-img" loading="lazy"/>
            </div>
          </div>
        </div>

        <!-- Step 3: image LEFT, text RIGHT -->
        <div class="rwr-row">
          <div class="rwr-col rwr-col-left">
            <div class="rwr-img-wrap">
              <img src="/images/rwr-step-3.png" alt="Pengolahan dan daur ulang" class="rwr-img" loading="lazy"/>
            </div>
          </div>
          <div class="rwr-timeline">
            <div class="rwr-line"></div>
            <div class="rwr-icon-circle rwr-icon-teal">
              <svg width="24" height="24" fill="none" stroke="#17A2B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>
              </svg>
            </div>
            <div class="rwr-line"></div>
          </div>
          <div class="rwr-col rwr-col-right">
            <div class="rwr-text rwr-text-left">
              <h3 class="rwr-title-left">3. Pengolahan &amp; Daur Ulang</h3>
              <p class="rwr-desc-left">Pengolahan kemasan menjadi material baru yang siap digunakan kembali melalui proses daur ulang yang efisien.</p>
            </div>
          </div>
        </div>

        <!-- Step 4: text LEFT (right-aligned), image RIGHT -->
        <div class="rwr-row">
          <div class="rwr-col rwr-col-left">
            <div class="rwr-text rwr-text-right">
              <h3 class="rwr-title-right">Bahan Baku Hasil Pemulihan</h3>
              <p class="rwr-desc-right">Material hasil pemulihan yang dapat kembali masuk ke siklus produksi sebagai bahan baku.</p>
            </div>
          </div>
          <div class="rwr-timeline">
            <div class="rwr-line"></div>
            <div class="rwr-icon-circle rwr-icon-pale">
              <svg width="24" height="24" fill="none" stroke="#17A2B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/>
              </svg>
            </div>
            <div class="rwr-line"></div>
          </div>
          <div class="rwr-col rwr-col-right">
            <div class="rwr-img-wrap">
              <img src="/images/rwr-step-4.png" alt="Bahan baku hasil pemulihan" class="rwr-img" loading="lazy"/>
            </div>
          </div>
        </div>

        <!-- Step 5: image LEFT, text RIGHT -->
        <div class="rwr-row">
          <div class="rwr-col rwr-col-left">
            <div class="rwr-img-wrap">
              <img src="/images/rwr-step-5.png" alt="Pelaporan dan dokumentasi" class="rwr-img" loading="lazy"/>
            </div>
          </div>
          <div class="rwr-timeline">
            <div class="rwr-line"></div>
            <div class="rwr-icon-circle rwr-icon-teal">
              <svg width="24" height="24" fill="none" stroke="#17A2B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
            </div>
            <div class="rwr-line invisible"></div>
          </div>
          <div class="rwr-col rwr-col-right">
            <div class="rwr-text rwr-text-left">
              <h3 class="rwr-title-left">5. Pelaporan &amp; Dokumentasi</h3>
              <p class="rwr-desc-left">Pelacakan dan dokumentasi yang transparan untuk mendukung kebutuhan pelaporan serta komitmen keberlanjutan.</p>
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
/* Steps: col, no gap (rows connect via timeline) */
.rwr-steps {
  display: flex;
  flex-direction: column;
  width: 100%;
}

/* Row: 3 cols — left(1fr) | timeline(80px) | right(1fr), min-height 280px */
.rwr-row {
  display: grid;
  grid-template-columns: 1fr 80px 1fr;
  align-items: center;
  min-height: 280px;
}

/* Left/right columns */
.rwr-col { display: flex; align-items: center; padding: 24px 0; }
.rwr-col-left  { justify-content: flex-end;   padding-right: 0; }
.rwr-col-right { justify-content: flex-start;  padding-left: 0; }

/* Image: 8px radius */
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

/* Text containers: max 468px per Figma */
.rwr-text { max-width: 468px; }
.rwr-text-right { text-align: right; }
.rwr-text-left  { text-align: left; }

/* Left-aligned step title: Open Sans 20px/700 */
.rwr-title-left {
  font-family: 'Open Sans', sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.4;
  color: #0A0A0A;
  margin: 0 0 8px;
  text-align: left;
}

/* Right-aligned step title: Open Sans 20px/700 */
.rwr-title-right {
  font-family: 'Open Sans', sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.4;
  color: #0A0A0A;
  margin: 0 0 8px;
  text-align: right;
}

/* Left desc: Open Sans 14px/400 */
.rwr-desc-left {
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  color: #404040;
  margin: 0;
  text-align: left;
}

/* Right desc */
.rwr-desc-right {
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  color: #404040;
  margin: 0;
  text-align: right;
}

/* Center timeline */
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

/* Icon circle: 56x56, no border, fill #E3F4F6 (teal) or white (pale) */
.rwr-icon-circle {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.rwr-icon-teal { background-color: #E3F4F6; }
.rwr-icon-pale { background-color: #E3F4F6; }

/* Responsive */
@media (max-width: 900px) {
  .rwr-row {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    min-height: unset;
    gap: 16px;
    padding-bottom: 32px;
  }
  .rwr-timeline {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: auto;
    width: 100%;
    order: -1;
    margin-bottom: 8px;
  }
  .rwr-line { height: 2px; width: 100%; flex: 1; }
  .rwr-col { justify-content: flex-start; padding: 0; width: 100%; }
  .rwr-col-left, .rwr-col-right { justify-content: flex-start; }
  .rwr-text-right, .rwr-text-left { text-align: left; max-width: 100%; }
  .rwr-title-right, .rwr-title-left { text-align: left; font-size: 18px; }
  .rwr-desc-right, .rwr-desc-left { text-align: left; font-size: 13px; }
  .rwr-img-wrap { max-width: 100%; width: 100%; height: 220px; }
}
@media (max-width: 480px) {
  .rwr-img-wrap { height: 180px; }
}
</style>
