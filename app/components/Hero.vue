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
      <!-- Gradient overlay: desktop gradient (left white fade) vs mobile overlay (centered soft white veil) -->
      <div
        class="hidden lg:block absolute inset-0"
        style="background: linear-gradient(to right, #ffffff 0%, #ffffff 30%, rgba(255,255,255,0.88) 50%, rgba(246,242,242,0.6) 75%, transparent 100%);"
      ></div>
      <div
        class="lg:hidden absolute inset-0"
        style="background: linear-gradient(180deg, rgba(255,255,255,0.86) 0%, rgba(255,255,255,0.92) 50%, rgba(245,245,245,0.88) 100%);"
      ></div>
    </div>

    <!-- Foreground Content -->
    <div class="relative z-10 figma-container py-10 lg:py-14 min-h-[480px] lg:min-h-[480px] flex items-center lg:items-end justify-center lg:justify-start">
      
      <!-- Desktop & Mobile layout wrapper -->
      <div class="w-full max-w-[560px] flex flex-col items-center lg:items-start text-center lg:text-left">

        <!-- Breadcrumb (Desktop only) -->
        <nav class="hidden lg:flex items-center flex-wrap gap-1 mb-5" style="font-family:'Open Sans',sans-serif; font-size:14px; line-height:1;" aria-label="Breadcrumb">
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

        <!-- Title -->
        <h1 class="hero-title mb-4 lg:mb-5">
          Responsible Waste<br class="block lg:hidden" /> Recycling
        </h1>

        <!-- Description -->
        <p class="hero-desc mb-7 lg:mb-8">
          Kami berkomitmen untuk menjadi pemimpin dalam transformasi sampah
          menjadi sumber daya bernilai secara bertanggung jawab, guna mewujudkan
          ekonomi sirkular yang berkelanjutan di Indonesia
        </p>

        <!-- CTA Buttons -->
        <div class="hero-cta-container">
          <button class="hero-btn-primary" @click="$emit('dukung')">
            DUKUNG TUJUAN KAMI
          </button>
          <button class="hero-btn-outline" @click="$emit('download')">
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
/* Breadcrumb links */
.breadcrumb-link {
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #1C9DBD;
  text-decoration: none;
  transition: opacity 0.15s;
}
.breadcrumb-link:hover { opacity: 0.8; text-decoration: underline; }

/* Hero title */
.hero-title {
  font-family: 'Asap', sans-serif;
  font-size: 40px;
  font-weight: 700;
  line-height: 1.2;
  color: #2C2C2C;
  margin: 0;
}

/* Hero description */
.hero-desc {
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.8;
  color: #404040;
  max-width: 480px;
  margin: 0;
}

/* CTA Buttons Container */
.hero-cta-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  width: auto;
}

/* Primary Button */
.hero-btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 28px;
  height: 44px;
  background-color: #17A2B8;
  color: #ffffff;
  font-family: 'Open Sans', sans-serif;
  font-size: 13px;
  font-weight: 700;
  line-height: 1;
  border-radius: 9999px;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  letter-spacing: 0.04em;
  transition: background-color 0.2s, transform 0.15s;
}
.hero-btn-primary:hover { background-color: #1590A3; transform: translateY(-1px); }

/* Outline Button */
.hero-btn-outline {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 28px;
  height: 44px;
  background-color: transparent;
  color: #17A2B8;
  font-family: 'Open Sans', sans-serif;
  font-size: 13px;
  font-weight: 700;
  line-height: 1;
  border-radius: 9999px;
  border: 1.5px solid #17A2B8;
  cursor: pointer;
  white-space: nowrap;
  letter-spacing: 0.04em;
  transition: background-color 0.2s, color 0.2s, transform 0.15s;
}
.hero-btn-outline:hover { background-color: #17A2B8; color: #ffffff; transform: translateY(-1px); }

/* Responsive Mobile overrides */
@media (max-width: 1024px) {
  .hero-title {
    font-size: 32px;
    text-align: center;
  }
  .hero-desc {
    font-size: 14px;
    line-height: 1.65;
    text-align: center;
    max-width: 380px;
  }
  .hero-cta-container {
    flex-direction: column;
    width: 100%;
    max-width: 320px;
    gap: 12px;
  }
  .hero-btn-primary, .hero-btn-outline {
    width: 100%;
    height: 44px;
    border-radius: 9999px;
    text-align: center;
  }
  .hero-btn-outline {
    background-color: rgba(255, 255, 255, 0.55);
  }
}

@media (max-width: 640px) {
  .hero-title {
    font-size: 28px;
    line-height: 1.25;
  }
  .hero-desc {
    font-size: 13px;
    line-height: 1.65;
    margin-bottom: 28px;
  }
}
</style>