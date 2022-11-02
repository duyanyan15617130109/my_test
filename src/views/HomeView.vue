<template>
  <div>
    <h1>飘窗 demo</h1>
    <div v-if="show" @mouseover="mouseover" @mouseout="mouseout" class="box" :style="{'top':top + 'px','left':left + 'px'}">
      <span @click="close"><i class="el-icon-close"></i></span>
      <div>
        特别提示：这仅仅是一个测试，不要慌。
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MoveWindow',
  data() {
    return {
      show: true, // 是否展现飘窗
      stepX: 1, // 水平方向的步长
      stepY: 1, // 垂直方向的步长
      timer: null, // 定时器
      maxTop: 0, // 最大的 top 值
      maxLeft: 0, // 最大的 left 值
      top: 0,
      left: 0,
    }
  },
  mounted() {
    this.init()
  },
  beforeDestroy() {
    // dom 销毁前清除定时器
    clearInterval(this.timer)
  },
  methods: {
    // 初始化飘窗规则
    init() {    
      // 设置最大的top和left值：根元素可视区域宽高 - 飘窗的宽高 - 边距
      this.maxTop = document.documentElement.clientHeight - 300 - 20;//用来获取页面可视高度
      this.maxLeft = document.documentElement.clientWidth - 400 - 20

      // 设置 top 和 left 的初始值
      this.top = 0
      this.left = 0

      // 创建定时器前清除定时器，避免类似在 onresize 中调用 init() 时，产生多个定时器
      clearInterval(this.timer);
      this.timer = setInterval(() => {
        this.move()
      }, 20)

      this.onresize()
    },
    // 移动函数
    move() {
      if (this.top >= this.maxTop || this.top < 0) {
        this.stepY = -this.stepY
      }
      if (this.left >= this.maxLeft || this.left < 0) {
        this.stepX = -this.stepX
      }

      this.top += this.stepY
      this.left += this.stepX
    },
    // 鼠标悬浮在飘窗时停止移动
    mouseover() {
      clearInterval(this.timer)
    },
    // 鼠标离开飘窗时恢复移动
    mouseout() {
      clearInterval(this.timer)
      this.timer = setInterval(() => {
        this.move()
      }, 20)
    },
    // 关闭飘窗
    close() {
      clearInterval(this.timer)
      this.show = false
    },
    // 窗口大小调整时重置飘窗规则
    onresize() {
      const that = this
      window.onresize = function() {
        that.init()
      }
    },
  }
}
</script>

<style scoped lang="scss">
.box {
  background: #dfe3e5;
  opacity: 0.8;
  width: 400px;
  height: 300px;
  border-radius: 5px;
  position: fixed;
  text-align: left;
  padding: 10px;
  color: #000;
  top: 0;
  left: 0;
  box-shadow: 0 y-shadow 10px 10px rgba(0, 0, 0, 0.2);
  //z-index: 33;

  > span {
    text-align: right;
    position: absolute;
    right: 10px;
    top: 10px;
    color: #1e87f0;
    cursor: pointer;
  }

  > div {
    margin-top: 30px;
  }
}
</style>