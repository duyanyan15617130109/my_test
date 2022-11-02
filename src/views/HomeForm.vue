 <!-- 封装表单组件的使用 -->
 <template>
  <div class="box">
    <dy-forms ref="dczForm1" :inline="false" :form-obj="formObj1"></dy-forms>
    <div class="button">
      <el-button type="primary">确定</el-button>
    </div>
  </div>



  
</template>
 <script>
export default {
  components: {

  },
  data() {
    return {
      // 表单数据-编辑添加列
      formObj1: {
        form: {
          name: '',
          dataType: '',
          time: '',
          dataLength: '',
          decimalLength: '',
          required: 1,
          id: '',
          columnType: 1,
          referenceId: ''
        },
        formLabel: [
          { label: '部门', type: 'select', model: 'id', hidden: false, opts: [{ label: '部门1', value: "1" }, { label: '部门2', value: "2" }, { label: '部门3', value: "3" }] },
          { label: '列名', type: 'input', model: 'name', attrs: { maxlength: 10 } },
          { label: '时间', type: 'date', model: 'time' },
          {
            label: '是否必填', type: 'radioGroup', model: 'required',
            opts: [{ label: '必填', value: 1 }, { label: '非必填', value: 0 }]
          },
          {
            label: '列类型', type: 'radioGroup', model: 'columnType',
            opts: [{ label: '输入框', value: 1 }, { label: '选择框', value: 0 }]
          },
          {
            label: '数据类型', type: 'select', model: 'dataType',
            opts: [{ label: '部门1', value: "1" }, { label: '部门2', value: "2" }, { label: '部门3', value: "3" }]
          },
          // { label: '数据长度', type: 'inputNumber', model: 'dataLength', attrs: { min: 0, max: 18 },hidden: true },
          // { label: '小数位数', type: 'inputNumber', model: 'decimalLength', attrs: { min: 0, max: 8 },hidden: true },
          { label: '辅助属性', type: 'select', model: 'referenceId', opts: [], hidden: true }
        ],
        rules: {
          id: [{ required: true, message: '请选择', trigger: 'blur' }],
          name: [{ required: true, message: '请输入', trigger: 'blur' }],
          time: [{ required: true, message: '请选择时间', trigger: 'blur' }],
          dataType: [{ required: true, message: '请选择', trigger: 'blur' }],
          referenceId: [{ required: true, message: '请选择', trigger: 'blur' }],
          dataLength: [{ required: true, message: '请输入', trigger: 'blur' }]
        }
      },
    }
  }
}
 </script>
<style scoped lang="scss">
.box{
  width: 320px;
  .button{
    display: flex;
    justify-content: flex-end;
  }
}
</style>