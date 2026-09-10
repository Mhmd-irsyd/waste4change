<template>
  <!-- SECTION - DIREKOMENDASIKAN UNTUK: bg #F8FAF9, padding 80px 140px, col centered, gap 40px -->
  <section id="direkomendasikan" class="reco-section">
    <div class="figma-container reco-container">

      <!-- Section Title -->
      <div class="reco-title-wrap">
        <h2 class="section-title">DIREKOMENDASIKAN UNTUK</h2>
        <span class="section-underline section-underline-center"></span>
      </div>

      <!-- Cards Grid: 3 columns x 3 rows, card 7 centered in col 2 -->
      <div class="reco-grid">

        <!-- 1: Aggregator Plastic Recovery (Pink) -->
        <article class="reco-card">
          <div class="reco-icon-box" style="background: #FFEBEB;">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF5252" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"/>
              <path d="m7 21 5-5m3-3 6-6"/>
            </svg>
          </div>
          <span class="reco-card-text">Aggregator Plastic Recovery</span>
        </article>

        <!-- 2: CSR Perusahaan (Green) -->
        <article class="reco-card">
          <div class="reco-icon-box" style="background: #E8F8E5;">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5m-4 0h4"/>
            </svg>
          </div>
          <span class="reco-card-text">CSR Perusahaan</span>
        </article>

        <!-- 3: Produsen Consumer Goods (Orange) -->
        <article class="reco-card">
          <div class="reco-icon-box" style="background: #FFF3E0;">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF9800" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="9" cy="21" r="1"/>
              <circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
          </div>
          <span class="reco-card-text">Produsen Consumer Goods (Kebutuhan Sehari-Hari)</span>
        </article>

        <!-- 4: Produsen Kosmetik & Personal Care (Cyan) -->
        <article class="reco-card">
          <div class="reco-icon-box" style="background: #E0F7FA;">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00ACC1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 3h6v3H9zM10 6v3h4V6"/>
              <rect x="7" y="9" width="10" height="12" rx="2"/>
            </svg>
          </div>
          <span class="reco-card-text">Produsen Kosmetik &amp; Personal Care</span>
        </article>

        <!-- 5: Produsen Makanan & Minuman (Pink) -->
        <article class="reco-card">
          <div class="reco-icon-box" style="background: #FFEBEB;">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF5252" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 2v20M18 2l4 4M18 22l4-4M2 2l10 10M2 12l10-10"/>
            </svg>
          </div>
          <span class="reco-card-text">Produsen Makanan &amp; Minuman</span>
        </article>

        <!-- 6: Industri energi, minyak, dan gas (Amber) -->
        <article class="reco-card">
          <div class="reco-icon-box" style="background: #FFF8E1;">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFB300" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
            </svg>
          </div>
          <span class="reco-card-text">Industri energi, minyak, dan gas</span>
        </article>

        <!-- 7: Industri Perbankan (Cyan) — Placed in Column 2 -->
        <article class="reco-card reco-card-center">
          <div class="reco-icon-box" style="background: #E0F7FA;">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00ACC1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 21h18M3 10h18M3 7l9-4 9 4M4 10h1v11H4V10zm6 0h1v11h-1V10zm5 0h1v11h-1V10zm5 0h1v11h-1V10z"/>
            </svg>
          </div>
          <span class="reco-card-text">Industri Perbankan</span>
        </article>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Direkomendasikan section
</script>

<style scoped>
.reco-section {
  background: #F8FAF9;
}

.reco-container {
  padding-top: 80px;
  padding-bottom: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
}

/* Section Title */
.reco-title-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

/* Grid Layout: 3 equal columns */
.reco-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px 24px;
  width: 100%;
}

/* Card 7 placed specifically in column 2 (center) */
.reco-card-center {
  grid-column: 2;
}

/* Card styling */
.reco-card {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  padding: 16px 20px;
  background: #FFFFFF;
  border-radius: 8px;
  box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.03);
  border: 1px solid #F0F0F0;
  min-height: 72px;
  box-sizing: border-box;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.reco-card:hover {
  transform: translateY(-2px);
  box-shadow: 0px 8px 25px rgba(0, 0, 0, 0.07);
}

/* Icon Box */
.reco-icon-box {
  width: 42px;
  height: 42px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

/* Text */
.reco-card-text {
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;
  color: #333333;
}

/* Responsive Layout */
@media (max-width: 992px) {
  .reco-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .reco-card-center {
    grid-column: auto;
  }
}

@media (max-width: 640px) {
  .reco-card { padding: 14px 16px; min-height: 64px; }
  .reco-card-text { font-size: 13px; }
  .reco-grid {
    grid-template-columns: 1fr;
  }
  .reco-container {
    padding-top: 60px;
    padding-bottom: 60px;
    gap: 32px;
  }
}
</style>
