<template>
  <div>
    <div class="lists" v-for="(item,index) in dLists" :key="index" :class="item.listStyleClass">
      <span class="listIconT icon " :class="[item.listIconT]">
        <span class="path" v-for="n in item.listIconTs" :class="[ 'path'+ n]"></span>
      </span>
      <span class="listInner">{{item.listInner}}<span class="listDotNum" v-if="item.ifListDotNumShow">{{item.ListDotNum}}</span></span>
      <span class="listAvatar" v-if="item.ifListAvatarShow"><img :src="item.ListAvatarSrc"></span>
      <span class="icon icon-wechatArrowRight"></span>
    </div>
  </div>
</template>

<script>
    export default {
      name: 'discoveryList',
      data () {
        return {}
      },
      props: [ 'dLists' ],
      components: {},
      computed: {}
    }
</script>

<style scoped>
  .lists{
    position: relative;
    display: -webkit-flex;
    display: flex;
    align-items: center;
    background-color: #fff;
    width: 100%;
    height: 88px;
    padding: 0 0 0 10px;
    /*box-shadow: 0px 0px 1px 1px rgba(244, 244, 247, 1);*/
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    /*font-family: hyqh !important;*/
  }

  .lists .listIconT{
    font-size: 44px;
    /*border: 1px solid red;*/
    color: #10aeff;
  }
  .lists .listInner{
    flex: 1;
    padding-left: 10px;
    font-size: 32px;
    display: inline-flex;
    align-items: center;
  }
  .listDotNum{
    display: inline-flex;
    color: #fff;
    font-size: 18px;
    width: 36px;
    height: 36px;
    border-radius: 100%;
    background-color: #f54e4a;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
  }
  .lists .listAvatar{
    margin-right: 10px;
    width: 64px;
    height: 64px;
    position: relative;
  }
  .lists .listAvatar:after{
    content: "";
    display: block;
    width: 18px;
    height: 18px;
    border-radius: 100%;
    background-color: #f54e4a;
    position: absolute;
    right: 0;
    top: 0;
    margin: -9px;
  }
  .lists .listAvatar img{
    width: 100%;
    height: 100%;
  }

  .icon-wechatArrowRight{
    font-size: 26px;
    color: rgb(214, 214, 216);
  }
  /*小程序重置颜色*/
  .icon-wechatSmallProgram{
    color: #97a6ee!important;
  }
  /*设置margin   -- 暂定方案 -- */
  .firstList{
    margin: 30px 0 40px 0;
  }
  .sFirstList{
    border-bottom: none;
  }
  .sFirstList:after,
  .sSecondList:after {
    content: '';
    display: block;
    position: absolute;
    width: 690px;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.1);
    left: 30px;
    bottom: 1px;
  }
  .sSecondList{
    border: none;
  }
  .sThirdList{
    border-top: none;
    margin-bottom: 40px;
  }
  .endList{}

  .icon-wechatArrowRight{
    margin: 0 29px 0 20px;
    font-size: 26px;
    color: rgb(214, 214, 216);
  }
</style>
