/*
 * Created by GentlemanW on 2017/11/14.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import Actions from './actions'
import Mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Mutations
  },
  Actions
})
