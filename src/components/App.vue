<template>
  <div>
    <kheader></kheader>
    <kfooter></kfooter>
    <div>
      <router-view></router-view>
    </div>
  </div>

</template>

<script>
import Vue from 'vue'
import Vuex from 'vuex'
import kheader from './header'
import kfooter from './footer'
import store from '../store'
Vue.use(Vuex)
export default {
  name: 'app',
  data () {
    return {
      item1: '1111'
    }
  },
  components: {
    kfooter,
    kheader
  },
  store,
  computed: {
    munt () {
      console.log(this.$store)
    }
  }
}
</script>

<style>
@import "../style/common.css";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
