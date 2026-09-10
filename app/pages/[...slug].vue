<template>
  <div>
    <Navbar />
    <main class="min-h-screen flex flex-col items-center justify-center bg-w4c-gray-light px-4 py-20">
      <div class="text-center max-w-md">
        <!-- Icon -->
        <div class="w-20 h-20 bg-w4c-green-pale rounded-full flex items-center justify-center mx-auto mb-6">
          <svg class="w-10 h-10 text-w4c-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
          </svg>
        </div>

        <span class="badge-green mb-4 inline-block">🚧 Under Development</span>
        <h1 class="text-2xl font-bold text-w4c-dark mb-3">Halaman Sedang Dikembangkan</h1>
        <p class="text-w4c-gray text-sm leading-relaxed mb-8">
          Halaman <strong>{{ slug }}</strong> sedang dalam tahap pengembangan. Tim kami sedang bekerja keras untuk menghadirkan pengalaman terbaik bagi Anda.
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
          <NuxtLink to="/" class="btn-primary text-sm">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
            </svg>
            Kembali ke Beranda
          </NuxtLink>
          <a href="mailto:info@waste4change.com" class="btn-secondary text-sm">
            Hubungi Kami
          </a>
        </div>
      </div>
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const slug = computed(() => {
  const s = route.params.slug
  return Array.isArray(s) ? s.join('/') : s || 'ini'
})

useSeoMeta({
  title: 'Halaman Dalam Pengembangan | Waste4Change',
  description: 'Halaman ini sedang dalam tahap pengembangan oleh tim Waste4Change.',
  robots: 'noindex',
})
</script>
