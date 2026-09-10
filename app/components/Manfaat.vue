<template>
  <!-- SECTION - MANFAAT: bg #F7F7F6, padding 100px 140px 120px, col centered, gap 40px -->
  <section id="manfaat" style="background:#F7F7F6;">
    <div
      class="figma-container"
      style="padding-top:100px; padding-bottom:120px; display:flex; flex-direction:column; align-items:center; gap:40px;"
    >

      <!-- ── Header: col centered, gap 22px ── -->
      <div style="display:flex; flex-direction:column; align-items:center; gap:22px; width:100%; max-width:1160px;">
        <div style="display:flex; flex-direction:column; align-items:center; gap:24px;">
          <h2 class="section-title">MANFAAT</h2>
          <span class="section-underline section-underline-center"></span>
        </div>
        <p class="manfaat-header-desc">Berikut adalah manfaat yang akan Anda peroleh dengan mendukung tujuan kami</p>
      </div>

      <!-- ── Cards: row wrap centered, 24px gap, cards 370px wide ── -->
      <div class="manfaat-cards">

        <!-- Card 1 -->
        <div class="manfaat-card">
          <div class="manfaat-icon-box">
            <svg width="28" height="28" fill="none" stroke="#17A2B8" stroke-width="1.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
            </svg>
          </div>
          <div class="manfaat-card-text">
            <h3 class="manfaat-card-title">Citra Publik menjadi Positif</h3>
            <p class="manfaat-card-desc">Membangun citra merek yang positif dan menarik pelanggan yang sadar lingkungan.</p>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="manfaat-card">
          <div class="manfaat-icon-box">
            <svg width="28" height="28" fill="none" stroke="#17A2B8" stroke-width="1.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"/>
            </svg>
          </div>
          <div class="manfaat-card-text">
            <h3 class="manfaat-card-title">Hubungan dengan Stakeholder yang Lebih Baik</h3>
            <p class="manfaat-card-desc">Meningkatkan hubungan dengan investor, karyawan, dan masyarakat setempat.</p>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="manfaat-card">
          <div class="manfaat-icon-box">
            <svg width="28" height="28" fill="none" stroke="#17A2B8" stroke-width="1.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <div class="manfaat-card-text">
            <h3 class="manfaat-card-title">Akses ke Investasi Hijau dan Pasar Global</h3>
            <p class="manfaat-card-desc">Membuka akses ke peluang pendanaan dan memfasilitasi ekspansi strategis ke pasar baru.</p>
          </div>
        </div>

        <!-- Card 4 -->
        <div class="manfaat-card">
          <div class="manfaat-icon-box">
            <svg width="28" height="28" fill="none" stroke="#17A2B8" stroke-width="1.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
          </div>
          <div class="manfaat-card-text">
            <h3 class="manfaat-card-title">Validasi dan Verifikasi Dampak</h3>
            <p class="manfaat-card-desc">Menyebarluaskan dampak nyata yang dapat diverifikasi, memastikan pendekatan dan hasil yang terukur.</p>
          </div>
        </div>

        <!-- Card 5 -->
        <div class="manfaat-card">
          <div class="manfaat-icon-box">
            <svg width="28" height="28" fill="none" stroke="#17A2B8" stroke-width="1.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
            </svg>
          </div>
          <div class="manfaat-card-text">
            <h3 class="manfaat-card-title">Menarik dan Mempertahankan Pelanggan</h3>
            <p class="manfaat-card-desc">Preferensi konsumen beralih ke produk dan praktik berkelanjutan.</p>
          </div>
        </div>

        <!-- Card 6 -->
        <div class="manfaat-card">
          <div class="manfaat-icon-box">
            <svg width="28" height="28" fill="none" stroke="#17A2B8" stroke-width="1.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
            </svg>
          </div>
          <div class="manfaat-card-text">
            <h3 class="manfaat-card-title">Kepatuhan terhadap Peraturan</h3>
            <p class="manfaat-card-desc">Memastikan kepatuhan terhadap peraturan lingkungan dan menghindari potensi denda dan penalti.</p>
          </div>
        </div>

      </div>

      <!-- ── CTA Banner: 1162px wide, 240px tall, teal gradient over image ── -->
      <div class="manfaat-cta">
        <div class="manfaat-cta-inner">
          <div class="manfaat-cta-overlay"></div>
          <h3 class="manfaat-cta-title">Mulai Dampakmu Sekarang!</h3>
          <button
            class="btn-white"
            style="font-size:13px; font-weight:700; letter-spacing:0.08em; position:relative; z-index:1;"
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
defineEmits(['hubungi'])
</script>

<style scoped>
/* Description text: Open Sans 14px, centered */
.manfaat-header-desc {
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  color: #616161;
  text-align: center;
  max-width: 600px;
  margin: 0;
}

/* ── Cards row: centered, wrap, 24px gap, always 3 columns ── */
.manfaat-cards {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px;
  width: 100%;
  max-width: 1162px;
  align-items: stretch;
}

/* ── Card: 3 columns layout — calc takes 1/3 of container minus 2 gaps ── */
.manfaat-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 24px;
  /* 3 cards per row: (100% - 2×24px gap) / 3 */
  flex: 0 0 calc((100% - 48px) / 3);
  width: calc((100% - 48px) / 3);
  min-width: 0;
  border-radius: 8px;
  border: 1px solid #E7E7E7;
  background: #ffffff;
  text-align: center;
  box-sizing: border-box;
}

/* ── Icon box: teal pale, 8px radius, 48×48 ── */
.manfaat-icon-box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 8px;
  background: #E3F4F6;
  flex-shrink: 0;
}

/* Card text */
.manfaat-card-text {
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  text-align: center;
  width: 100%;
}

/* Card title: Asap 16px/700, #404040, centered */
.manfaat-card-title {
  font-family: 'Asap', sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;
  color: #404040;
  margin: 0;
  text-align: center;
}

/* Card desc: Open Sans 14px/400, #7A7A7A */
.manfaat-card-desc {
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  color: #7A7A7A;
  margin: 0;
  text-align: center;
}

/* ── CTA Banner ── */
.manfaat-cta {
  width: 100%;
  max-width: 1162px;
}

.manfaat-cta-inner {
  position: relative;
  width: 100%;
  min-height: 240px;
  border-radius: 8px;
  background-color: #17A2B8;
  background-image: url('/images/support-section.png');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 48px 36px;
  overflow: hidden;
}

.manfaat-cta-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(23,162,184,0.4) 0%, rgba(55,145,146,0.9) 46%, rgba(36,217,142,1) 100%);
  border-radius: 8px;
}

/* CTA Title: Asap 36px/700, white, centered */
.manfaat-cta-title {
  position: relative;
  z-index: 1;
  font-family: 'Asap', sans-serif;
  font-size: 36px;
  font-weight: 700;
  line-height: 1.4;
  color: #ffffff;
  margin: 0;
  text-align: center;
}

/* ── Responsive ── */
@media (max-width: 960px) {
  /* 2 cards per row on tablet */
  .manfaat-card { flex: 0 0 calc((100% - 24px) / 2); width: auto; }
}
@media (max-width: 640px) {
  /* 1 card per row on mobile */
  .manfaat-card { flex: 0 0 100%; width: auto; }
  .manfaat-cta-title { font-size: 24px; }
}
</style>
