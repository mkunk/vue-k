<template>
    <div class="footer">
      <router-link to="/dialogList">
        <div class="btns btn_dialog">
          <span class="icon icon-wechat2"></span>
          <span class="ff dialog">微信</span>
        </div>
      </router-link>
      <router-link to="/contacts">
        <div class="btns btn_dialog">
          <span class="icon icon-contact"></span>
          <span class="ff contact">通讯录</span>
        </div>
      </router-link>
      <router-link to="/discovery">
        <div class="btns btn_dialog">
          <span class="icon icon-discovery"></span>
          <span class="ff discovery">发现</span>
        </div>
      </router-link>
      <router-link to="/me">
        <div class="btns btn_dialog">
          <span class="icon icon-me"></span>
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
@import "../assets/font/font.css";
.footer{
  background-color: #fff;
  position: fixed;
  z-index: 100;
  left: 0;
  right: 0;
  bottom: 0;
  height: 50px;
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
  }
  .btns .icon{
    font-size: 26px;
  }
  .btns .ff{
    font-size: 10px;
  }

</style>
