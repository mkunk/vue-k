<template>
    <div>
      <me-info></me-info>
      <div>
        <discovery-list v-bind:d-lists="lists"></discovery-list>
      </div>
    </div>
</template>

<script>
  import meInfo from './meInfo.vue'
  import discoveryList from './discoveryList.vue'

  export default {
    name: 'contacts',
    data () {
      return {
        lists: [{
          listStyleClass: 'firstList',
          listIconT: 'icon-wechatWallet',
          listIconTs: 0,
          listInner: '钱包',
          ifListDotNumShow: false,
          ListDotNum: 1,
          ifListAvatarShow: false,
          ListAvatarSrc: ''
        }, {
          listStyleClass: 'sFirstList',
          listIconT: 'icon-wechatClection',
          listIconTs: 3,
          listInner: '收藏',
          ifListDotNumShow: false,
          ListDotNum: 1,
          ifListAvatarShow: false,
          ListAvatarSrc: ''
        }, {
          listStyleClass: 'sSecondList',
          listIconT: 'icon-wechatPhotos',
          listIconTs: 0,
          listInner: '相册',
          ifListDotNumShow: false,
          ListDotNum: 1,
          ifListAvatarShow: false,
          ListAvatarSrc: ''
        }, {
          listStyleClass: 'sSecondList',
          listIconT: 'icon-wechatCardPackage',
          listIconTs: 2,
          listInner: '卡包',
          ifListDotNumShow: false,
          ListDotNum: 1,
          ifListAvatarShow: false,
          ListAvatarSrc: ''
        }, {
          listStyleClass: 'sThirdList',
          listIconT: 'icon-wechatEmoji',
          listIconTs: 0,
          listInner: '表情',
          ifListDotNumShow: false,
          ListDotNum: 1,
          ifListAvatarShow: false,
          ListAvatarSrc: ''
        }, {
          listStyleClass: 'firstList',
          listIconT: 'icon-wechatSettings',
          listIconTs: 2,
          listInner: '设置',
          ifListDotNumShow: false,
          ListDotNum: 1,
          ifListAvatarShow: false,
          ListAvatarSrc: ''
        }]
      }
    },
    components: {
      meInfo,
      discoveryList
    },
    methods: {}
  }
</script>

<style>
</style>
