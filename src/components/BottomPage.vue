<template>
  <div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>
</template>

<script>
export default {
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.$emit('totalpage',val);
      },
      handleCurrentChange(val) {
        // console.log(`当前页: ${val}`);
        this.$emit('currentPage',val);
      }
    },
    props:['pagesize','total']
    ,
    data() {
      return {
        currentPage4: 1
      };
    },

  }
</script>

<style>

</style>