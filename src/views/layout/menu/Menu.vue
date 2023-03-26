<template>
  <el-menu
    default-active="/"
    class="el-menu-vertical-demo is-active"
    background-color="#0f2e52"
    text-color="#fff"
    active-text-color=""
    router
  >
    <el-menu-item>
      <span slot="title">采购系统</span>
    </el-menu-item>
    <el-menu-item index="/">
      <i class="el-icon-location"></i>
      <span slot="title">首页</span>
    </el-menu-item>
    <el-submenu>
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>产品管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="ProductList">
          <i class="el-icon-location"></i>
          产品列表
        </el-menu-item>
        <el-menu-item index="ProductCategory">
          <i class="el-icon-location"></i>
          产品分类
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {};
</script>

<style lang='less' scoped>
.el-menu {
  border-right: 0;
  /deep/.is-active {
    background-color: #1574c2 !important;
    color: white;
  }
}
.el-menu-item:hover {
  background-color: #1574c2 !important;
  color: white;
}
</style>