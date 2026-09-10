<template>
  <!-- SECTION - SITE KAMI: bg #FAFAFA, padding 80px 140px, centered -->
  <section id="site-kami" class="site-section">
    <div class="figma-container site-container">

      <!-- Header: centered column -->
      <div class="site-header">
        <div class="site-title-wrap">
          <h2 class="section-title">SITE KAMI</h2>
          <span class="section-underline section-underline-center"></span>
        </div>
        <p class="site-desc">
          Waste4Change menyediakan fasilitas daur ulang bertanggung jawab di beberapa titik sebagai berikut:
        </p>
      </div>

      <!-- Site Cards Container: 3 equal cards grid -->
      <div class="site-cards-grid">

        <!-- Card 1: RBF Bekasi -->
        <article class="site-card">
          <div class="site-card-img-wrap">
            <img
              src="/images/hero-forklift.png"
              alt="Fasilitas RBF Bekasi Waste4Change"
              class="site-card-img"
              loading="lazy"
            />
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
              <!-- Stat 1 -->
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
              <!-- Stat 2 -->
              <div class="site-stat-item">
                <div class="site-stat-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00A5BA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
                <div class="site-stat-text">
                  <span class="site-stat-val">11</span>
                  <span class="site-stat-lbl">Karyawan</span>
                </div>
              </div>
              <!-- Stat 3 -->
              <div class="site-stat-item">
                <div class="site-stat-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00A5BA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M16 11V7a4 4 0 0 0-8 0v4M5 9h14l1 12H4L5 9z"/>
                  </svg>
                </div>
                <div class="site-stat-text">
                  <span class="site-stat-val">22</span>
                  <span class="site-stat-lbl">Mitra informal sektor</span>
                </div>
              </div>
              <!-- Stat 4 -->
              <div class="site-stat-item">
                <div class="site-stat-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00A5BA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                    <polyline points="9 22 9 12 15 12 15 22"/>
                  </svg>
                </div>
                <div class="site-stat-text">
                  <span class="site-stat-val">2</span>
                  <span class="site-stat-lbl">Bank sampah</span>
                </div>
              </div>
            </div>
          </div>
        </article>

        <!-- Card 2: RBF Bali -->
        <article class="site-card">
          <div class="site-card-img-wrap">
            <img
              src="/images/site-card.png"
              alt="Fasilitas RBF Bali Waste4Change"
              class="site-card-img"
              loading="lazy"
            />
          </div>
          <div class="site-card-body">
            <div class="site-card-header site-card-header-flex">
              <div>
                <h3 class="site-card-name">RBF Bali</h3>
                <span class="site-card-subtitle">2019 - Present</span>
              </div>
              <div class="site-collab">
                <span class="site-collab-lbl">Kolaborasi dengan:</span>
                <img src="/images/ecobali-logo.png" alt="ecoBali Logo" class="site-collab-img" />
              </div>
            </div>

            <p class="site-card-desc">
              Fasilitas kami di Bali berfokus pada pengelolaan sampah yang komprehensif, mengolah material yang bersumber dari bank sampah lokal dan TPS3R. Kami juga bekerja sama dengan organisasi mitra untuk mengelola material bernilai rendah yang sulit, termasuk MLP dan UBC.
            </p>

            <div class="site-card-divider"></div>

            <div class="site-stats-grid">
              <!-- Stat 1 -->
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
              <!-- Stat 2 -->
              <div class="site-stat-item">
                <div class="site-stat-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00A5BA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
                <div class="site-stat-text">
                  <span class="site-stat-val">17</span>
                  <span class="site-stat-lbl">Karyawan</span>
                </div>
              </div>
              <!-- Stat 3 -->
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
              <!-- Stat 4 -->
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

        <!-- Card 3: RBF Bandung -->
        <article class="site-card">
          <div class="site-card-img-wrap">
            <img
              src="/images/workers-1.png"
              alt="Fasilitas RBF Bandung Waste4Change"
              class="site-card-img"
              loading="lazy"
            />
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
              <!-- Stat 1 -->
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
              <!-- Stat 2 -->
              <div class="site-stat-item">
                <div class="site-stat-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00A5BA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
                <div class="site-stat-text">
                  <span class="site-stat-val">6</span>
                  <span class="site-stat-lbl">Karyawan</span>
                </div>
              </div>
              <!-- Stat 3 -->
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
  </section>
</template>

<script setup lang="ts">
// Site Kami component
</script>

<style scoped>
.site-section {
  background: #FAFAFA;
}

.site-container {
  padding-top: 80px;
  padding-bottom: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
}

/* Header */
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
  max-width: 680px;
  margin: 0;
}

/* Cards Grid */
.site-cards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  width: 100%;
}

/* Card */
.site-card {
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

/* Image Wrap */
.site-card-img-wrap {
  width: 100%;
  height: 240px;
  overflow: hidden;
  position: relative;
  background: #F0F0F0;
}

.site-card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.site-card:hover .site-card-img {
  transform: scale(1.03);
}

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
  margin-bottom: 20px;
}

.site-card-header-flex {
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
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
}

/* Collaboration Badge */
.site-collab {
  display: flex;
  align-items: center;
  gap: 8px;
}

.site-collab-lbl {
  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
  color: #9E9E9E;
  font-weight: 400;
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
  margin-top: 24px;
  margin-bottom: 24px;
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

/* Responsive */
@media (max-width: 1100px) {
  .site-cards-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}


@media (max-width: 768px) {
  .site-cards-grid {
    grid-template-columns: 1fr;
  }
  .site-container {
    padding-top: 48px;
    padding-bottom: 48px;
    gap: 32px;
  }
}
@media (max-width: 640px) {
  .site-card-body { padding: 20px 16px 24px 16px; }
  .site-card-img-wrap { height: 200px; }
  .site-card-name { font-size: 19px; }
  .site-stats-grid { gap: 12px 8px; }
  .site-stat-val { font-size: 16px; }
}
</style>
