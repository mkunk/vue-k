<template>
  <div>
    <div class="lists" v-for="(item,index) in dLists" :key="index">
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
    display: -webkit-flex;
    display: flex;
    align-items: center;
    background-color: #fff;
    width: 100%;
    height: 40px;
    padding: 0 10px;
    /*box-shadow: 0px 0px 1px 1px rgba(244, 244, 247, 1);*/
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  .lists .listIconT{
    font-size: 25px;
    border: 1px solid red;
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
