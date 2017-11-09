// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'

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
  }
}).$mount('#app')
