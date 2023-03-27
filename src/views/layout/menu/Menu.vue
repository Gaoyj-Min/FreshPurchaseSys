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
    <el-submenu index="1">
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
    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>订单管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/OrderList">
          <i class="el-icon-location"></i>
          订单列表
        </el-menu-item>
        <el-menu-item index="/OrderSum">
          <i class="el-icon-location"></i>
          汇总清单
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>广告分类</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/AdList">
          <i class="el-icon-location"></i>
          广告列表
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