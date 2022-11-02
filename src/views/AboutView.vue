<template>
  <div class="test">
    <gc-tables :tableData="tableData" :tableHeader="tableHeader" :loading="loading" :isShowPage="isShowPage" :total="total" :listQuery="pages" @pagination="getLocalData" @handleSelectionChange="handleSelectionChange">
      <el-table-column type="selection" width="55">
      </el-table-column>
      <el-table-column type="index" width="80" label="序号">
      </el-table-column>
    </gc-tables>
    <!-- <div style="margin-top: 20px">
      <el-button @click="selectionChange">打印选中的数据</el-button>
    </div> -->
    <div v-show="multipleShow">{{multipleSelection}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pages: {
        limit: 10,
        page: 1
      },
      loading: false,
      isShowPage: true,
      total: 1,
      tableHeader: [
        { prop: "theme", label: "主题" },
        { prop: "detailInfo", label: "详情" },
        { prop: "file", label: "附件", },
        { prop: "createTime", label: "填报时间" },
      ],
      tableData: [
        {
          theme: "测试1",
          detailInfo: "测试详情",
          file: "测试.pdf",
          createTime: "2022-03-21"

        },
        {
          theme: "测试2",
          detailInfo: "测试详情",
          file: "测试.pdf",
          createTime: "2022-03-21"

        },
        {
          theme: "测试3",
          detailInfo: "测试详情",
          file: "测试.pdf",
          createTime: "2022-03-21"

        }
      ],
      multipleSelection: [],
      multipleShow:true
    }
  },
  methods: {
    getLocalData() {
      console.log("分页被触发了")
    },
    
    handleSelectionChange(val) {
      this.multipleSelection = val;
      console.log("选中的数据",this.multipleSelection)
    },
    selectionChange(){
      if(this.multipleSelection.length === 0){
        console.log("没有选中的数据");
        this.multipleShow = false
      }else{
        this.multipleShow = true
      }
    }
  }
}
</script>
<style scoped lang="scss">
.test {
  background: #fff;
  width: 100%;
  padding: 20px;
}
</style>