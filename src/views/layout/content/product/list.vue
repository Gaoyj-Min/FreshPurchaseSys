<template>
  <div class="productList">
    <div class="product-contro">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="审批人">
          <el-input v-model="formInline.user" placeholder="审批人"></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
          <el-select v-model="formInline.region" placeholder="活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
      <div class="pro-button">
        <el-button type="warning" icon="el-icon-plus" size="small"
          >添加商品</el-button
        >
        <el-button type="danger" size="small" icon="el-icon-delete"
          >批量删除</el-button
        >
      </div>
    </div>
    <div class="product-list">
      <el-table
        :data="tableData"
        border
        style="width: 100%"
      >
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)"
              type="primary"
              icon="el-icon-edit"
              >编辑</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              icon="el-icon-delete"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formInline: {
        user: "",
        region: "",
      },
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
  created(){

  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    orderList(){
      let res=this.$api.orderLsit();
      console.log(res);
    }
  },
};
</script>

<style lang='less' scoped>
.productList {
  padding: 0px 10px;
  .product-contro,
  .product-list {
    background-color: white;
    padding: 10px;
    margin-top: 10px;
  }
}
.pro-button {
  border: 1px gray solid;
  padding: 10px;
}
.InTheCen {
  text-align: center;
}
</style>