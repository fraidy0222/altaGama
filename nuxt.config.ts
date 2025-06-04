// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  ui: {
    fonts: false,
  },
  colorMode: {
    preference: "dark",
  },

  vite: {
    base: "/",
    build: {
      sourcemap: false,
    },
  },

  // Configuración de @nuxt/image (si lo usas)
  image: {
    dir: "public",
  },

  app: {
    head: {
      title: "Alta Gama S.R.L",
      charset: "utf-16",
      viewport: "width=device-width, initial-scale=1, maximum-scale=1",
      htmlAttrs: {
        lang: "es",
      },
    },
  },
  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/image",
    "@nuxt/ui",
    "@hypernym/nuxt-gsap",
  ],

  gsap: {
    composables: true,
    extraPlugins: {
      scrollTrigger: true,
    },
  },
});
