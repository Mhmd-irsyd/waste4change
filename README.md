# Waste4Change — Master Homepage 2026

Implementasi UI dari desain **Master Homepage 2026 (FINAL - RWR)** Waste4Change menggunakan **Nuxt 3** dan **Tailwind CSS**.

---

## 🌐 Live Website & Demo

Website telah berhasil di-deploy dan dapat diakses publik di:
👉 **[https://waste4change.vercel.app/](https://waste4change.vercel.app/)**

---

## 🚀 Cara Menjalankan Secara Lokal

### Prasyarat
- Node.js v18+ 
- npm v9+

### Langkah Instalasi

```bash
# Clone repository
git clone https://github.com/Mhmd-irsyd/waste4change.git
cd waste4change

# Install dependencies
npm install

# Jalankan development server
npm run dev
```

Akses aplikasi di browser: **`http://localhost:3000`**

### Build Production

```bash
# Build aplikasi untuk produksi
npm run build

# Preview build lokal
npm run preview
```

---

## 📁 Struktur Project

```
├── app/
│   ├── components/
│   │   ├── Navbar.vue            # Sticky header & mobile drawer
│   │   ├── Hero.vue              # Hero section dengan backdrop veil & CTA
│   │   ├── Tentang.vue           # Section tentang layanan RWR (stacked mobile cards)
│   │   ├── CorePillars.vue       # 3 pilar utama (watermark numbers & icon boxes)
│   │   ├── HowRwrWorks.vue       # 5 langkah proses RWR (vertical mobile timeline)
│   │   ├── LayananKami.vue       # 3 layanan utama dengan 2-column logo grid
│   │   ├── SiteKami.vue          # Carousel interaktif 3 fasilitas RWF
│   │   ├── Manfaat.vue           # Carousel manfaat & CTA banner
│   │   ├── Direkomendasikan.vue  # 6 rekomendasi industri
│   │   ├── FAQ.vue               # Accordion FAQ interaktif
│   │   ├── Sebarkan.vue        # Social sharing section
│   │   └── AppFooter.vue         # Responsive footer & dropdown
│   └── pages/
│       ├── index.vue             # Halaman utama (merakit semua komponen)
│       └── [...slug].vue         # Fallback page
├── assets/
│   └── css/
│       └── main.css              # Global styles & Tailwind directives
├── public/
│   └── images/                   # Asset gambar & logo mitra
├── app.vue                       # Root aplikasi Vue
├── nuxt.config.ts                # Konfigurasi Nuxt 3 (SEO & modules)
├── tailwind.config.js            # Design tokens & tema warna Tailwind CSS
└── package.json                  # Dependencies & npm scripts
```

---

## 🛠️ Teknologi yang Digunakan

| Teknologi | Versi | Fungsi |
|---|---|---|
| **Nuxt 3** | ^3.x | Framework Fullstack Vue SSR |
| **Vue 3** | ^3.x | UI Component Framework |
| **Tailwind CSS** | ^3.x | Utility-First CSS & Design System |
| **@nuxtjs/tailwindcss** | ^6.x | Integrasi Tailwind ke Nuxt |
| **TypeScript** | ^5.x | Static Typing & Maintenance |

---

## ✨ Fitur & Keunggulan

- 🎯 **Pixel-Perfect & Responsive** — Presisi 100% sesuai Figma (Desktop, Tablet, dan Mobile).
- 🎠 **Interactive Carousels** — Site Kami & Manfaat section menggunakan carousel fungsional (Prev/Next arrows, dot indicators, touch swipe).
- 📱 **Mobile Drawer & Accordion** — Mobile Navbar drawer & FAQ expand/collapse dengan animasi halus.
- 🖼️ **2-Column Mobile Logo Grid** — Susunan logo mitra 2 kolom terpusat di mobile view.
- ⚡ **SEO & Performance** — `useSeoMeta()`, HTML5 semantic markup, `alt` atribut gambar, serta lazy loading.

---

## ☁️ Deployment

- **Platform**: Vercel (Auto Deployment via GitHub `main` branch)
- **Live URL**: [https://waste4change.vercel.app/](https://waste4change.vercel.app/)

---

## 👤 Author

Dibuat sebagai bagian dari **Assessment Task — Fullstack Web Developer (Waste4Change Homepage 2026)**.
