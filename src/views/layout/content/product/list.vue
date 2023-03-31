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
        <el-button
          type="warning"
          icon="el-icon-plus"
          size="small"
          @click="addProduct"
          >添加商品</el-button
        >
        <el-button
          type="danger"
          size="small"
          icon="el-icon-delete"
          @click="batchDelete"
          >批量删除</el-button
        >
      </div>
    </div>
    <div class="product-list">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column type="selection"></el-table-column>
        <el-table-column prop="id" label="商品编号" width="100">
        </el-table-column>
        <el-table-column prop="title" label="商品名称" width="100">
        </el-table-column>
        <el-table-column prop="price" label="商品价格" width="120">
        </el-table-column>
        <el-table-column prop="category" label="商品类目" width="120">
        </el-table-column>
        <el-table-column prop="create_time" label="添加时间"> </el-table-column>
        <el-table-column prop="sellPoint" label="商品卖点"> </el-table-column>
        <el-table-column prop="descs" label="商品描述" show-overflow-tooltip="">
          <template slot-scope="scope">
            <div v-html="scope.row.descs"></div>
          </template>
        </el-table-column>

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
      <div style="padding: 10px">
        <bottompage
          :pagesize="pagesize"
          :total="total"
          @currentPage="changePage"
          @totalpage="totalpage"
        ></bottompage>
      </div>
    </div>
  </div>
</template>

<script>
import bottompage from "@/components/BottomPage.vue";
import {mapMutations} from 'vuex'
export default {
  data() {
    return {
      formInline: {
        user: "",
        region: "",
      },
      tableData: [],
      pagesize: 0,
      total: 0,
    };
  },
  components: {
    bottompage,
  },
  created() {
    this.projectList();
  },
  mounted() {},
  methods: {
    ...mapMutations('product',['changerowData','changetitle']),
    addProduct() {
      // console.log("添加商品");
      this.changetitle('添加');
      this.$router.push("/Product/addProduct");
      // this.$api.addProduct({ a: 1 });
    },
    batchDelete() {},
    handleDelete(a,b){

    },
    handleEdit(index,data){
      this.changetitle('编辑');
      this.changerowData(data);
      this.$router.push('/Product/addProduct');
      console.log(this.$store);
    },
    changePage(page) {
      // console.log('触发',page);
      this.projectList(page);
    },
    totalpage(total) {
      this.total = total;
    },
    onSubmit() {
      // console.log("submit!");
    },
    async projectList(page) {
      let res = await this.$api.projectList({ page });
      // console.log(res.data);
      this.tableData = res.data.data;
      this.pagesize = res.data.pageSize;
      this.total = res.data.total;
    },
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
    // margin-bottom: 20px;
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