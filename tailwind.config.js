/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      colors: {
        'w4c': {
          // Primary teal — Figma #17A2B8
          'teal':          '#17A2B8',
          'teal-dark':     '#1590A3',
          'teal-pale':     '#E3F4F6',
          // Text colors per Figma
          'dark':          '#0A0A0A',
          'text':          '#404040',
          'text-sub':      '#616161',
          'text-muted':    '#7A7A7A',
          // Backgrounds
          'bg-gray':       '#F5F5F5',
          'bg-faint':      '#FAFAFA',
          'bg-card':       '#F7F7F6',
          'bg-reco':       '#F6F6F6',
          // Green-ish (kept for logo use only)
          'green':         '#17A2B8',
          'green-light':   '#22B78C',
          'green-pale':    '#E3F4F6',
          // Legacy aliases
          'gray':          '#616161',
          'gray-light':    '#F5F5F5',
        },
      },
      fontFamily: {
        sans:   ['Open Sans', 'ui-sans-serif', 'system-ui'],
        nunito: ['Nunito', 'ui-sans-serif', 'system-ui'],
        asap:   ['Asap',   'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        'card':       '0 2px 12px 0 rgba(0,0,0,0.08)',
        'card-hover': '0 8px 30px 0 rgba(0,0,0,0.14)',
        'nav':        '0px 4px 16px 0px rgba(0,0,0,0.08)',
        'site-card':  '0px 12px 50px 0px rgba(0,0,0,0.05)',
      },
      maxWidth: {
        'figma': '1440px',
      },
      borderRadius: {
        'btn': '20px',
        'social': '28px',
      },
      backgroundImage: {
        'footer-gradient': 'radial-gradient(ellipse at 100% -20%, #9DD17C 0%, #17A2B8 100%)',
        'about-card': 'linear-gradient(90deg, #17A2B8 0%, #22B78C 55.86%, #2AC769 100%)',
        'cta-overlay': 'linear-gradient(135deg, rgba(23,162,184,0.4) 0%, rgba(55,145,146,0.9) 46%, rgba(36,217,142,1) 100%)',
      },
    },
  },
  plugins: [],
}
