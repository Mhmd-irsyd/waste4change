<template>
  <!-- SECTION - ABOUT: bg #FAFAFA, padding 64px 140px, gap 56px, centered -->
  <section id="tentang" style="background:#FAFAFA;">
    <div class="figma-container py-10 lg:py-16">

      <!-- Mobile Section Header: Centered "TENTANG" + underline (Mobile Only) -->
      <div class="mobile-about-label-wrap">
        <h2 class="about-label">TENTANG</h2>
        <span class="section-underline section-underline-center"></span>
      </div>

      <div class="about-grid">

        <!-- Left / Top: Photo -->
        <div class="about-img-wrap">
          <img
            src="/images/about-workers.png"
            alt="Tim pekerja Waste4Change berseragam biru dan helm keselamatan"
            class="about-img"
            loading="lazy"
            width="520"
            height="400"
          />
        </div>

        <!-- Right / Bottom: Content -->
        <div class="about-content">

          <!-- Desktop Section label (Desktop Only) -->
          <div class="desktop-about-label-wrap">
            <h2 class="about-label">TENTANG</h2>
            <span class="section-underline"></span>
          </div>

          <!-- Card 1: gradient background -->
          <div class="about-card">
            <h3 class="about-card-title">Bangun Ekosistem Daur Ulang yang Bertanggung Jawab</h3>
            <p class="about-card-desc">
              Layanan daur ulang yang memastikan material dikelola melalui sistem yang
              transparan dan dapat dipertanggungjawabkan, sekaligus memperkuat circular
              economy dan mencegah kebocoran ke lingkungan.
            </p>
          </div>

          <!-- Card 2: gradient background -->
          <div class="about-card">
            <h3 class="about-card-title">Banyak program daur ulang berhenti di tahap pengumpulan.</h3>
            <p class="about-card-desc">
              RWR memastikan material benar-benar diproses dan dimanfaatkan kembali,
              bukan hilang atau bocor ke lingkungan.
            </p>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Tentang / About section
</script>

<style scoped>
/* Mobile vs Desktop Label Visibility */
.mobile-about-label-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 24px;
}

.desktop-about-label-wrap {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

@media (min-width: 1025px) {
  .mobile-about-label-wrap {
    display: none !important;
  }
}

@media (max-width: 1024px) {
  .desktop-about-label-wrap {
    display: none !important;
  }
}

/* Grid: row, 48px gap, fill width */
.about-grid {
  display: flex;
  flex-direction: row;
  gap: 48px;
  align-items: stretch;
  width: 100%;
}

/* Image container: 12px radius */
.about-img-wrap {
  flex: 1;
  min-width: 0;
  max-width: 520px;
  border-radius: 12px;
  overflow: hidden;
  align-self: stretch;
  min-height: 360px;
}
.about-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
}

/* Right content: 572px wide, col gap 24px */
.about-content {
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex: 0 0 572px;
  max-width: 572px;
}

/* Section label */
.about-label {
  font-family: 'Nunito', sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.2;
  color: #0A0A0A;
  margin: 0;
  letter-spacing: 0.02em;
}

/* Card: gradient bg, 14px radius, 24px 28px padding */
.about-card {
  background: linear-gradient(135deg, #17A2B8 0%, #22B78C 55%, #2AC769 100%);
  border-radius: 14px;
  padding: 24px 28px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
  justify-content: center;
}

/* Card title: Open Sans 18px-20px/700, white */
.about-card-title {
  font-family: 'Open Sans', sans-serif;
  font-size: 19px;
  font-weight: 700;
  line-height: 1.45;
  color: #ffffff;
  margin: 0;
}

/* Card desc: Open Sans 14px/400, white */
.about-card-desc {
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.94);
  margin: 0;
}

/* Responsive Mobile Layout */
@media (max-width: 1024px) {
  .about-grid {
    flex-direction: column;
    gap: 20px;
  }
  .about-img-wrap {
    max-width: 100%;
    width: 100%;
    flex: none;
    min-height: unset;
    height: 240px;
    border-radius: 14px;
  }
  .about-content {
    flex: none;
    max-width: 100%;
    width: 100%;
    gap: 16px;
  }
  .about-card {
    padding: 24px 20px;
    border-radius: 14px;
  }
  .about-card-title {
    font-size: 17px;
    line-height: 1.4;
  }
  .about-card-desc {
    font-size: 13.5px;
    line-height: 1.55;
  }
}

@media (max-width: 480px) {
  .about-img-wrap {
    height: 210px;
  }
}
</style>