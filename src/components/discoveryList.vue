<template>
    <div class="lists">
      <span class="listIconT icon icon-wechatCircles">
        <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span>
      </span>
      <span class="listInner">{{'朋友圈'}}<span class="listDotNum">{{1}}</span></span>
      <span class="listAvatar"><img src="https://ss1.bdstatic.com/7Ls0a8Sm1A5BphGlnYG/sys/portrait/item/391c4d6b756e6b6161612830"></span>
      <span class="icon icon-wechatArrowRight"></span>
    </div>
</template>

<script>
    export default {
      name: 'discoveryList',
      data () {
        return {
          msg: '00'
        }
      },
      components: {},
      computed: {}
    }
</script>

<style scoped>
  .lists{
    display: -webkit-flex;
    display: flex;
    align-items: center;
    background-color: #fff;
    width: 100%;
    height: 40px;
    padding: 0 10px;
    /*box-shadow: 0px 0px 1px 1px rgba(244, 244, 247, 1);*/
    border-top: 1px solid rgba(0, 0, 0, 0.2);
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
  .lists .listIconT{
    font-size: 25px;
  }
  .lists .listInner{
    flex: 1;
    padding-left: 10px;
    font-size: 18px;
  }
  .listDotNum{
    display: inline-flex;
    color: #fff;
    font-size: 15px;
    width: 18px;
    height: 18px;
    border-radius: 100%;
    background-color: #f54e4a;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
  }
  .lists .listAvatar{
    margin-right: 10px;
    width: 30px;
    height: 30px;
    position: relative;
  }
  .lists .listAvatar:after{
    content: "";
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 100%;
    background-color: #f54e4a;
    position: absolute;
    right: 0;
    top: 0;
    margin: -4px;
  }
  .lists .listAvatar img{
    width: 100%;
    height: 100%;
  }

  .icon-wechatArrowRight{
    font-size: 15px;
  }
</style>
