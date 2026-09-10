<template>
  <!-- SECTION - LAYANAN KAMI: bg white, padding 100px 140px 120px, col centered, gap 40px -->
  <section id="layanan" style="background:#ffffff;">
    <div
      class="figma-container"
      style="padding-top:100px; padding-bottom:120px; display:flex; flex-direction:column; align-items:center; gap:40px;"
    >

      <!-- ── Header: row space-between ── -->
      <div style="display:flex; flex-direction:row; justify-content:space-between; align-items:flex-end; gap:24px; width:100%;">
        <div style="display:flex; flex-direction:column; gap:24px;">
          <h2 class="section-title" style="text-align:left;">LAYANAN KAMI</h2>
          <span class="section-underline" style="margin-top:0;"></span>
        </div>
        <p class="svc-header-desc">Berikut beberapa layanan yang relevan terhadap kebutuhan Anda</p>
      </div>

      <!-- ── Service Cards: col, 32px gap ── -->
      <div style="display:flex; flex-direction:column; gap:32px; width:100%;">

        <!-- ═══ Card 1: Responsible Packaging Recovery ═══ -->
        <div class="svc-card">
          <!-- Left: Image -->
          <div class="svc-img-wrap">
            <img
              src="/images/services/svc1-photo.jpg"
              alt="Responsible Packaging Recovery"
              class="svc-img"
              loading="lazy"
            />
          </div>
          <!-- Right: Info -->
          <div class="svc-info">
            <!-- Description block -->
            <div class="svc-desc-block">
              <!-- Category: Open Sans 12px/600, #00A5BA -->
              <span class="svc-category">Material Traceability</span>
              <!-- Title: Asap 20px/600, #0A0A0A -->
              <h3 class="svc-title">Responsible Packaging Recovery</h3>
              <!-- Desc: Open Sans 14px/400, #414041 -->
              <p class="svc-desc">Membantu produsen memulihkan kemasan pascakonsumsi melalui pengumpulan dan daur ulang yang bertanggung jawab, dengan sistem tertelusur dan data kredibel untuk pelaporan keberlanjutan dan EPR.</p>
            </div>
            <!-- Clients block -->
            <div class="svc-clients-block">
              <!-- Header row: "Klien kami" + navigation arrows -->
              <div class="svc-clients-header">
                <span class="svc-clients-label">Klien kami</span>
                <div class="svc-nav-arrows">
                  <button class="svc-arrow-btn" @click="scrollLogos('svc1', -1)" aria-label="Previous">
                    <svg width="16" height="16" fill="none" stroke="#17A2B8" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/></svg>
                  </button>
                  <button class="svc-arrow-btn" @click="scrollLogos('svc1', 1)" aria-label="Next">
                    <svg width="16" height="16" fill="none" stroke="#17A2B8" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
                  </button>
                </div>
              </div>
              <!-- Logo row: scrollable, with fade shadow at right -->
              <div class="svc-logos-outer">
                <div class="svc-logos-row" ref="svc1">
                  <div class="svc-logo-box" v-for="client in card1Clients" :key="client.name">
                    <img :src="client.logo" :alt="client.name" class="svc-logo-img" />
                  </div>
                </div>
                <!-- Fade overlay at right edge -->
                <div class="svc-logos-fade"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- ═══ Card 2: Circular Sustainability Initiative ═══ -->
        <div class="svc-card">
          <div class="svc-img-wrap">
            <img
              src="/images/dsc9954.png"
              alt="Circular Sustainability Initiative"
              class="svc-img"
              loading="lazy"
            />
          </div>
          <div class="svc-info">
            <div class="svc-desc-block">
              <span class="svc-category">Community &amp; Ecosystem</span>
              <h3 class="svc-title">Circular Sustainability Initiative</h3>
              <p class="svc-desc">Membantu organisasi merancang dan menjalankan program ekonomi sirkular melalui kolaborasi, pelibatan masyarakat, dan penguatan kapasitas untuk mendorong perubahan perilaku dan sistem pengelolaan sampah.</p>
            </div>
            <div class="svc-clients-block">
              <div class="svc-clients-header">
                <span class="svc-clients-label">Klien kami</span>
                <div class="svc-nav-arrows">
                  <button class="svc-arrow-btn" @click="scrollLogos('svc2', -1)" aria-label="Previous">
                    <svg width="16" height="16" fill="none" stroke="#17A2B8" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/></svg>
                  </button>
                  <button class="svc-arrow-btn" @click="scrollLogos('svc2', 1)" aria-label="Next">
                    <svg width="16" height="16" fill="none" stroke="#17A2B8" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
                  </button>
                </div>
              </div>
              <div class="svc-logos-outer">
                <div class="svc-logos-row" ref="svc2">
                  <div class="svc-logo-box" v-for="client in card2Clients" :key="client.name">
                    <img :src="client.logo" :alt="client.name" class="svc-logo-img" />
                  </div>
                </div>
                <div class="svc-logos-fade"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- ═══ Card 3: Recycling Hub ═══ -->
        <div class="svc-card">
          <div class="svc-img-wrap">
            <img
              src="/images/img9835.png"
              alt="Recycling Hub"
              class="svc-img"
              loading="lazy"
            />
          </div>
          <div class="svc-info">
            <div class="svc-desc-block">
              <span class="svc-category">Collection &amp; Data Center</span>
              <h3 class="svc-title">Recycling Hub</h3>
              <p class="svc-desc">Menyediakan fasilitas penyetoran sampah terpilah dan program edukasi untuk meningkatkan pemilahan dari sumber, didukung sistem data kredibel untuk pelaporan keberlanjutan dan EPR.</p>
            </div>
            <div class="svc-clients-block">
              <div class="svc-clients-header">
                <span class="svc-clients-label">Klien kami</span>
                <div class="svc-nav-arrows">
                  <button class="svc-arrow-btn" @click="scrollLogos('svc3', -1)" aria-label="Previous">
                    <svg width="16" height="16" fill="none" stroke="#17A2B8" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/></svg>
                  </button>
                  <button class="svc-arrow-btn" @click="scrollLogos('svc3', 1)" aria-label="Next">
                    <svg width="16" height="16" fill="none" stroke="#17A2B8" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
                  </button>
                </div>
              </div>
              <div class="svc-logos-outer">
                <div class="svc-logos-row" ref="svc3">
                  <div class="svc-logo-box" v-for="client in card3Clients" :key="client.name">
                    <img :src="client.logo" :alt="client.name" class="svc-logo-img" />
                  </div>
                </div>
                <div class="svc-logos-fade"></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// ── Client data per card — verified from actual image files ──
