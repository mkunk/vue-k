<template>
    <div>
      <!--This is Component DISCOVERY.-->
      <discovery-list v-bind:d-lists="lists"></discovery-list>
    </div>
</template>

<script>
  import discoveryList from './discoveryList.vue'
  export default {
    name: 'contacts',
    data () {
      return {
        lists: [{
          listStyleClass: 'firstList',
          listIconT: 'icon-wechatCircles',
          listIconTs: 8,
          listInner: '朋友圈',
          ifListDotNumShow: true,
          ListDotNum: 1,
          ifListAvatarShow: true,
          ListAvatarSrc: 'https://ss1.bdstatic.com/7Ls0a8Sm1A5BphGlnYG/sys/portrait/item/391c4d6b756e6b6161612830'
        }, {
          listStyleClass: 'sFirstList',
          listIconT: 'icon-wechatScanning2',
          listIconTs: 0,
          listInner: '扫一扫',
          ifListDotNumShow: false,
          ListDotNum: 1,
          ifListAvatarShow: false,
          ListAvatarSrc: ''
        }, {
          listStyleClass: 'sThirdList',
          listIconT: 'icon-wechatShake',
          listIconTs: 0,
          listInner: '摇一摇',
          ifListDotNumShow: false,
          ListDotNum: 1,
          ifListAvatarShow: false,
          ListAvatarSrc: ''
        }, {
          listStyleClass: 'sFirstList',
          listIconT: 'icon-wechatPeopleAround',
          listIconTs: 0,
          listInner: '附近的人',
          ifListDotNumShow: false,
          ListDotNum: 1,
          ifListAvatarShow: false,
          ListAvatarSrc: ''
        }, {
          listStyleClass: 'sThirdList',
          listIconT: 'icon-wechatDraftBottle',
          listIconTs: 0,
          listInner: '漂流瓶',
          ifListDotNumShow: false,
          ListDotNum: 1,
          ifListAvatarShow: false,
          ListAvatarSrc: ''
        }, {
          listStyleClass: 'sFirstList',
          listIconT: 'icon-wechatJD',
          listIconTs: 2,
          listInner: '购物',
          ifListDotNumShow: false,
          ListDotNum: 1,
          ifListAvatarShow: false,
          ListAvatarSrc: ''
        }, {
          listStyleClass: 'sThirdList',
          listIconT: 'icon-wechatGame',
          listIconTs: 4,
          listInner: '游戏',
          ifListDotNumShow: false,
          ListDotNum: 1,
          ifListAvatarShow: false,
          ListAvatarSrc: ''
        }, {
          listStyleClass: 'endList',
          listIconT: 'icon-wechatSmallProgram',
          listIconTs: 0,
          listInner: '小程序',
          ifListDotNumShow: false,
          ListDotNum: 1,
          ifListAvatarShow: false,
          ListAvatarSrc: ''
        }]
      }
    },
    components: {
      discoveryList
    },
    created () {
//      console.log($route)
    }
  }
</script>

<style>
</style>
