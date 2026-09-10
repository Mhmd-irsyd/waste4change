<template>
  <footer class="footer-root">

    <div class="footer-main">
      <div class="figma-container">

        <!-- ================= DESKTOP LAYOUT (Hidden on Mobile) ================= -->
        <div class="footer-content desktop-only">
          
          <!-- Column 1: Waste4Change Links -->
          <div class="footer-col">
            <h3 class="footer-col-label">WASTE4CHANGE</h3>
            <ul class="footer-links-list">
              <li><a href="#" class="footer-link">Semua Layanan</a></li>
              <li><a href="#" class="footer-link">Produk</a></li>
              <li><a href="#" class="footer-link">Tentang Kami</a></li>
              <li><a href="#" class="footer-link">Riset</a></li>
              <li><a href="#" class="footer-link">Blog</a></li>
              <li><a href="#" class="footer-link">Media</a></li>
              <li><a href="#" class="footer-link">Portfolio</a></li>
            </ul>
          </div>

          <!-- Column 2: Perusahaan Links -->
          <div class="footer-col">
            <h3 class="footer-col-label">PERUSAHAAN</h3>
            <ul class="footer-links-list">
              <li><a href="#" class="footer-link">Laut Yang Tenang</a></li>
              <li><a href="#" class="footer-link">Full-time</a></li>
              <li><a href="#" class="footer-link">Internship</a></li>
              <li><a href="#" class="footer-link">Kontak</a></li>
            </ul>
          </div>

          <!-- Column 3: Contact Info & Socials -->
          <div class="footer-col footer-contact-col">
            <h3 class="footer-col-label">HUBUNGI KAMI</h3>
            <div class="footer-contact-info">
              
              <div class="contact-item align-top">
                <svg class="contact-icon" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <div class="contact-text">
                  <p class="contact-name">Kantor Waste4Change, Vida Bumipala</p>
                  <p class="contact-address">Jl. Alun Alun Utara, RT.002/RW.001, Padurenan, Mustika Jaya, Kota Bekasi, Jawa Barat 17156</p>
                </div>
              </div>

              <div class="contact-item">
                <svg class="contact-icon" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <a href="tel:02129372308" class="contact-link">(021) 29372308</a>
              </div>

              <div class="contact-item">
                <svg class="contact-icon" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <a href="mailto:contact@waste4change.com" class="contact-link">contact@waste4change.com</a>
              </div>

            </div>

            <!-- Socials -->
            <div class="footer-socials">
              <a href="https://instagram.com/waste4change" target="_blank" aria-label="Instagram" class="social-circle">
                <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://facebook.com/waste4change" target="_blank" aria-label="Facebook" class="social-circle">
                <svg width="18" height="18" fill="white" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://twitter.com/waste4change" target="_blank" aria-label="Twitter" class="social-circle">
                <svg width="18" height="18" fill="white" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/company/waste4change" target="_blank" aria-label="LinkedIn" class="social-circle">
                <svg width="18" height="18" fill="white" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://youtube.com/@Waste4ChangeID" target="_blank" aria-label="YouTube" class="social-circle">
                <svg width="18" height="18" fill="white" viewBox="0 0 24 24">
                  <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>


        <!-- ================= MOBILE LAYOUT (Exact 100% Match with Screenshot) ================= -->
        <div class="footer-mobile mobile-only">
          
          <!-- Block 1: WASTE4CHANGE -->
          <div class="mobile-section">
            <h3 class="mobile-section-title">WASTE4CHANGE</h3>
            <ul class="mobile-links-list">
              <li><a href="#" class="mobile-link">Semua Layanan</a></li>
              <li><a href="#" class="mobile-link">Produk</a></li>
              <li><a href="#" class="mobile-link">Tentang Kami</a></li>
              <li><a href="#" class="mobile-link">Riset</a></li>
              <li><a href="#" class="mobile-link">Blog</a></li>
              <li><a href="#" class="mobile-link">Media</a></li>
              <li><a href="#" class="mobile-link">Portfolio</a></li>
              <li><a href="#" class="mobile-link">Laut Yang Tenang</a></li>
              <li><a href="#" class="mobile-link">Full-time</a></li>
              <li><a href="#" class="mobile-link">Internship</a></li>
              <li><a href="#" class="mobile-link">Kontak</a></li>
            </ul>
          </div>

          <!-- Block 2: PERUSAHAAN (Dropdown Header) -->
          <div class="mobile-section">
            <button class="mobile-dropdown-btn" @click="togglePerusahaan">
              <span>PERUSAHAAN</span>
              <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" :class="{ rotate: isPerusahaanOpen }">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            <ul v-if="isPerusahaanOpen" class="mobile-links-list dropdown-list">
              <li><a href="#" class="mobile-link">Tentang Waste4Change</a></li>
              <li><a href="#" class="mobile-link">Karir & Internship</a></li>
              <li><a href="#" class="mobile-link">Mitra & Klien</a></li>
            </ul>
          </div>

          <!-- Block 3: HUBUNGI KAMI -->
          <div class="mobile-section">
            <h3 class="mobile-section-title">HUBUNGI KAMI</h3>
            <div class="mobile-contact-block">
              <p class="mobile-contact-text">
                Kantor Waste4Change, Vida Bumipala<br>
                Jl. Alun Alun Utara, RT.002/RW.001, Padurenan,<br>
                Mustika Jaya, Kota Bekasi, Jawa Barat 17156
              </p>
              <p class="mobile-contact-text">
                <a href="tel:02129372308" class="mobile-contact-link">(021) 29372308</a>
              </p>
              <p class="mobile-contact-text">
                <a href="mailto:contact@waste4change.com" class="mobile-contact-link">contact@waste4change.com</a>
              </p>
            </div>
          </div>

          <!-- Block 4: Social Icons -->
          <div class="mobile-socials">
            <a href="https://instagram.com/waste4change" target="_blank" aria-label="Instagram" class="social-circle">
              <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="https://facebook.com/waste4change" target="_blank" aria-label="Facebook" class="social-circle">
              <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://twitter.com/waste4change" target="_blank" aria-label="Twitter" class="social-circle">
              <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="https://linkedin.com/company/waste4change" target="_blank" aria-label="LinkedIn" class="social-circle">
              <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://youtube.com/@Waste4ChangeID" target="_blank" aria-label="YouTube" class="social-circle">
              <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
                <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
              </svg>
            </a>
          </div>

        </div>

      </div>
    </div>

    <!-- Bottom Copyright & Language Bar -->
    <div class="footer-bottom">
      <div class="figma-container bottom-container">
        <p class="copyright-text">2022 - All Rights Reserved Waste4Change</p>

        <div class="lang-selector">
          <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10"/>
            <path stroke-linecap="round" stroke-linejoin="round" d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
          </svg>
          <span>ID / EN</span>
        </div>
      </div>
    </div>

  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isPerusahaanOpen = ref(false)
