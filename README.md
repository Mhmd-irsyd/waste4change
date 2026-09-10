# Waste4Change – Master Homepage 2026

Implementasi UI dari desain **Master Homepage 2026 (FINAL - RWR)** Waste4Change menggunakan **Nuxt 3** dan **Tailwind CSS**.

---

## 🚀 Cara Menjalankan Secara Lokal

### Prasyarat
- Node.js v18+ 
- npm v9+

### Langkah Instalasi

```bash
# Clone repository
git clone <url-repository>
cd waste4change-homepage

# Install dependencies
npm install

# Jalankan development server
npm run dev
```

Akses di browser: **http://localhost:3000**

### Build Production

```bash
npm run build
npm run preview
```

---

## 📁 Struktur Project

```
├── assets/
│   └── css/
│       └── main.css          # Global styles & Tailwind directives
├── components/
│   ├── Navbar.vue            # Sticky header dengan mobile drawer
│   ├── Hero.vue              # Hero section dengan breadcrumb & CTA
│   ├── Tentang.vue           # Section tentang layanan RWR
│   ├── CorePillars.vue       # 3 pilar utama (numbered cards)
│   ├── HowRwrWorks.vue       # 5 langkah proses RWR (alternating)
│   ├── LayananKami.vue       # 3 layanan utama dengan logo mitra
│   ├── SiteKami.vue          # 3 fasilitas RWF dengan statistik
│   ├── Manfaat.vue           # 6 kartu manfaat dengan ikon
│   ├── CTABanner.vue         # Banner CTA hijau "Mulai Dampakmu"
│   ├── Direkomendasikan.vue  # 6 rekomendasi industri
│   ├── FAQ.vue               # FAQ accordion interaktif
│   ├── BeritaTerbaru.vue     # 3 artikel terkait
│   └── AppFooter.vue         # Footer 4 kolom
├── pages/
│   ├── index.vue             # Halaman utama (merakit semua komponen)
│   └── [...slug].vue         # Halaman fallback "Under Development"
├── public/
│   └── images/
│       ├── hero-banner.png
│       ├── support-section.png
│       ├── site-card.png
│       └── partners/         # Logo mitra & klien
├── app.vue                   # Root aplikasi
├── nuxt.config.ts            # Konfigurasi Nuxt 3
└── tailwind.config.js        # Konfigurasi Tailwind CSS
```

---

## 🛠 Teknologi yang Digunakan

| Teknologi | Versi | Fungsi |
|---|---|---|
| **Nuxt 3** | ^3.x | Framework Vue SSR |
| **Vue 3** | ^3.x | UI Component Framework |
| **Tailwind CSS** | ^3.x | Utility-First CSS |
| **@nuxtjs/tailwindcss** | ^6.x | Integrasi Tailwind ke Nuxt |
| **TypeScript** | ^5.x | Type-safe development |

---

## ✨ Fitur Utama

- ✅ **Pixel-Perfect Design** – Implementasi presisi sesuai FINAL-RWR dari Figma
- ✅ **Fully Responsive** – Mobile (375px), Tablet (768px), Desktop (1280px+)
- ✅ **Sticky Navbar** – Transparansi shadow on scroll + Mobile Drawer dengan animasi
- ✅ **Toast Notification** – Handling halaman "Under Development" secara elegan
- ✅ **FAQ Accordion** – Animasi expand/collapse yang halus
- ✅ **Hover Interactions** – Semua kartu, tombol, dan link memiliki efek hover
- ✅ **SEO Optimized** – `useSeoMeta()`, semantic HTML, `alt` pada semua gambar
- ✅ **SSR (Server-Side Rendering)** – Performa loading awal cepat
- ✅ **Lazy Loading Images** – Optimasi performa asset gambar

---

## 🌐 Deployment

Dideploy menggunakan **Vercel** / **Netlify**.

Live URL: _[isi setelah deploy]_

---

## 👤 Author

Dibuat sebagai bagian dari **Maganghub Study Case: Fullstack Web Developer** – Waste4Change Assessment Task 2026.
