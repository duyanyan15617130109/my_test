<template>
  <div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="姓名">
        <el-input v-model="formInline.name" placeholder="请输入姓名"></el-input>
      </el-form-item>
      <el-form-item label="身份证号">
        <el-input v-model="formInline.idCard" placeholder="请输入身份证号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'certificateInput',
  props: {
    pname: {
      type: String,
      default: "",
    },
    xiname: {
      type: String,
      default: "",
    },
  },
  //   props: ["p_model", "xi_model"],
  data() {
    return {
      formInline: {
        name: this.pname,
        idCard: this.xiname
      },
      address: ""
    }
  },
  watch: {
    formInline: {
      handler(newV, oldV) {
        console.log('watch深度监听：', newV, oldV);
        this.$emit("update:pname",newV.name);
        this.$emit("update:xiname",newV.idCard);
      },
      deep: true
    }
    // p_model(val) {
    //   this.address = val;
    // },
    // name(val) {
    //   //设置监听，如果改变就更新 p_model
    //   this.$emit('update:p_model', val);
    // },
    // xi_model(val) {
    //   this.certificate = val
    // },
    // idCard(val) {
    //   this.$emit('update:xi_model', val)
    // }
  },
  methods: {
    onSubmit() {

    },
  }
}
</script>