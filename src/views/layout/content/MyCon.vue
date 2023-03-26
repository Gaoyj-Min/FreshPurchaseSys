<template>
  <div>
    <MyHead></MyHead>
    <router-view></router-view>
  </div>
</template>

<script>
import MyHead from "./MyHeader";
export default {
  components: {
    MyHead: MyHead,
  },
};
</script>

<style>
</style>