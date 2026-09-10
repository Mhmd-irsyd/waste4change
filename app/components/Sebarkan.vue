<template>
  <!-- SECTION - SEBARKAN BERITA BAIK INI: white bg, padding 64px 140px, space-between row -->
  <section id="sebarkan" class="sebarkan-section">
    <div class="figma-container">
      <div class="sebarkan-layout">

        <!-- Left: Title + Description -->
        <div class="sebarkan-text">
          <h2 class="sebarkan-title">Sebarkan Berita Baik Ini</h2>
          <p class="sebarkan-desc">
            Bagikan kami di media sosial Anda dan ciptakan dampak yang positif di lingkungan sekitar
          </p>
        </div>

        <!-- Right: 5 Social Buttons (Twitter, Facebook, LinkedIn, WhatsApp, Link) -->
        <div class="sebarkan-buttons">

          <!-- 1: Twitter / X -->
          <button class="btn-social" aria-label="Share on Twitter" @click="share('twitter')">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.737-8.835L1.254 2.25H8.08l4.259 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </button>

          <!-- 2: Facebook -->
          <button class="btn-social" aria-label="Share on Facebook" @click="share('facebook')">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </button>

          <!-- 3: LinkedIn -->
          <button class="btn-social" aria-label="Share on LinkedIn" @click="share('linkedin')">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </button>

          <!-- 4: WhatsApp -->
          <button class="btn-social" aria-label="Share on WhatsApp" @click="share('whatsapp')">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </button>

          <!-- 5: Copy Link Icon -->
          <button class="btn-social" aria-label="Copy Link" @click="copyLink">
            <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
            </svg>
          </button>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const share = (platform: string) => {
  const url = encodeURIComponent(window.location.href)
  const text = encodeURIComponent('Waste4Change - Responsible Waste Recycling')
  const shareUrls: Record<string, string> = {
    twitter:  `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
    whatsapp: `https://wa.me/?text=${text}%20${url}`,
  }
  if (shareUrls[platform]) {
    window.open(shareUrls[platform], '_blank', 'width=600,height=450')
  }
}

const copyLink = () => {
  navigator.clipboard.writeText(window.location.href).then(() => {
    alert('Link berhasil disalin!')
  })
}
</script>

<style scoped>
.sebarkan-section {
  background: #FFFFFF;
}

.sebarkan-layout {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  padding-top: 56px;
  padding-bottom: 56px;
}

/* Left text */
.sebarkan-text {
  display: flex;
  flex-direction: column;
  gap: 6px;
  max-width: 600px;
}

.sebarkan-title {
  font-family: 'Asap', sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: #17A2B8;
  margin: 0;
  line-height: 1.3;
}

.sebarkan-desc {
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  color: #7A7A7A;
  margin: 0;
}

/* Right buttons */
.sebarkan-buttons {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
}

.btn-social {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid #17A2B8;
  background: #FFFFFF;
  color: #17A2B8;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.25s ease;
  outline: none;
  padding: 0;
}

.btn-social:hover {
  background: #17A2B8;
  color: #FFFFFF;
  transform: translateY(-2px);
  box-shadow: 0px 4px 14px rgba(23, 162, 184, 0.25);
}

@media (max-width: 768px) {
  .sebarkan-layout {
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    padding-top: 40px;
    padding-bottom: 40px;
  }
  .sebarkan-buttons {
    flex-wrap: wrap;
    gap: 12px;
  }
}
</style>e>
