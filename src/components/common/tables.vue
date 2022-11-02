<template>
  <div class="tableComp">
    <!-- stripe:是否为斑马纹 table; -->
    <!-- border:是否带有纵向边框; -->
    <!-- fit:列的宽度是否自撑开; -->
    <!-- highlight-current-row:是否要高亮当前行; -->
      <!-- :summary-method="getSummaries"
      :show-summary = "showSummary" -->
    <el-table
      :span-method="arraySpanMethod"
      :data="tableData"
      border
      id="table"
      ref="multipleTable"
      highlight-current-row
      style="font-size: 14px;width:100%;"
      @row-dblclick="rowDblclick"
      @sort-change="changeTableSort"
      @selection-change="handleSelectionChange"
      v-loading="loading"
      element-loading-text="拼命加载中"
      element-loading-background="rgba(0, 0, 0, 0.3)"
    >
      <!-- 是否需要全选， isShowPage控制-->
      <!-- prop: 字段名name, label: 展示的名称, fixed: 是否需要固定(left, right), minWidth: 设置列的最小宽度(不传默认值),
          oper: 是否有操作列, oper.name: 操作列字段名称, oper.clickFun: 操作列点击事件, formatData: 格式化内容 -->
      <slot></slot>
      <el-table-column
        v-for="(th, key) in tableHeader"
        :key="key"
        :prop="th.prop"
        :label="th.label"
        :fixed="th.fixed"
        :width="th.width"
        :min-width="th.minWidth"
        show-overflow-tooltip
        :sortable="th.sortable"
        align="left"
      >
        <!-- 加入template主要是有操作一栏， 操作一栏的内容是相同的， 数据不是动态获取的，这里操作一栏的名字定死（oper表示是操作这一列，否则就不是） -->
        <template slot-scope="scope">
          <template v-if="th.oper">
            <!-- 表格操作 -->
            <span class="text-blue" v-for="(o, key) in th.oper" :key="key" @click="o.clickFun(scope.$index,scope.row)">
              <a style="margin-right: 10px" v-if="scope.row.btns && scope.row.btns.includes(key)">{{ o.name }}</a>
              <a style="margin-right: 10px" v-if="enums && enums[scope.row[enumsStatus]].includes(o.name)">{{ o.name }}</a>
            </span>
          </template>
          <!-- <template v-else-if="th.link">
            <a class="link" @click="th.download(scope.row[th.prop])">{{ scope.row[th.prop] }}</a>
          </template> -->
          <!-- 表格附件多个 -->
          <template v-else-if="th.split && scope.row[th.prop]">
            <a v-for="(item,index) in scope.row[th.prop].split(',')"  @click="th.download(index,scope.row)" :key="index" class="link">{{item}}<i v-if="index < scope.row[th.prop].split(',').length -1">、</i></a>
          </template>
          <!-- 标题跳转 -->
          <template v-else-if="th.url">
            <span class="urlRouter" @click="th.goto(scope.row)">
              {{ scope.row[th.prop] }}
            </span>
          </template>
          <!-- 上传总部情况 ✔ x -->
          <template v-else-if="th.upload">
            <!-- {{scope.row[th.prop]  == 0 ?'未上传':'已上传'}}  scope.row[th.prop] == 1 ? 'el-icon-circle-check' : 'el-icon-circle-close'-->
            <i :class="scope.row[th.prop] == -1 ? '' : (scope.row[th.prop] == 1 ? 'el-icon-circle-check' : 'el-icon-circle-close') "></i><span :class="scope.row[th.prop] == 1 ?'isUpload':''">{{scope.row[th.prop] == -1 ? '' : (scope.row[th.prop] == 0 ? '未上传':'已上传')}}</span>
          </template>
          <!-- 根据状态显示不同图标及文字 -->
          <template v-else-if="th.isType">
            <img class="typeIcon" :src="require(`@/assets/img/${iconClass(scope.row[th.prop])}.png`)" alt="" />
            <span v-if="scope.row[th.prop] != 1" class="urlRouter" @click="th.models(scope.row)">{{ toText(scope.row[th.prop])}}</span>
            <span v-else>{{ toText(scope.row[th.prop])}}</span>
          </template>
          <!-- 表格开关 -->
          <template v-else-if="th.isOpen">
            <el-switch class="tableScopeSwitch" @change="th.change(scope.row)" v-model="scope.row[th.prop]" active-text="是" inactive-text="否" active-color="#13ce66" inactive-color="#ccc">
            </el-switch>
          </template>
          <!-- 表格进度条 -->
          <template v-else-if="th.progress">
            <el-progress :percentage="Number(scope.row[th.prop])"></el-progress>
          </template>
          <template v-else>
            {{ scope.row[th.prop] }}
          </template>
          
        </template>
      </el-table-column>
    </el-table>
    <gc-pagination v-show="total > 0" 
      :total="total" 
      :page.sync="listQuery.page" 
      :limit.sync="listQuery.limit"
       :hidden="isShowPage" 
       :ifSizeChange="ifSizeChange"
       :pageSizes="pnPageSize" 
       @pagination="getList" />
  </div>
</template>

