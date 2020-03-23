const APP_NAME = process.env.VUE_APP_NAME

const isProd = process.env.NODE_ENV === 'production'
const isDebug = false

const requiredModules = [
  { module: 'axios', entry: 'dist/axios.min.js' },
  { module: 'vue', entry: 'dist/vue.runtime.min.js' }
]

module.exports = {
  outputDir: 'dist',
  assetsDir: 'static',
  pages: [
    {
      name: 'index',
      title: APP_NAME,
      vendors: {
        enabled: isProd,
        packages: [
          ...requiredModules,
          { module: 'vuex', entry: 'dist/vuex.min.js' },
          { module: 'vue-router', entry: 'dist/vue-router.min.js' }
        ]
      }
    },
    {
      name: 'passport',
      title: `通行证 - ${APP_NAME}`,
      vendors: {
        enabled: isProd,
        packages: [
          ...requiredModules,
          { module: 'vue-router', entry: 'dist/vue-router.min.js' }
        ]
      },
      prerender: {
        enabled: isProd,
        headless: !isDebug,
        routes: ['/auth/login']
      }
    }
    // {
    //   name: 'exceptions',
    //   title: `异常页 - ${APP_NAME}`,
    //   vendors: {
    //     enabled: isProd,
    //     packages: [
    //       ...requiredModules,
    //       { module: 'vue-router', entry: 'dist/vue-router.min.js' }
    //     ]
    //   },
    //   prerender: {
    //     enabled: isProd,
    //     headless: !isDebug,
    //     routes: ['/404', '/500']
    //   }
    // }
  ],
  vendors: {
    axios: 'axios',
    vue: 'Vue',
    vuex: 'Vuex',
    'vue-router': 'VueRouter'
  }
}
