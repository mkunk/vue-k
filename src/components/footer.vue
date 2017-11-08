<template>
    <div class="footer">
      <span class="dialog">按钮一</span>
      <span class="contacts">按钮二</span>
      <span class="discovert">按钮三</span>
      <span class="me">按钮四</span>
    </div>
</template>

<script>
  export default {
    name: 'kfooter'
  }
</script>

<style scoped>
.footer{
  background-color: #fff;
  position: fixed;
  z-index: 100;
  left: 0;
  right: 0;
  bottom: 0;
  height: 50px;
  display: flex;
  box-shadow: 0 -0.026667rem 0.053333rem rgba(0,0,0,.1);
}

</style>
