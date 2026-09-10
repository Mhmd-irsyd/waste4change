<template>
  <!-- SECTION - FAQ: bg #F5F5F5, padding 72px 0 (centered content), centered -->
  <section id="faq" style="background:#F5F5F5;">
    <div style="padding-top:72px; padding-bottom:72px; display:flex; flex-direction:column; align-items:center; gap:40px;">

      <!-- Section Title: Nunito 28px/700, centered -->
      <div style="display:flex; flex-direction:column; align-items:center; gap:24px;">
        <h2 class="section-title">F.A.Q</h2>
        <span class="section-underline section-underline-center"></span>
      </div>

      <!-- Accordion: 840px wide, col 2px gap -->
      <div class="faq-accordion">

        <div
          v-for="(faq, i) in faqs"
          :key="i"
          class="faq-item"
        >
          <!-- Question row -->
          <button
            class="faq-trigger"
            :aria-expanded="openFaq === i"
            :id="`faq-btn-${i}`"
            :aria-controls="`faq-panel-${i}`"
            @click="toggleFaq(i)"
          >
            <!-- Expand icon -->
            <span class="faq-icon" :class="{ 'faq-icon-open': openFaq === i }">
              <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
              </svg>
            </span>
            <!-- Question text: Open Sans 16px/600 -->
            <span class="faq-question" :class="{ 'faq-question-open': openFaq === i }">
              {{ faq.q }}
            </span>
          </button>

          <!-- Answer panel -->
          <Transition name="faq-panel">
            <div
              v-if="openFaq === i"
              :id="`faq-panel-${i}`"
              :aria-labelledby="`faq-btn-${i}`"
              role="region"
              class="faq-answer"
            >
              <p class="faq-answer-text">{{ faq.a }}</p>
            </div>
          </Transition>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const openFaq = ref<number | null>(0)
const toggleFaq = (i: number) => {
  openFaq.value = openFaq.value === i ? null : i
}

const faqs = [
  {
    q: 'Bagaimana cara Waste4Change mendaur ulang sampah secara bertanggung jawab?',
    a: 'Waste4Change mendaur ulang sampah melalui proses yang komprehensif: pengumpulan dari mitra terverifikasi, pemilahan menyeluruh, pengolahan menjadi material baru, dan dokumentasi seluruh proses secara transparan. Setiap ton sampah dilacak hingga ke destinasi akhir yang terverifikasi.',
  },
  {
    q: 'Apa itu layanan Responsible Waste Recycling?',
    a: 'Responsible Waste Recycling (RWR) adalah layanan pengelolaan sampah komprehensif dari Waste4Change yang mencakup pengambilan, pemilahan, pengolahan, dan pelaporan dampak lingkungan secara transparan. Kami memastikan setiap ton sampah Anda ditangani secara bertanggung jawab hingga destinasi akhir yang terverifikasi.',
  },
  {
    q: 'Apa saja jenis sampah yang dapat dikelola oleh layanan ini?',
    a: 'Kami mengelola berbagai jenis sampah termasuk plastik (PET, HDPE, PP, dll.), kertas dan karton, logam, kaca, e-waste, sampah organik, sampah B3 non-reaktif, dan banyak lagi. Tim kami akan melakukan asesmen jenis sampah Anda untuk memberikan solusi pengelolaan yang paling tepat.',
  },
  {
    q: 'Apakah Waste4Change memberikan laporan dampak lingkungan?',
    a: 'Ya, kami menyediakan laporan dampak lingkungan bulanan yang komprehensif mencakup volume dan jenis material yang dikelola, destinasi pengolahan akhir, kalkulasi CO₂ equivalent yang direduksi, volume air yang dihemat, dan data lain yang relevan untuk keperluan ESG reporting.',
  },
  {
    q: 'Bagaimana cara menggunakan layanan Responsible Waste Recycling?',
    a: 'Langkah pertama adalah menghubungi tim kami melalui formulir konsultasi atau WhatsApp. Kami akan melakukan asesmen kebutuhan, audit timbulan sampah, dan menyusun proposal layanan yang disesuaikan. Setelah kesepakatan, kami akan menjadwalkan pengambilan perdana dan memulai layanan secara regular.',
  },
  {
    q: 'Apakah Waste4Change sudah beroperasi di kota saya?',
    a: 'Saat ini kami beroperasi di Jabodetabek, Bandung, Surabaya, Bali, dan beberapa kota lainnya. Kami terus memperluas jangkauan layanan. Hubungi kami untuk mengecek ketersediaan layanan di kota Anda.',
  },
  {
    q: 'Berapa biaya layanan Responsible Waste Recycling?',
    a: 'Biaya layanan bervariasi tergantung pada jenis sampah, volume, frekuensi pengambilan, dan lokasi. Kami menawarkan model harga yang transparan tanpa biaya tersembunyi. Hubungi tim kami untuk mendapatkan penawaran yang disesuaikan dengan kebutuhan spesifik bisnis Anda.',
  },
]
</script>

<style scoped>
/* Accordion: 840px wide, col, 2px gap */
.faq-accordion {
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 840px;
  max-width: calc(100vw - 48px);
}

/* Individual item */
.faq-item {
  background: #ffffff;
  overflow: hidden;
}
.faq-item:first-child { border-radius: 8px 8px 0 0; }
.faq-item:last-child  { border-radius: 0 0 8px 8px; }

/* Question trigger: row, 16px gap, 28px 24px padding */
.faq-trigger {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  padding: 28px 24px 28px 28px;
  width: 100%;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  transition: background-color 0.2s;
}
.faq-trigger:hover { background: #F9FAFA; }

/* Expand icon: 8px box, rotating */
.faq-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background: #E3F4F6;
  color: #17A2B8;
  flex-shrink: 0;
  transition: transform 0.2s, background 0.2s;
}
.faq-icon-open {
  transform: rotate(180deg);
  background: #17A2B8;
  color: #ffffff;
}

/* Question text: Open Sans 16px/600, left-aligned */
.faq-question {
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  color: #404040;
  flex: 1;
  transition: color 0.2s;
}
.faq-question-open { color: #17A2B8; }

/* Answer panel: 28px padding */
.faq-answer {
  padding: 0 28px 28px 72px; /* indent to align with question text */
  border-top: 1px solid #F5F5F5;
}
.faq-answer-text {
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.7;
  color: #616161;
  margin: 16px 0 0;
}

/* Panel transition */
.faq-panel-enter-active,
.faq-panel-leave-active { transition: all 0.22s ease; overflow: hidden; }
.faq-panel-enter-from,
.faq-panel-leave-to { opacity: 0; max-height: 0; }
.faq-panel-enter-to,
.faq-panel-leave-from { opacity: 1; max-height: 300px; }


@media (max-width: 768px) {
  .faq-trigger { padding: 20px 16px; }
  .faq-question { font-size: 14px; }
  .faq-answer { padding: 0 16px 20px 16px; }
}
@media (max-width: 480px) {
  .faq-accordion { width: 100%; max-width: 100%; }
}
</style>
