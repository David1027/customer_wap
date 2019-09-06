const pkg = require('./package')
const myConfig = require('./config/' + process.env.NODE_ENV + '.js')

module.exports = {
  mode: 'universal',
  // 编译的目录
  buildDir: 'nuxt-dist',
  // 自定义路由
  router: {
    middleware: ['cookieInfo', 'config'],
    extendRoutes(routes, resolve) {
      // routes.push({
      //   path: '/*_p(\\d+).html',
      //   component: resolve(__dirname, 'pages/test')
      // })
    }
  },
  /*
   ** Headers of the page
   */

  head: {
    title: pkg.name,
    meta: [{
      charset: 'utf-8'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    },
    {
      hid: 'description',
      name: 'description',
      content: pkg.description
    }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },
  // 开启缓存
  cache: {
    max: 1000,
    maxAge: 900000
  },
  /*
   ** Global CSS
   */
  css: [
    'weui/dist/style/weui.min.css'
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/weui',
    '@/plugins/i18n.js',
    '@/plugins/axios'
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/proxy',
    '@nuxtjs/axios'
  ],

  /*
   ** Build configuration
   */
  build: {
    transpile: [/^weui/],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
    }
  },
  // 跨域代理
  proxy: myConfig.proxy,
  env: myConfig.env,
  axios: {

  }
}
