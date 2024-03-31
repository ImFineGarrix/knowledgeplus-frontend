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
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: 'https://firebasestorage.googleapis.com/v0/b/knowledge-project-7e224.appspot.com/o/it.png?alt=media&token=9fc5261d-9cc2-48a4-bfe3-61d2c20433ad',
        },
      ],
    },
    baseURL: process.env.BASE_PATH || '',
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL,
      firebaseBaseUrl: process.env.FIREBASE_BASE_URL,
    },
  },
  modules: ['@pinia/nuxt'],
})
