// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  
  modules: [
    '@nuxtjs/tailwindcss',
  ],

  css: ['~/assets/css/main.css'],

  tailwindcss: {
    configPath: '~/tailwind.config.js',
  },

  app: {
    head: {
      title: 'Responsible Waste Recycling | Waste4Change',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Waste4Change adalah penyedia layanan pengelolaan sampah bertanggung jawab di Indonesia. Kami menghadirkan solusi Responsible Waste Recycling (RWR) untuk bisnis dan komunitas.',
        },
        { property: 'og:title', content: 'Responsible Waste Recycling | Waste4Change' },
        {
          property: 'og:description',
          content:
            'Solusi pengelolaan sampah bertanggung jawab untuk bisnis dan komunitas di Indonesia.',
        },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'shortcut icon', type: 'image/png', href: '/favicon.png' },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,400&family=Nunito:wght@400;600;700;800&family=Asap:wght@400;600;700&display=swap',
        },
      ],
    },
  },

  compatibilityDate: '2024-11-01',
})
