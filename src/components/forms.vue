<template>
  <!--是否行内表单-->
  <div class="ruleForm">
    <el-form ref="form" :inline="inline" :model="formObj.form" :label-width="labelWidth" :rules="formObj.rules">
      <!--标签显示名称-->
      <el-form-item v-for="(item, index) in formObj.formLabel" v-if="!item.hidden" :key="index + item.model" :label="item.label" :prop="item.model" :class="{formInline: inline}">
        <template v-if="!item.hidden">
          <!--根据type来显示是什么标签-->
          <el-input v-if="item.type==='input'" v-model="formObj.form[item.model]" :placeholder="'请输入' + item.label+ (item.labelTip? item.labelTip :'')" clearable v-bind="item.attrs" />
          <el-select v-if="item.type === 'select'" v-model="formObj.form[item.model]" placeholder="请选择" clearable filterable>
            <!--如果是select或者checkbox 、Radio就还需要选项信息-->
            <el-option v-for="it in item.opts" :key="it.value" :label="it.label||it.text" :value="it.value" />
          </el-select>
          <el-switch v-if="item.type === 'switch'" v-model="formObj.form[item.model]" />
          <el-date-picker v-if="item.type === 'date' || item.type === 'datetime'" v-model="formObj.form[item.model]" placeholder="选择日期" :value-format="item.valueFormat || item.dateFormat ||'yyyy-MM-dd'" clearable :type="item.type"
            v-bind="item.attrs" />
          <el-input-number v-if="item.type === 'inputNumber'" v-model="formObj.form[item.model]" v-bind="item.attrs" />
          <template v-if="item.type === 'radioGroup'">
            <el-radio-group v-model="formObj.form[item.model]">
              <el-radio v-for="it in item.opts" :key="it.value" :label="it.value" :disabled="item.disabled" v-bind="it.attrs">
                {{ it.label || it.text }}
              </el-radio>
            </el-radio-group>
          </template>
        </template>
      </el-form-item>
      <!--留一个插槽-->
      <el-form-item>
        <slot />
      </el-form-item>
    </el-form>
  </div>

</template>

<script>
export default {
  name: 'forms',
  props: {
    labelWidth: {
      type: String,
      default: '120px'
    },
    // inline 属性可以让表单域变为行内的表单域
    inline: {
      type: Boolean,
      default: false
    },
    // form 表单数据 formLabel 是标签数据 rules: 规则
    formObj: {
      type: Object,
      default() {
        return {
          form: {},
          formLabel: [],
          rules: {}
        }
      },
      required: true
    }
  },
  methods: {
    // validate(callback) {
    //   this.$refs.form.validate(res => {
    //     callback(res)
    //   })
    // },
    resetFields() {
      this.$refs.form.resetFields()
    }
  }
}
</script>

<style scoped lang="scss">
.ruleForm {
  width: 450px;
  ::v-deep .el-form {
    .el-input {
      width: 296px;
    }
  }
}
</style>
