<template>
  <el-row :gutter="20">
    <el-col :span="6">
      <div class="grid-content bg-purple">
        <TreeProduct @treeItem="treeItem"></TreeProduct>
      </div></el-col>
    
    <el-col :span="18">
      <div class="grid-content bg-purple">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <!-- title, image, sellPoint, price, cid, category, num, descs, paramsInfo -->
          <h3>{{ title }}</h3>
          <el-form-item label="所属分类" prop="category">
            <span>{{ ruleForm.category }}</span>
          </el-form-item>
          <el-form-item label="商品名称" prop="title">
            <el-input v-model="ruleForm.title" size="small"></el-input>
          </el-form-item>
          <el-form-item label="商品价格" prop="price">
            <el-input v-model="ruleForm.price" size="small"></el-input>
          </el-form-item>
          <el-form-item label="商品数量" prop="num">
            <el-input v-model="ruleForm.num" size="small"></el-input>
          </el-form-item>
          <el-form-item label="商品卖点" prop="sellPoint">
            <el-input v-model="ruleForm.sellPoint" size="small"></el-input>
          </el-form-item>
          <el-form-item label="上传图片" prop="image">
            <uploadImg @sendimg="'sendimg'"></uploadImg>
          </el-form-item>
          <el-form-item label="商品描述" prop="descs">
          </el-form-item>
          <el-form-item label="首页轮播推进" prop="isShow">
            <el-switch v-model="ruleForm.isShow" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
          </el-form-item>
          <el-form-item label="是否推荐商品" prop="isShow">
            <el-switch v-model="ruleForm.isShow" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
          </el-form-item>
          <el-form-item label="是否上架商品" prop="isShow">
            <el-switch v-model="ruleForm.isShow" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
            <el-button @click="()=>this.$router.push('/Product/ProductList')">取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import loginVue from '@/views/login/login.vue';
// title, image, sellPoint, price, cid, category, num, descs, paramsInfo
import TreeProduct from './TreeProduct.vue'
import uploadImg from './uploadImg.vue'
export default {

  data() {
    return {
      ruleForm: {
        id: '',
        category: "",
        title: "",
        price: "",
        num: "",
        sellPoint: '',
        image: [],
        descs: "",
        cid: '',
        isShow: true,
      },
      rules: {//表单验证规则
        title: [
          { required: true, message: '请输入商品名称', trigger: 'blur' },
          // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        num: [
          { required: true, message: '请输入商品数量', trigger: 'blur' },
        ],
        price: [
          { required: true, message: '请输入商品价格', trigger: 'blur' },
        ],
        category: [{
          required: false, message: '请选择商品类目', trigger: 'blur'
        }]
      },
    };
  },
  created(){
    if(this.$store.state.product.title=='编辑'){
      this.ruleForm=this.$store.state.product.rowData;
    }
  },
  components: {
    TreeProduct,
    uploadImg
  },
  computed:{
    title:function(){
      if(this.$store.state.product.title=='编辑')
      {
        return '商品编辑'
      }
      else{
        return '商品添加'

      }
    }
  },
  methods: {
    treeItem(val){
      this.ruleForm.category=val
    },
    sendimg(val){
      this.ruleForm.image.push(val)
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid,b) => {
        if (valid) { //校验通过 就提交
          let { id, title, image, sellPoint, price, cid, category, num, descs } = this.ruleForm
          let res = this.insertItem( { id, title, image, sellPoint, price, cid, category, num, descs })
          this.$router.push('/Product/ProductList')
        } else {
          console.log("error submit!!", b);
          return false;
        }
      });
    },
    resetForm(formName) {
      console.log('重置');
      if(this.$store.state.product.title=='编辑')
      {
        this.ruleForm=this.$store.state.product.rowData;
        console.log(this.ruleForm);
        console.log(this.$store.state.product.rowData);

      }
      else this.$refs[formName].resetFields();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    async insertItem(params){
      let res = await this.$api.insertTbItem(params);
      return res
    }

  },

};
</script>

<style lang='less' scoped>
.el-row {
  padding: 20px;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
}

.el-col {
  border-radius: 4px;
}

.el-form {
  padding: 20px;
  background-color: white;
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>