<template>
  <el-tree :props="props" :load="loadNode" @node-click="clickHandle" lazy>
  </el-tree>
</template>

<script>
export default {
  data() {
    return {
      props: {
        label: "name",
        children: "zones",
        isLeaf: "leaf",
      },
    };
  },
  methods: {
    clickHandle(data, node) {
      // console.log("data", data, "node", node);
      //   this.$emit("sendTreeData", data);
      this.$emit('treeItem',data.name)
    },
    loadNode(node, resolve) {
      if (node.level === 0) {
        this.$api.selectItemCategoryByParentId().then((res) => {
          if (res.data.status == 200) {
            return resolve(res.data.result);
          } else {
            return resolve([]);
          }
        });
      }
      if (node.level >= 1) {
        this.$api
          .selectItemCategoryByParentId({ type: node.data.cid })
          .then((res) => {
            if (res.data.status == 200) {
              return resolve(res.data.result);
            } else {
              return resolve([]);
            }
          });
      }
    },
    async selectItemCategoryByParentId(type) {
      let res = await this.$api.selectItemCategoryByParentId();
      console.log(res.data.result);
    },
  },
};
</script>

<style>
</style>