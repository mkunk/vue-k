<template>
    <div class="footer">
      <router-link to="/dialogList/微信">
        <div class="btns btn_dialog">
          <span class="icon icon-wechatDialog"></span>
          <span class="ff dialog">微信</span>
        </div>
      </router-link>
      <router-link to="/contacts/通讯录">
        <div class="btns btn_contacts">
          <span class="icon icon-wechatContact"></span>
          <span class="ff contact">通讯录</span>
        </div>
      </router-link>
      <router-link to="/discovery/发现">
        <div class="btns btn_dialog">
          <span class="icon icon-wechatDiscovery"></span>
          <span class="ff discovery">发现</span>
        </div>
      </router-link>
      <router-link to="/me/我">
        <div class="btns btn_dialog">
          <span class="icon icon-wechatMe"></span>
          <span class="ff me">我</span>
        </div>
      </router-link>
    </div>
</template>

<script>
  export default {
    name: 'kfooter'
  }
</script>

<style scoped>
/*@import "../assets/font/font.css";*/
.footer{
  background-color: #fff;
  position: fixed;
  z-index: 100;
  left: 0;
  right: 0;
  bottom: 0;
  height: 99px;
  display: -webkit-flex; /* Safari */
  display: flex;
  box-shadow: 0 -0.026667rem 0.053333rem rgba(0,0,0,.1);
  justify-content: space-around;
}
  .btns{
    /*border: 1px solid;*/
    display: -webkit-flex; /* Safari */
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    align-content: center;
    height: 100%;
    color: #333;
  }
  .btns .icon{
    font-size: 52px;
    color: inherit;
  }
  .btns .ff{
    font-size: 20px;
    color: inherit;
  }
  .router-link-active .btns{
    color: #09bb07;
  }

</style>
