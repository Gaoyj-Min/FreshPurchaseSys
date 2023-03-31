<template>
    <div>
        <el-upload :action="uploadUrl" list-type="picture-card"
            :on-preview="handlePictureCardPreview" :on-remove="handleRemove"  :auto-upload="false" ref="upload" :on-success='onsuccess'>
            <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
    </div>
</template>

<script>
import {uploadUrl} from '@/api/base.js'
export default {
    data() {
      return {
        filelist:[],
        uploadUrl:uploadUrl,
        dialogImageUrl: '',
        dialogVisible: false,
        
      };
    },
    methods: {
      handleRemove(file, fileList) {
        // console.log(file, fileList);
        console.log(this.filelist.length);

      },
      handlePictureCardPreview(file) {
        // this.$refs.upload.submit();
        console.log(this.filelist.length);
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      onsuccess(response, file, fileList) {
        // console.log('上传', response, file, fileList);
        let url=('localhost:8080/'+response.url.slice(8))
        this.$emit('sendimg',url)
        
    }
    }
  }
</script>

<style></style>