// Card 1: Responsible Packaging Recovery
// client-0=rePurpose, client-1=CleanHub, client-2=Ogyre, client-3=Plastic-Offset, client-4=IPRO, client-5=KAO
const card1Clients = [
  { name: 'rePurpose',      logo: '/images/clients/client-0.png' },
  { name: 'CleanHub',       logo: '/images/clients/client-1.png' },
  { name: 'Ogyre',          logo: '/images/clients/client-2.png' },
  { name: 'Plastic-Offset', logo: '/images/clients/client-3.png' },
  { name: 'IPRO',           logo: '/images/clients/client-4.png' },
  { name: 'Tetra Pak',      logo: '/images/clients/tetra-pak.png' },
  { name: 'KAO',            logo: '/images/clients/client-5.png' },
  { name: 'Coca-Cola',      logo: '/images/clients/coca-cola.png' },
  { name: 'Avoskin',        logo: '/images/clients/avoskin.png' },
]

// Card 2: Circular Sustainability Initiative
const card2Clients = [
  { name: 'WWF',          logo: '/images/clients/client-8.png' },
  { name: 'DBS',          logo: '/images/clients/client-9.png' },
  { name: 'Unilever',     logo: '/images/clients/client-10.png' },
  { name: 'J Trust Bank', logo: '/images/clients/client-11.png' },
  { name: 'Lifebuoy',     logo: '/images/clients/lifebuoy.png' },
  { name: 'Sprite',       logo: '/images/clients/sprite.svg' },
]

// Card 3: Recycling Hub
const card3Clients = [
  { name: 'Nestlé',         logo: '/images/clients/client-14.png' },
  { name: 'MedcoEnergi',     logo: '/images/clients/client-13.png' },
]

