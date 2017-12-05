<template>
    <div class="meInfo">
      <span class="avatar">
        <img src="https://ss1.bdstatic.com/7Ls0a8Sm1A5BphGlnYG/sys/portrait/item/391c4d6b756e6b6161612830" alt="" class="">
      </span>
      <span class="inner">
        <span class="nickName">张三丰</span>
        <span class="wechatID">微信号：wudanshandiyidaoshi</span>
      </span>
      <span class="qrcode icon icon-wechatQrCode"></span>
      <span class="icon icon-wechatArrowRight"></span>
    </div>
</template>

<script>
    export default {
      name: 'meInfo',
      data () {
        return {}
      },
      components: {},
      computed: {}
    }
</script>

<style>
  .meInfo{
    /*border: 1px solid red;*/
    position: relative;
    height: 176px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #fff;
    margin: 30px 0 40px 0;
  }
  .avatar{
    /*border: 1px solid red;*/
    width: 105px;
    height: 105px;
    overflow: hidden;
    margin: 0 35px 0 40px;
  }
  .avatar img{
    width: 100%;
    height: 100%;
  }
  .inner{
    /*border: 1px solid red;*/
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 86px;
    justify-content: space-between;
    font-size: 26px;
  }
  .nickName{
    /*border: 1px solid red;*/
    font-size: 30px;
    font-weight: bold;
  }
  .wechatID{
    /*border: 1px solid red;*/
  }
  .qrcode{
    /*border: 1px solid red;*/
    display: inline-flex;
    width: 34px;
    height: 34px;overflow: hidden;
    margin: 0 0 0 20px;
    font-size: 34px;
  }
  .qrcode img{
    width: 100%;
  }
  .icon-wechatArrowRight{
    margin: 0 29px 0 20px;
    font-size: 26px;
    color: rgb(214, 214, 216);
  }
  .icon-wechatEmoji{
    color: #ffcd1d!important;
  }
  .icon-wechatCardPackage {
    color: #10aeff!important;
  }
</style>
