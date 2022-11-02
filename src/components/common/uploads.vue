<template>
  <div>
    <el-upload class="upload-demo" action="#" :drag="drag" :http-request="httpRequest" :show-file-list="false" :accept="accept" :multiple="multiple" >
      <template v-if="drag">
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<el-button size="small" type="primary">点击上传</el-button>
        </div>
        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
      </template>
      <template v-else>
        <el-button size="small" type="primary">上传文件</el-button>
      </template>
    </el-upload>
  </div>
</template>

<script>
import { apiBaseUrl } from "@/config/baseUrl.js";
export default {
  name: 'uploads',
  props: {
    // 限制上传选中的类型
    accept: {
      type: String,
      default: '.pdf',
    },
    multiple: {
      type: Boolean,
      default: true,
    },
    // 使用拖拽上传 默认不使用
    drag: {
      type: Boolean,
      default: false,
    },
    // // 限制上传文件个数
    // limit:{
    //   type: Number,
    //   default: 5,
    // }
  },
  data() {
    return {
      // fileList: [],
      apiBaseUrl,
    };
  },

  methods: {
    httpRequest(data) {
      let fileName = data.file.name;
      let pos = fileName.lastIndexOf(".");
      console.log('**ada', data);
      let lastName = fileName.substring(pos, fileName.length);
      if (lastName.toLowerCase() !== ".pdf") {
        $fun.message("文件必须为pdf类型", "error")
        return false
      }
      if ((data.file.size / (1024 * 1024)) > 10) {
        $fun.message("单个文件不能超过10M !!!", 'error')
        return false
      }
      let formData = new FormData();
      // 添加文件对象
      formData.append("file", data.file);
      this.$api.powerManage.uploadFile(formData)
        .then(({ statusCode, result, message }) => {
          if (statusCode === "200") {
            this.$emit('onSuccess', result[1], fileName)
          } else {
            $fun.message(message, 'error');
          }
        })
    },
  },
};
</script>

<style lang="scss" scoped>
</style>