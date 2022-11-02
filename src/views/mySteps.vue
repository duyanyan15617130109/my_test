<!-- 切换标签业和步骤条联动 -->
<template>
  <div class="box">
    <!-- 卡片视图 -->
    <el-card>
      <!-- 提示区域 -->
      <el-alert title="添加商品信息" type="info" center show-icon :closable="false"></el-alert>

      <!-- 步骤条区域 -->
      <el-steps :space="200" :active="activeIndex - 0" finish-status="success" align-center>
        <el-step title="基本信息"></el-step>
        <el-step title="商品参数"></el-step>
        <el-step title="商品属性"></el-step>
        <el-step title="商品图片"></el-step>
        <el-step title="商品内容"></el-step>
        <el-step title="完成"></el-step>
      </el-steps>

      <!-- tab栏区域 -->
      <el-tabs :tab-position="'left'" v-model="activeIndex" style="height: 200px;" @tab-click="handleClick" :before-leave="handBefore">
        <el-tab-pane label="基本信息" name='0'>
          <el-form label-width="80px" :model="form" ref="form">
            <el-form-item label="商品名" prop="name">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="商品质量" prop="quality">
              <el-input v-model="form.quality"></el-input>
            </el-form-item>
            <el-form-item label="商品数量" prop="number">
              <!-- <el-input v-model="form.number"></el-input> -->
              <el-input-number v-model="form.number" :min="0" label="描述文字"></el-input-number>
            </el-form-item>
            <div class="button"><el-button @click="reset">重置</el-button></div>
            
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="商品参数" name='1'>商品参数</el-tab-pane>
        <el-tab-pane label="商品属性" name='2'>商品属性</el-tab-pane>
        <el-tab-pane label="商品图片" name='3'>商品图片</el-tab-pane>
        <el-tab-pane label="商品内容" name='4'>商品内容</el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '0',
      form: {
        name: '', //商品名
        quality: '',//商品质量
        number: 0,//商品数量
      }
    }
  },
  methods: {
    handleClick(tab) {
      // console.log(tab.name,this.activeIndex);
    },
    handBefore(activeName, oldActiveName) {
      console.log("activeName", activeName, "oldActiveName", oldActiveName);
      if (oldActiveName == '0' && this.form.name == "" && this.form.quality == "") {
        this.$message.error('请先填写商品基本信息');
        return false;
      } else {
        console.log("表单数据", this.form)
      }
    },
    reset(){
      this.$refs.form.resetFields();
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  ::v-deep .el-card__body {
    .el-tabs{
      height: 100% !important
    }
    .el-form {
      width: 380px;
      margin-top: 10px;
      .el-input {
        width: 300px;
      }
      .el-input-number .el-input {
        width: 180px;
      }
      .button{
        display: flex;
        justify-content: flex-end;
      }
      
    }
  }
}
</style>

