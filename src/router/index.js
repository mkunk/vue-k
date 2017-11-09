/*
 * Created by GentlemanW on 2017/11/8.
 */
import Vue from 'vue'
import footer from '../components/footer.vue'
import dialogList from '../components/dialogList.vue'
import contacts from '../components/contacts.vue'
import discovery from '../components/discovery.vue'
import me from '../components/me.vue'
import vueRouter from 'vue-router'

Vue.use(vueRouter)
export default [
  {
    path: '/',
    component: footer
  }, {
    path: '/dialogList',
    component: dialogList
  }, {
    path: '/contacts',
    component: contacts
  }, {
    path: '/discovery',
    component: discovery
  }, {
    path: '/me',
    component: me
  }
]
