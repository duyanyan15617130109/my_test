<template>
  <div style="padding:20px">
    <el-table :data="tableData" :span-method="arraySpanMethod" border style="width: 100%">
      <el-table-column prop="name" label="结算主体" align="center">
      </el-table-column>
      <el-table-column prop="amount1" label="发电户号" align="center">
      </el-table-column>
      <el-table-column prop="id" label="机组id" align="center">
      </el-table-column>
      <el-table-column prop="amount3" label="上网电量" align="center">
      </el-table-column>
      <el-table-column prop="amount4" label="意向电量" align="center">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        id: '12987122',
        name: '主体1',
        amount1: '1111',
        amount2: '20',
        amount3: 100,
        amount4: 50
      }, {
        id: '12987122',
        name: '主体1',
        amount1: '1111',
        amount2: '20',
        amount3: 100,
        amount4: 50
      }, {
        id: '12987122',
        name: '主体1',
        amount1: '1111',
        amount2: '20',
        amount3: 12,
        amount4: 100
      }, {
        id: '12987125',
        name: '王小虎',
        amount1: '11',
        amount2: '20',
        amount3: 12,
        amount4: 100
      }, {
        id: '12987126',
        name: '王小虎',
        amount1: '539',
        amount2: '20',
        amount3: 12,
        amount4: 100
      }],
      spanArr: [], //遍历数据时，根据相同的标识去存储记录
      pos: 0 // 二维数组的索引
    }
  },
  created() {
    this.getSpanArr(this.tableData)
  },
  methods: {
    /**
     * row:表格行
     * column:表格列
     * rowIndex：表格行下标
     * columnIndex：表格列下标
     * */
    // 设置表格合并单元格的方法（合并单行的方法）
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      debugger
      // 页面列表上 表格合并行 -> 第几列(从0开始)
      // 需要合并多个单元格时 依次增加判断条件即可
      //columnIndex === 0这句话代表你合并的是第一列的，那么如果你想第二列也合并就下面else再来一次
      if (columnIndex === 0 || columnIndex === 1 || columnIndex === 2 || columnIndex === 3) {
        // 二维数组存储的数据 取出
        const _row = this.spanArr[rowIndex];
        const _col = _row > 0 ? 1 : 0;
        return {
          rowspan: _row,
          colspan: _col
        }
        //这个位置，else if在来一次，1是角标，代表数组中的角标1，也就是第二列啦。如果你还想第三列参与合并，那就再else if (columnIndex === 2)，以此类推就行。
      } else {
        //不可以return {rowspan：0， colspan: 0} 会造成数据不渲染， 也可以不写else，eslint过不了的话就返回false
        return false
      }
    },
    // 合并多行单元格的方法
    arrySpanMore({ row, column, rowIndex, columnIndex }) {
      // 从第一行开始合并
      console.log("合并", { row, column, rowIndex, columnIndex })
      if (rowIndex === 0) {
        // 从第二列开始合并
        if (columnIndex === 1) {
          return {
            // 合并数量为两行，三列
            rowspan: 2,
            colspan: 3
          }
        } else if (columnIndex === 2 || columnIndex === 3) {
          // 忽略第一行的三、四列的数据
          return [0, 0]
        }
      } else if (rowIndex === 1 && (columnIndex === 1 || columnIndex === 2 || columnIndex === 3)) {
        // 忽略第二行的第二、三、四；列的数据
        return [0, 0]
      }
    },
    getSpanArr(data) {
      // debugger
      this.spanArr = []
      this.pos = 0
      for (var i = 0; i < data.length; i++) {
        //判断是否是第一项
        if (i === 0) {
          this.spanArr.push(1);
          this.pos = 0
        } else {
          //不是第一项时，就根据标识去存储
          // 判断当前元素与上一个元素是否相同，这里的tire_specifications改成你们tableData中要合并的名字，一般是name，我这个因为我吧name改成了tire_specifications，这个逻辑是如果发现名字挨在一起的还是一样的那就合并成一个，如果不是那就正常显示。
          if (data[i].id === data[i - 1].id) {
            //如果相同代表要合并，就给上一个元素合并数+1
            this.spanArr[this.pos] += 1;
            this.spanArr.push(0);
          } else {
            // 没有符合的数据时，要记住当前的index
            this.spanArr.push(1);
            this.pos = i;
          }
        }
      }
      console.log(this.spanArr, this.pos)
    },


  }
}
</script>

<style>
/* 设置上边框的颜色 */
.el-table td,
.el-table th.is-leaf,
.el-table--border,
.el-table--group {
  border-color: green;
}
/* 设置下边框颜色 */
.el-table--border::after,
.el-table--group::after,
.el-table::before {
  background-color: blue;
}
</style>

