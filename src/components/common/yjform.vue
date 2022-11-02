<template>
  <div>
    <el-form ref="form" class="t-form" :model="formData" :rules="rules" :label-width="labelWidth">
      <el-form-item v-for="(item, index) in fieldList" :key="index" :prop="item.value" :label="item.label" :rules="item.rules">
        <!-- solt -->
        <template v-if="item.type === 'slot'">
          <slot :name="'form-' + item.value" />
        </template>
        <!-- input -->
        <el-input
          v-if="item.type === 'input' || item.type === 'password'"
          :type="item.type"
          v-model="formData[item.value]"
          :disabled="item.disabled"
          :clearable="item.clearable || true"
          :placeholder="getPlaceholder(item)"
          @change="handelEvent(item.event, formData[item.value])"
        ></el-input>
        <!-- select -->
        <el-select
          v-if="item.type === 'select'"
          v-model="formData[item.value]"
          :disabled="item.disabled"
          :clearable="item.clearable || true"
          :placeholder="getPlaceholder(item)"
          @change="handelEvent(item.event, formData[item.value])"
        >
          <el-option
            v-for="(opt, optIdx) in listTypeInfo[item.list]"
            :key="optIdx"
            :label="opt[item.arrLabel]"
            :value="opt[item.arrKey]"
          />
        </el-select>
        <!-- 单个日期选择框 -->
        <el-date-picker
          v-if="item.type === 'date'"
          v-model="formData[item.value]"
          :type="item.dateType"
          :picker-options="item.TimePickerOptions"
          :clearable="item.clearable === false ? item.clearable : true"
          :disabled="item.disabled"
          :value-format="item.format||'yyyy-MM-dd'"
          :placeholder="getPlaceholder(item)"
          @change="handleEvent(item.event,$event,item.value)"
        />
      </el-form-item>
      <div v-if="isOperator">
        <el-button
          v-for="btn in operatorList"
          :key="btn.label"
          :type="btn.type"
          :icon="btn.icon"
          :size="btn.size || 'medium'"
          @click="btn.fun(btn)"
        >
          {{btn.label}}
        </el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'yjform',
  props: {
    // 表单数据
    formData: {
      type: Object,
      default: () => {},
    },
    // 表单渲染数据
    fieldList: {
      type: Array,
      default: () => [],
    },
    // 检验规则
    rules: {
      type: Object,
      default: () => {},
    },
    // 操作按钮list
    operatorList: {
      type: Array,
      default: () => {
        return [];
      },
    },
    // 下拉选项数据
    listTypeInfo: {
      type: Object,
      default: () => {
        return {};
      },
    },
    // label宽度
    labelWidth: {
      type: String,
      default: '120px',
    },
    // ref
    refObj: {
      type: Object,
    },
    // 是否显示操作按钮
    isOperator: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
    };
  },
  watch: {
    refobj: {
      formData (val) {
        console.log('immediate')
        this.$emit('update:refObj', this.$refs.form)
      },
      deep: true
    }  
  },
  mounted () {
     this.$emit('update:refObj', this.$refs.form)
  },
  methods: {
    // 得到placeholder的显示
    getPlaceholder(row) {
      let placeholder;
      // 请输入type
      const inputArr = ['input', 'textarea'];
      // 请选择type
      const selectArr = ['select', 'time', 'select-obj', 'date', 't-date'];
      if (inputArr.includes(row.type)) {
        placeholder = '请输入' + row.label;
      } else if (selectArr.includes(row.type)) {
        placeholder = '请选择' + row.label;
      } else {
        placeholder = row.label;
      }
      return placeholder;
    },
    // 绑定相关事件
    handelEvent (type, val) {
      this.$emit('handelEvent', type, val)
    },
    onSubmit() {
      console.log('submit!');
    },
  },
};
</script>

<style lang="scss" scoped>
// 自定义form相关
.t-form {
  .el-form-item {
    display: inline-block;
    width: 24%;
    .el-form-item__content {
      .el-input,
      .el-select,
      .el-textarea {
        width: 100%;
      }
      .el-input-number {
        .el-input {
          width: inherit;
        }
      }
    }
  }
  .t-form-block {
    display: block;
    width: 100%;
    .el-form-item__content {
      .el-textarea {
        width: 100%;
      }
    }
  }
}
.t-form-block {
  .el-form-item {
    display: block;
    .el-form-item__content {
      .el-input,
      .el-select,
      .el-textarea {
        width: inherit;
      }
      .el-input-number {
        .el-input {
          width: inherit;
        }
      }
    }
  }
  .el-form-block {
    display: block;
    width: 100%;
    .el-form-item__content {
      .el-textarea {
        width: 100%;
      }
    }
  }
}
</style>
