<template>
  <div>
    This is Component CONTACTS.
  </div>
</template>

<script>
  export default {
    name: 'contacts',
    updated () {
      alert('11111')
    },
    mounted: function () {
      const script = document.createElement('script')
      script.src = 'https://s22.cnzz.com/z_stat.php?id=1272839549&web_id=1272839549'
      script.language = 'JavaScript'
      document.body.appendChild(script)
    },
    beforeRouteEnter (to, from, next) {
      console.log('aaaaaaaaaaaaaaaaaaaaa________________________________________________', from)
      console.log(to.name)
      if (window._czc) {
        let location = window.location
        let contentUrl = location.pathname + location.hash
        let refererUrl = '/'
        // let hashArr = location.hash.split('/')
        // let hashArr = location.hash
        // window._czc.push()
        window._czc.push(['_trackPageview', contentUrl, refererUrl])
        // bus.$emit('change', [window._czc, contentUrl, refererUrl])
        // // console.log(hashArr.indexOf('contacts') >= 0)
        // bus.$emit('test', [window._czc, contentUrl, refererUrl])
      }
      next()
    },
    beforeRouteUpdate (to, from, next) {
      console.log('aaaaaaaaaaaaaaaaaaaaa________________________________________________', from)
      next()
      // 在当前路由改变，但是该组件被复用时调用
      // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
      // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
      // 可以访问组件实例 `this`
    }
  }
</script>

<style>
</style>
