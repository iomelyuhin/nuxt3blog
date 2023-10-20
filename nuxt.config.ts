// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  alias: {
    'images': './public/images',
  },
  image: {
    cloudinary: {
      baseURL: 'https://some-cdn',
    },
  },

  modules: ["@nuxt/image", "@nuxt/content"]
})