const togglePerusahaan = () => {
  isPerusahaanOpen.value = !isPerusahaanOpen.value
}
</script>

<style scoped>
.footer-root {
  width: 100%;
  background: linear-gradient(135deg, #0093A4 0%, #17A2B8 45%, #22B78C 100%);
  color: #FFFFFF;
}

.footer-main {
  width: 100%;
}

/* ================= DESKTOP STYLES ================= */
.desktop-only {
  display: flex;
}

.mobile-only {
  display: none;
}

.footer-content {
  flex-direction: row;
  justify-content: space-between;
  gap: 40px;
  padding-top: 72px;
  padding-bottom: 72px;
}

.footer-col {
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;
}

.footer-contact-col {
  flex: 2;
}

.footer-col-label {
  font-family: 'Open Sans', sans-serif;
  font-size: 15px;
  font-weight: 700;
  color: #FFFFFF;
  letter-spacing: 0.05em;
  margin: 0;
  text-transform: uppercase;
}

.footer-links-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer-link {
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  transition: opacity 0.2s;
}

.footer-link:hover {
  color: #FFFFFF;
  text-decoration: underline;
}

.footer-contact-info {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 10px;
  color: rgba(255, 255, 255, 0.9);
}

.align-top {
  align-items: flex-start;
}

.contact-icon {
  flex-shrink: 0;
  margin-top: 2px;
  color: #FFFFFF;
}

.contact-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.contact-name {
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #FFFFFF;
  margin: 0;
}

.contact-address {
  font-family: 'Open Sans', sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.85);
  margin: 0;
}

