// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
import 'lib-flexible/flexible.js'
import { bus } from './js/bus.js'

import App from './components/App'
// import router from './router'
Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

/* eslint-disable no-new */
new Vue({
  router,
  template: '<App/>',
  components: {
    App
  },
  created () {
    bus.$on('test', (val) => {
      const czc = val[0]
      const contentUrl = val[1]
      const refererUrl = val[2]
      const loactionHashArr = val[1].split('/')
      console.log(loactionHashArr)
      if (loactionHashArr.indexOf('dialogList') >= 0) {
        console.log('打开了 dialog 页')
        czc.push(['_setAccount', '1272814115'])
        czc.push(['_trackPageview', contentUrl, refererUrl])
        window._czc.push(['_trackEvent', '路由', '点击', '打开dialogList页'])
      } else if (loactionHashArr.indexOf('contacts') >= 0) {
        console.log('打开了 contacts 页')
        czc.push(['_setAccount', '1272814145'])
        czc.push(['_trackPageview', contentUrl, refererUrl])
        window._czc.push(['_trackEvent', '路由', '点击', '打开contacts页'])
      } else if (loactionHashArr.indexOf('discovery') >= 0) {
        console.log('打开了 discovery 页')
        czc.push(['_setAccount', '1272814167'])
        czc.push(['_trackPageview', contentUrl, refererUrl])
        window._czc.push(['_trackEvent', '路由', '点击', '打开discovery页'])
      } else if (loactionHashArr.indexOf('me') >= 0) {
        console.log('打开了 me 页')
        czc.push(['_setAccount', '1272814173'])
        czc.push(['_trackPageview', contentUrl, refererUrl])
        window._czc.push(['_trackEvent', '路由', '点击', '打开me页'])
      } else {}
    })
  }
}).$mount('#app')
