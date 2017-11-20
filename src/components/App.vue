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
import kheader from './header'
import kfooter from './footer'
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
  computed: {
    munt () {
      console.log(this.$store)
    }
  },
  beforeCreate: function () {
    console.log('vue实例即将创建于：' + new Date().getTime())
  },
  created: function () {
    console.log('vue实例已经创建于：' + new Date().getTime())
  },
  beforeMounte: function () {
    console.log('vue实例.....于：' + new Date().getTime())
  },
  mounted: function () {
    console.log('vue实例.....于：' + new Date().getTime())
  },
  beforeDestory: function () {
    console.log('vue实例即将销毁于：' + new Date().getTime())
  },
  destroyed: function () {
    console.log('vue实例销毁于：' + new Date().getTime())
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
