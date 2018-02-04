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
  import { bus } from '../js/bus.js'

  export default {
    name: 'app',
    data () {
      return {
        item1: '1111'
      }
    },
    watch: {
      '$route' () {
        if (window._czc) {
          let location = window.location
          let contentUrl = location.pathname + location.hash
          let refererUrl = '/'
          // let hashArr = location.hash.split('/')
          // let hashArr = location.hash
          window._czc.push()
          window._czc.push(['_trackPageview', contentUrl, refererUrl])
          bus.$emit('change', [window._czc, contentUrl, refererUrl])
          // console.log(hashArr.indexOf('contacts') >= 0)
          bus.$emit('test', [window._czc, contentUrl, refererUrl])
        }
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
      // console.log(bus)
    },
    created: function () {
      console.log('vue实例已经创建于：' + new Date().getTime())
    },
    beforeMounte: function () {
      console.log('vue实例.....于：' + new Date().getTime())
    },
    mounted: function () {
      console.log('vue实例.....于：' + new Date().getTime())
      const script = document.createElement('script')
      script.src = 'https://s22.cnzz.com/z_stat.php?id=1272814026&web_id=1272814026'
      script.language = 'JavaScript'
      document.body.appendChild(script)

      const script1 = document.createElement('script')
      script1.src = 'https://s19.cnzz.com/z_stat.php?id=1272814115&web_id=1272814115'
      script1.language = 'JavaScript'
      document.body.appendChild(script1)

      const script2 = document.createElement('script')
      script2.src = 'https://s13.cnzz.com/z_stat.php?id=1272814145&web_id=1272814145'
      script2.language = 'JavaScript'
      document.body.appendChild(script2)

      const script3 = document.createElement('script')
      script3.src = 'https://s22.cnzz.com/z_stat.php?id=1272814167&web_id=1272814167'
      script3.language = 'JavaScript'
      document.body.appendChild(script3)

      const script4 = document.createElement('script')
      script4.src = 'https://s13.cnzz.com/z_stat.php?id=1272814173&web_id=1272814173'
      script4.language = 'JavaScript'
      document.body.appendChild(script4)
    },
    beforeDestory: function () {
      console.log('vue实例即将销毁于：' + new Date().getTime())
    },
    destroyed: function () {
      console.log('vue实例销毁于：' + new Date().getTime())
    }
  }

  // console.log(router)
  // router.beforeEach(function (to, from, next) {
  //   const routerItem = ['dialogList', 'contacts', 'discovery', 'me']
  //   if (routerItem.indexOf(to.name) >= 0) {
  //     switch (to.name) {
  //       case 'dialogList':
  //         console.log('打开了dialoglist')
  //         break;
  //       case 'contacts':
  //         console.log('打开了contacts')
  //         break;
  //       case 'discovery':
  //         console.log('打开了discovery')
  //         break;
  //       case 'me':
  //         console.log('打开了me')
  //         break;
  //     }
  //   }
  //   console.log('to.name_____', to.name)
  //   next()
  // })
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

  .content {
    /*border: 1px solid red;*/
    flex: 1;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
  }

</style>