.contact-link {
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
}

.contact-link:hover {
  color: #FFFFFF;
  text-decoration: underline;
}

.footer-socials {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  margin-top: 10px;
}

.social-circle {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  text-decoration: none;
  backdrop-filter: blur(4px);
  transition: all 0.25s ease;
}

.social-circle:hover {
  background: rgba(255, 255, 255, 0.45);
  transform: translateY(-2px);
}

/* ================= MOBILE STYLES (Exact Match) ================= */
@media (max-width: 768px) {
  .desktop-only {
    display: none !important;
  }

  .mobile-only {
    display: flex !important;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 36px;
    padding-top: 56px;
    padding-bottom: 56px;
  }

  .mobile-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 16px;
    width: 100%;
  }

  .mobile-section-title {
    font-family: 'Open Sans', sans-serif;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 0.08em;
    color: #FFFFFF;
    margin: 0;
    text-transform: uppercase;
    text-align: center;
  }

  .mobile-links-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;
    width: 100%;
  }

  .mobile-link {
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.9);
    text-decoration: none;
    text-align: center;
    transition: opacity 0.2s;
  }

  .mobile-link:hover {
    color: #FFFFFF;
  }

  /* Dropdown Button for PERUSAHAAN */
  .mobile-dropdown-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background: transparent;
    border: none;
    color: #FFFFFF;
    font-family: 'Open Sans', sans-serif;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 0.08em;
    cursor: pointer;
    text-transform: uppercase;
    padding: 0;
  }

  .mobile-dropdown-btn svg {
    transition: transform 0.3s ease;
  }

  .mobile-dropdown-btn svg.rotate {
    transform: rotate(180deg);
  }

  .dropdown-list {
    margin-top: 8px;
  }

  /* Mobile Contact Block */
  .mobile-contact-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    width: 100%;
    max-width: 320px;
  }

  .mobile-contact-text {
    font-family: 'Open Sans', sans-serif;
    font-size: 13px;
    font-weight: 400;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.9);
    margin: 0;
    text-align: center;
  }

  .mobile-contact-link {
    color: rgba(255, 255, 255, 0.95);
    text-decoration: none;
  }

  .mobile-contact-link:hover {
    text-decoration: underline;
  }

  /* Mobile Social Circles */
  .mobile-socials {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 16px;
    width: 100%;
    margin-top: 8px;
  }

  .mobile-socials .social-circle {
    width: 48px;
    height: 48px;
    background: rgba(255, 255, 255, 0.3);
  }
}

/* ================= BOTTOM COPYRIGHT BAR ================= */
.footer-bottom {
  background: rgba(0, 0, 0, 0.18);
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  color: #FFFFFF;
}

.bottom-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
}

.copyright-text {
  font-family: 'Open Sans', sans-serif;
  font-size: 13px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
}

.lang-selector {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Open Sans', sans-serif;
  font-size: 13px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.95);
  cursor: pointer;
}

@media (max-width: 768px) {
  .bottom-container {
    flex-direction: column;
    gap: 12px;
    text-align: center;
    justify-content: center;
    padding-top: 24px;
    padding-bottom: 24px;
  }
}
</style>
