<template>
  <section id="hero" class="relative bg-white overflow-hidden">
    <!-- Background image fills full section -->
    <div class="absolute inset-0 pointer-events-none">
      <img
        src="/images/hero-forklift.png"
        alt="Forklift operator at Waste4Change Responsible Waste Facility"
        class="w-full h-full object-cover object-center"
        loading="eager"
      />
      <!-- Gradient overlay: white from left, fades right (matches Figma's header image gradient) -->
      <div
        class="absolute inset-0"
        style="background: linear-gradient(to right, #ffffff 0%, #ffffff 30%, rgba(255,255,255,0.88) 50%, rgba(246,242,242,0.6) 75%, transparent 100%);"
      ></div>
    </div>

    <!-- Foreground Content — absolute positioned bottom-left like Figma -->
    <div class="relative z-10 figma-container py-14" style="min-height: 480px; display:flex; align-items:flex-end; padding-top:64px; padding-bottom:64px;">
      <div style="max-width:560px;">

        <!-- Breadcrumb -->
        <nav class="flex items-center flex-wrap gap-1 mb-5" style="font-family:'Open Sans',sans-serif; font-size:14px; line-height:1;" aria-label="Breadcrumb">
          <a href="#" class="breadcrumb-link">Beranda</a>
          <svg class="w-3.5 h-3.5 flex-shrink-0" style="color:#616161;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
          <a href="#" class="breadcrumb-link">Semua Layanan</a>
          <svg class="w-3.5 h-3.5 flex-shrink-0" style="color:#616161;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
          <span style="color:#404040;">Responsible Waste Recycling</span>
        </nav>

        <!-- Title: Asap 40px/600, #404040 -->
        <h1 class="hero-title mb-5">Responsible Waste Recycling</h1>

        <!-- Description: Open Sans 16px/400, line-height 2em -->
        <p class="hero-desc mb-8">
          Kami berkomitmen untuk menjadi pemimpin dalam transformasi sampah
          menjadi sumber daya bernilai secara bertanggung jawab, guna mewujudkan
          ekonomi sirkular yang berkelanjutan di Indonesia
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row items-stretch sm:items-start gap-4 w-full sm:w-auto">
          <button class="btn-primary" @click="$emit('dukung')">
            DUKUNG TUJUAN KAMI
          </button>
          <button class="btn-outline" @click="$emit('download')">
            DOWNLOAD PORTFOLIO
          </button>
        </div>

      </div>
    </div>

  </section>
</template>

<script setup lang="ts">
defineEmits(['dukung', 'download'])
</script>

<style scoped>
/* Breadcrumb links: #1C9DBD (Figma fill_hgoei6i) */
.breadcrumb-link {
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #1C9DBD;
  text-decoration: none;
  transition: opacity 0.15s;
}
.breadcrumb-link:hover { opacity: 0.8; text-decoration: underline; }

/* Hero title: Asap 40px weight 600, line-height 1.2 */
.hero-title {
  font-family: 'Asap', sans-serif;
  font-size: 40px;
  font-weight: 600;
  line-height: 1.2;
  color: #404040;
  margin: 0;
}

/* Hero description: Open Sans 16px/400, line-height 2 */
.hero-desc {
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 2;
  color: #404040;
  max-width: 480px;
  margin: 0;
}

@media (max-width: 768px) {
  .hero-title { font-size: 28px; }
  .hero-desc  { font-size: 14px; line-height: 1.7; }
}

@media (max-width: 640px) {
  .hero-title { font-size: 24px; }
  .hero-desc  { font-size: 13px; line-height: 1.6; }
}
</style>
