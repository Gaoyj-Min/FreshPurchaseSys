<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  created() {
      if (this.$router.path !== "/")
        this.$router.replace("/")
    }
};
</script>

<style>
</style>
