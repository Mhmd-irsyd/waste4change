<template>
  <div>
    <Navbar />
    <main class="pt-[112px]">
      <Hero @dukung="handleDukung" @download="handleDownload" />
      <Tentang />
      <CorePillars />
      <HowRwrWorks />
      <LayananKami @detail="handleDetail" />
      <SiteKami />
      <Manfaat />
      <Direkomendasikan />
      <FAQ />
      <Sebarkan />
    </main>
    <AppFooter @nav="handleNav" />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Responsible Waste Recycling | Waste4Change',
  description:
    'Layanan Responsible Waste Recycling (RWR) dari Waste4Change – solusi pengelolaan sampah bertanggung jawab untuk bisnis dan industri di Indonesia. Transparan, terukur, dan berdampak nyata.',
  ogTitle: 'Responsible Waste Recycling | Waste4Change',
  ogDescription:
    'Solusi pengelolaan sampah bertanggung jawab untuk bisnis Anda. Dari pengambilan, pemilahan, hingga pelaporan dampak lingkungan.',
  ogType: 'website',
  twitterCard: 'summary_large_image',
})

const handleDukung  = () => console.log('Dukung tujuan kami clicked')
const handleDownload = () => console.log('Download portfolio clicked')
const handleDetail  = (title: string) => console.log('Detail requested for:', title)
const handleNav     = (page: string) => console.log('Footer nav:', page)
</script>
