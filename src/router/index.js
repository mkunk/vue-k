/*
 * Created by GentlemanW on 2017/11/8.
 */
import Vue from 'vue'
// import footer from '../components/footer.vue'
import dialogList from '../components/dialogList.vue'
import contacts from '../components/contacts.vue'
import discovery from '../components/discovery.vue'
import me from '../components/me.vue'
import vueRouter from 'vue-router'
// import { bus } from '../js/bus.js'

Vue.use(vueRouter)
export default [
  {
    path: '*',
    name: '0',
    redirect: '/dialogList/微信'
  }, {
    path: '/dialogList/:itemName',
    name: 'dialogList',
    component: dialogList
  }, {
    path: '/contacts/:itemName',
    name: 'contacts',
    component: contacts
  }, {
    path: '/discovery/:itemName',
    name: 'discovery',
    component: discovery,
    beforeEnter: (to, from, next) => {
      // ...
      console.log(to.name)
      // bus.$on('change', (val) => {
      //   const czc = val[0]
      //   const contentUrl = val[1]
      //   const refererUrl = val[2]
      //   console.log(czc)
      //   console.log(contentUrl)
      //   console.log(refererUrl)
      //   czc.push(['_trackPageview', contentUrl, refererUrl])
      // })
      next()
    }
  }, {
    path: '/me/:itemName',
    name: 'me',
    component: me
  }
]
