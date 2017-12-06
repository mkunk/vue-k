<template>
  <div id="app">
    <kheader></kheader>
    <div class="content">
      <router-view></router-view>
    </div>
    <kfooter></kfooter>

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
@import '../assets/font/font.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  /*margin-top: 60px;*/
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  /*position: fixed;*/
}
  .content{
    /*border: 1px solid red;*/
    flex: 1;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
  }

</style>
