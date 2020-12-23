export default {
  target: 'static',
  head: {
    title: 'storyblok-articles',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: [],
  plugins: ['~/plugins/composition-api.js', '~/plugins/rich-text-renderer.js'],
  components: true,
  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss'],
  modules: [
    '@nuxtjs/axios',
    [
      'storyblok-nuxt',
      {
        accessToken: process.env.STORYBLOK_TOKEN,
        cacheProvider: 'memory',
      },
    ],
  ],
  axios: {},
  build: {},
}
