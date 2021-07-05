export default {
  ssr: true,

  head: {
    title: "ProMedia — Digital Агентство",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "robots", content: "index, follow" },
      {
        name: "description",
        content:
          "ProMedia — комплексный digital-маркетинг по подписке. Мы обеспечиваем качественный сервис по фиксированной цене."
      },
      {
        name: "keywords",
        content: "ProMedia"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  css: ["@assets/css/index.css", "~/assets/scss/index.scss"],

  plugins: [
    "@/plugins/element-ui",
    { src: "@/plugins/plugins", ssr: false },
    { src: "@/plugins/ymapPlugin.js", mode: "client" }
  ],

  components: true,

  buildModules: ["@nuxtjs/style-resources"],

  modules: ["nuxt-i18n", "@nuxtjs/axios"],
  i18n: {
    locales: [
      {
        code: "ru",
        file: "ru.js"
      }
    ],
    lazy: true,
    langDir: "lang/",
    defaultLocale: "ru"
  },
  axios: {},

  build: {}
};
