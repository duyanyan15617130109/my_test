<template>
  <div>
    <div>
      <el-table :data="tableData">
        <!-- 常规表头 -->
        <el-table-column
          v-for="(item, index) in columns"
          :key="index"
          :label="item.label"
          :prop="item.prop"
          :min-width="item['min-width']"
          :align="item.align || 'center'"
          :show-overflow-tooltip="item.showTooltip"
        >
          <template slot-scope="scope">
             <!-- render渲染 -->
            <template v-if="item.render">
              <RenderCol
                :column="item"
                :row="scope.row"
                :render="item.render"
                :index="scope.$index"
              />
            </template>
            <!-- customRender渲染 -->
            <template v-if="item.customRender">
              <OptComponent
                v-for="(comp, i) in item.customRender.comps"
                :key="scope.$index + i.toString()"
                v-bind="comp"
                :scope="scope"
              />
            </template>
            <!-- 插槽 -->
            <template v-if="item.slotName">
              <slot :param="scope"> </slot>
            </template>
            <!-- 过滤器 -->
            <template v-else-if="item.filters">
              <span v-if="item.filters.obj">
                {{ item.filters.obj[scope.row[item.prop]] }}
              </span>
            </template>
            <!-- 普通渲染 -->
            <span v-else>{{ scope.row[item.prop] }}</span>
          </template>
        </el-table-column>
        <!-- <slot></slot> -->
        <el-table-column
          v-if="table.operator"
          :fixed="table.operatorConfig && table.operatorConfig.fixed"
          :label="(table.operatorConfig && table.operatorConfig.label) || '操作'"
          :min-width="(table.operatorConfig && (table.operatorConfig.width || table.operatorConfig.minWidth)) || 100"
          :align="(table.operatorConfig && table.operatorConfig.align) || 'center'"
          class-name="operator"
        >
          <template slot-scope="scope">
            <div class="operator_btn" :style="table.operatorConfig && table.operatorConfig.style">
              <el-button
                v-for="(item, index) in table.operator"
                :key="index"
                @click="item.fun && item.fun(scope.row, scope.$index, tableData)"
                :type="item.type || 'text'"
                :style="item.style"
                :icon="item.icon ? item.icon : ''"
                :disabled="item.disabled"
                size="small"
              >
                <!-- v-show="checkIsShow(scope, item)" -->
                <!-- customRender渲染 -->
                <template v-if="item.customRender">
                  <OptComponent v-for="(comp, i) in item.customRender.comps" :key="scope.$index + i.toString()" v-bind="comp" :scope="scope" />
                </template>
                <!-- render渲染 -->
                <template v-if="item.render">
                  <!-- <render-col :column="item" :row="scope.row" :render="item.render" :index="scope.$index" /> -->
                </template>
                <span v-if="!item.render && !item.customRender">{{ item.text }}</span>
              </el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- <div>
      {{ columns }}
    </div> -->
  </div>
</template>

<script>
import OptComponent from './OptComponent.vue'
import RenderCol from './RenderCol.vue'

export default {
  name: 'yjtable',
  components: {OptComponent, RenderCol},
  props: {
    // 表单数据
    table: {
      type: Object,
      default: () => {},
    },
    // 表单渲染数据
    columns: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      tableData: this.table.data,
    };
  },
  methods: {
    // 是否显示表格操作按钮
    checkIsShow (scope, item) {
      let isNoShow = false
      if (item.noshow) {
        item.noshow.map(rs => {
          rs.isShow = typeof rs.val === 'string'
            ? (rs.val === 'isHadVal' ? (scope.row[rs.key] ? 'true' : 'false') : 'true')
            : (rs.val.includes(scope.row[rs.key]) ? 'false' : 'true')
        })
        isNoShow = item.noshow.every(key => {
          return key.isShow === 'true'
        })
      } else {
        isNoShow = true
      }
      return (!item.show || item.show.val.includes(scope.row[item.show.key])) && isNoShow
    },
  }
};
</script>

<style lang="scss" scoped>
</style>