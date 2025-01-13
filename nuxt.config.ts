// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui-pro'],
  future: {
    compatibilityVersion: 4
  },
  compatibilityDate: '2024-04-03',
  devtools: {
    enabled: true
  },
  vite: {
    optimizeDeps: {
      include: ['color']
    }
  },
  css: ['~/assets/css/index.css']
})
