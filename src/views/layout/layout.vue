<template>
  <div class="layout">
    <div class="menu">
      <Menu></Menu>
    </div>
    <div class="content">
      <Content></Content>
    </div>
  </div>
 
</template>

<script>
import Content from './content/MyCon.vue';
import Menu from './menu/Menu.vue';
export default {
  name:'layout',
  components:{
    Content:Content,
    Menu:Menu
  }
}
</script>

<style lang="less" scoped>
  .layout{
    // display: flex;
    .menu{
      width: 200px; 
      background-color: #0f2e52;
      position: fixed;
      top: 0;
      left: 0;
      bottom:0px;
    }
    .content{
      // flex:1;
      background-color: #0f2e52;
      margin-left: 200px;
    }
  }
</style>