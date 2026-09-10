<template>
  <!-- SECTION - ABOUT: bg #FAFAFA, padding 64px 140px, gap 56px, centered -->
  <section id="tentang" style="background:#FAFAFA;">
    <div class="figma-container" style="padding-top:64px; padding-bottom:64px;">
      <div class="about-grid">

        <!-- ── Left: Photo — border-radius 8px ── -->
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

        <!-- ── Right: Content ── -->
        <div class="about-content">

          <!-- Section label: Nunito 20px bold, #0A0A0A -->
          <div class="about-label-wrap">
            <h2 class="about-label">TENTANG</h2>
            <span class="section-underline"></span>
          </div>

          <!-- Card 1: gradient #17A2B8 → #22B78C → #2AC769, 8px radius, 20px 28px padding -->
          <div class="about-card">
            <h3 class="about-card-title">Bangun Ekosistem Daur Ulang yang Bertanggung Jawab</h3>
            <p class="about-card-desc">
              Layanan daur ulang yang memastikan material dikelola melalui sistem yang
              transparan dan dapat dipertanggungjawabkan, sekaligus memperkuat circular
              economy dan mencegah kebocoran ke lingkungan.
            </p>
          </div>

          <!-- Card 2: same gradient -->
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
/* Grid: row, 48px gap, fill width, stretch so both cols match height */
.about-grid {
  display: flex;
  flex-direction: row;
  gap: 48px;
  align-items: stretch;
  width: 100%;
}

/* Image container: 8px radius, fills full height of the row */
.about-img-wrap {
  flex: 1;
  min-width: 0;
  max-width: 520px;
  border-radius: 8px;
  overflow: hidden;
  /* stretch vertically to match the content column height */
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

/* Right content: 572px wide, col gap 24px, cards fill available space */
.about-content {
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex: 0 0 572px;
  max-width: 572px;
}

/* Cards grow equally to fill the remaining height below the label */
.about-card {
  flex: 1;
}

/* Section label: Nunito 20px/700, color #0A0A0A */
.about-label-wrap {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.about-label {
  font-family: 'Nunito', sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.2;
  color: #0A0A0A;
  margin: 0;
}

/* Card: gradient bg, 8px radius, 20px 28px padding, flex:1 set in content block above */
.about-card {
  background: linear-gradient(90deg, #17A2B8 0%, #22B78C 55.86%, #2AC769 100%);
  border-radius: 8px;
  padding: 20px 28px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  /* flex:1 makes both cards share remaining height equally */
  justify-content: center;
}

/* Card title: Open Sans 20px/700, white, line-height 1.5 */
.about-card-title {
  font-family: 'Open Sans', sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.5;
  color: #ffffff;
  margin: 0;
}

/* Card desc: Open Sans 14px/400, white, line-height 1.5 */
.about-card-desc {
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  color: #ffffff;
  margin: 0;
}

/* ── Responsive ── */
@media (max-width: 1024px) {
  .about-grid       { flex-direction: column; }
  .about-img-wrap   { max-width: 100%; flex: none; min-height: 260px; }
  .about-content    { flex: none; max-width: 100%; }
}
</style>
