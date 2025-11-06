// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4
  },

  devtools: { enabled: true },

  app: {
    head: {
      title: 'Wadeh AI Automation Agency',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    }
  },

  css: ['~/assets/css/main.css'],

  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@nuxt/fonts',
    '@nuxt/icon',
  ],

  nitro: {
    preset: 'vercel',
  },

  compatibilityDate: '2025-01-06',
})