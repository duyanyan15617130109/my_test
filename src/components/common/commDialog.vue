<template>
  <el-dialog :title="title" :visible="visible" :width="width" :before-close="handleClose" :close-on-click-modal="false" :close-on-press-escape="false">
    <slot></slot>
  </el-dialog>
</template>

<script>
export default {
  name: "commDialog",
  props: {
    title: {
      type: String,
      default: '新增菜单'
    },
    width: {
      type: String,
      default: '48%'
    },
    visible: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {};
  },
  mounted() { },
  methods: {
    handleClose() {
      this.$emit('update:visible', false)
      this.$emit('close', false)
    }
  },
};
</script>
<style scoped lang="scss">
</style>