// ── Scroll logos carousel ──
const svc1 = ref<HTMLElement | null>(null)
const svc2 = ref<HTMLElement | null>(null)
const svc3 = ref<HTMLElement | null>(null)

const scrollLogos = (ref: string, dir: number) => {
  const el = ref === 'svc1' ? svc1.value : ref === 'svc2' ? svc2.value : svc3.value
  if (el) el.scrollBy({ left: dir * 120, behavior: 'smooth' })
}
</script>

<style scoped>
/* ── Header description ── */
.svc-header-desc {
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  color: #616161;
  max-width: 300px;
  text-align: right;
  margin: 0;
  flex-shrink: 0;
}

/* ═══ Service Card ═══ */
/* row, 32px gap, border #E7E6E7 1px, 8px radius, 32px 40px padding */
.svc-card {
  display: flex;
  flex-direction: row;
  gap: 32px;
  padding: 32px 40px;
  border: 1px solid #E7E6E7;
  border-radius: 8px;
  background: #ffffff;
  align-items: flex-start;
  width: 100%;
  box-sizing: border-box;
}

/* ── Left image: fixed 300px wide, 220px tall, 8px radius ── */
.svc-img-wrap {
  width: 300px;
  height: 220px;
  flex-shrink: 0;
  border-radius: 8px;
  overflow: hidden;
}
.svc-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}
.svc-card:hover .svc-img { transform: scale(1.04); }

/* ── Right info: fill remaining, col, 24px gap ── */
.svc-info {
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex: 1;
  min-width: 0;
}

/* ── Description block: col, 16px gap ── */
.svc-desc-block {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

/* Category: Open Sans 12px/600, #00A5BA */
.svc-category {
  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.5;
  color: #00A5BA;
  text-transform: none;
}

/* Title: Asap 20px/600, #0A0A0A */
.svc-title {
  font-family: 'Asap', sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.2;
  color: #0A0A0A;
  margin: 0;
}

/* Description: Open Sans 14px/400, #414041 */
.svc-desc {
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  color: #414041;
  margin: 0;
}

/* ── Clients block: col, 8px gap ── */
.svc-clients-block {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

/* ── Clients header row: space-between, center align ── */
.svc-clients-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}

/* "Klien kami" label: Asap 14px/500, #404040 */
.svc-clients-label {
  font-family: 'Asap', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.2;
  color: #404040;
}

/* Navigation arrows: row, 12px gap */
.svc-nav-arrows {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
}

/* Arrow button: transparent, #17A2B8 icon */
.svc-arrow-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: none;
  background: transparent;
  cursor: pointer;
  color: #17A2B8;
  padding: 0;
  transition: background 0.15s;
}
.svc-arrow-btn:hover { background: #E3F4F6; }

/* ── Logo row wrapper: relative (for fade overlay) ── */
.svc-logos-outer {
  position: relative;
  overflow: hidden;
}

/* Logos row: row, 8px gap, scrollable horizontally, no scrollbar */
.svc-logos-row {
  display: flex;
  flex-direction: row;
  gap: 8px;
  overflow-x: auto;
  scroll-behavior: smooth;
  -ms-overflow-style: none;
  scrollbar-width: none;
  padding-bottom: 2px;
}
.svc-logos-row::-webkit-scrollbar { display: none; }

/* ── Each logo box: border 1px #E7E7E7, 4px radius, fixed size ── */
.svc-logo-box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 56px;
  border: 1px solid #E7E7E7;
  border-radius: 4px;
  flex-shrink: 0;
  background: #ffffff;
  padding: 8px;
  box-sizing: border-box;
}

/* Logo image: contain, full color */
.svc-logo-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: opacity 0.2s;
}

/* ── Fade overlay at right edge (matches Figma "Shadow" RECTANGLE) ── */
.svc-logos-fade {
  position: absolute;
  top: 0;
  right: 0;
  width: 80px;
  height: 100%;
  background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%);
  pointer-events: none;
}

/* ── Responsive ── */
@media (max-width: 1024px) {
  .svc-card { flex-direction: column; padding: 24px; }
  .svc-img-wrap { width: 100%; height: 220px; }
  .svc-header-desc { text-align: left; max-width: 100%; }
}
</style>
