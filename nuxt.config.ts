// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  css: ['@/assets/css/main.css', '@/assets/css/font.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      titleTemplate: 'KNOWLEDGE+',
    },
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL,
      firebaseBaseUrl: process.env.FIREBASE_BASE_URL,
    },
  },
  modules: ['@pinia/nuxt'],
})
