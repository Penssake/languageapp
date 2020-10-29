export default {
  generate: {
    fallback: true
  },
  head: {
    title: 'langapp',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  plugins: [
    "@/plugins/polyfills.client.js"
  ],
  modules: [
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    scss: [
      "@/assets/styles/main.scss",
    ]
  },
  components: true,
}
