<template>
    <div>
      <div class="header">
        <span>{{xback}}</span>
        <span>{{xmsg}}</span>
        <span>{{xadd}}</span>

      </div>
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