<script>
export default {
  name: 'tables',
  // 传入的数据
  props: {
    tableData: {
      // 表格数据
      type: Array,
      default:  () => []
    },
    enums: {
      type: Object,
      default:  () =>{}
    },
    enumsStatus: {
      type: String,
      default:  ''
    },
    rowDblclick: {
      // 单行点击事件
      type: Function,
      default: (row, event, column) => {
        console.log('default: ' + row + '---' + event + '---' + column);
      },
    },
    // handleSelectionChange: {
    //   // 当选择项发生变化时会触发该事件
    //   type: Function,
    //   default: () => () => {},
    // },
    tableHeader: {
      // 表格头部
      type: Array,
      default: function () {
        return [];
      },
    },
    tabheight: {
      // 表格高度
      type: String,
      default: '100%',
    },
    loading: {
      // 加载等待
      type: Boolean,
      default: false,
    },
    isShowPage: {
      // 是否显示分页组件
      type: Boolean,
      default: false,
    },
    total: {
      // 总数
      type: Number,
      default: 0,
    },
    listQuery: {
      // 分页
      type: Object,
      default: () => {
        return {
          page: 1,
          limit: 20,
        };
      },
    },
    arraySpanMethod: {
      type: Function,
      default: () => () => {},
    },
    getSummaries: {
      type: Function,
      default: () => () => {},
    },
    sumList: {
      // 合计位置 假设第1和第3列需要合并
      type: Array,
      default: function () {
        return [];
      },
    },
    showSummary: {
      // 是否显示合计
      type: Boolean,
      default: false,
    },
    ifSizeChange: {
      // 
      type: Boolean,
      default: false,
    },
    pnPageSize: {
      type: Array,
      default() {
        return [10, 20, 30, 40,50]
      }
    },
  },

  data() {
    return {};
  },
  computed: {
    iconClass() {
      return function (item) {
        let url = '';
        switch (item) {
          case 1: //已保存
            url = 'type-2';
            break;
          case 2: //待审批
            url = 'type-4';
            break;
          case 3: //已发布
            url = 'type-1';
            break;
          case 4: //被驳回
            url = 'type-3';
            break;
          case 5: //删除中
            url = 'type-5';
            break;
          case 6: // 已删除
            url = 'type-6';
            break;
          case 7: //删除驳回
            url = 'type-7';
            break;
          default:
            url = 'type-2';
        }
        return url;
      };
    },
    toText(){
      return function (val) {
        let text = ""
        switch (val) {
          case 1: //已保存
            text = '已保存';
            break;
          case 2: //待审批
            text = '待审批';
            break;
          case 3: //已发布
            text = '已发布';
            break;
          case 4: //被驳回
            text = '被驳回';
            break;
          case 5: //删除中
            text = '删除中';
            break;
          case 6: // 已删除
            text = '已删除';
            break;
          case 7: //删除驳回
            text = '删除驳回';
            break;
        }
        return text;
      }
    }
  },
  methods: {
    handleSizeChange() {},
    handleCurrentChange() {},
    getList(val) {
      this.$emit('pagination', val);
    },
    changeTableSort(column){
      this.$emit('changeTableSort',column)
    },
    handleSelectionChange(val){
      this.$emit('handleSelectionChange',val)
    }
  },
};
</script>

<style lang="scss" scoped>
.tableComp {
  ::v-deep .el-pagination {
    .el-pagination__total {
      padding-right: 30px;
      margin-right: 40px;
      position: relative;
    }
    .el-pagination__total::after {
      position: absolute;
      right: 0;
      top: 0;
      content: '数据' !important;
      display: block;
    }
  }
  .link {
    color: #2190cc;
    text-decoration: underline;
  }
  .text-blue{
    color: #757575;
  }
  .typeIcon {
    width: 16px;
    height: 16px;
    vertical-align: middle;
    margin-right: 5px;
  }

  ::v-deep .tableScopeSwitch .el-switch__label {
    position: absolute;
    display: none;
    color: #fff;
  }
  /*打开时文字位置设置*/
  ::v-deep .tableScopeSwitch .el-switch__label--right {
    z-index: 1;
    right: 25px; /*不同场景下可能不同，自行调整*/
  }
  /*关闭时文字位置设置*/
  ::v-deep .tableScopeSwitch .el-switch__label--left {
    z-index: 1;
    left: 25px; /*不同场景下可能不同，自行调整*/
  }
  /*显示文字*/
  ::v-deep .tableScopeSwitch .el-switch__label.is-active {
    display: block;
  }
  ::v-deep .tableScopeSwitch.el-switch .el-switch__core,
  .el-switch .el-switch__label {
    width: 52px !important; /*开关按钮的宽度大小*/
    height: 20px;
  }
  .urlRouter{
    font-family: "PingFang SC";
    font-weight: 400;
    text-decoration: underline;
    font-size: 14px;
    text-align: left;
    cursor: pointer;
    color: #2190cc;
  }
  .isUpload{
    color: #2190CCFF;
  }
  .el-icon-circle-check{
    color: #2190CCFF;
    font-size: 16px;
    margin-right: 5px;
  }
  .el-icon-circle-close{
    color: red;
    font-size: 16px;
    margin-right: 5px;
  }
}
</style>
