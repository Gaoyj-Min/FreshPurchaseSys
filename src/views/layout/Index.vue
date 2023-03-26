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
console.log(1);
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
      background-color: pink;
      position: fixed;
      top: 0;
      left: 0;
      bottom:0px;
    }
    .content{
      // flex:1;
      background-color: hotpink;
      margin-left: 200px;
    }
  }
</style>