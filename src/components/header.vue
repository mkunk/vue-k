<template>

      <div class="header">
        <span><span class="icon icon-wechatArrowLeft"></span></span>
        <span>{{$route.params.itemName}}</span>
        <span><span class="icon icon-wechatAdd"></span></span>

      </div>

</template>

<script>
export default {
  name: 'kheader',
  data () {
    return {
      xback: 'back',
      xmsg: 'This is header',
      xadd: 'add'
    }
  }
}
</script>

<style>
  .header{
    /*position: fixed;*/
    width: 100%;
    height: 40px;
    display: flex;
    /*flex-direction: column;*/
    justify-content: space-between;
    align-content: center;
    background-color: #35343a;
    color: #fff;

  }
  .header span{
    display: inline-flex;
    color: inherit;
    align-items: center;
    align-content: center;
  }
</style>
