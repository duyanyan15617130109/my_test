<!-- 折线图 -->
<template>
  <div>
    <div class="container">
      <div id="echart"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  // 页面初始化挂载dom
  mounted() {
    this.getLoadEcharts();
  },
  methods: {
    getLoadEcharts() {
      var myChart = this.$echarts.init(document.getElementById("echart"));
      let option = {
        title: {
          text: "折线堆叠图", // 折线图堆叠的意思就是：第二条线的数值=本身的数值+第一条线的数值，第三条的数值=第二条线图上的数值+本身的数值，以此类推......
        }, // 折线图标题
        tooltip: {
          trigger: "axis",
        }, // 气泡提示框，常用于展现更详细的数据 鼠标悬浮交互时的信息提示
        legend: {
          data: ["Email", "Union Ads", "Video Ads", "Direct", "Search Engine"],
        }, // 图例，每个图表最多仅有一个图例
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        }, // 直角坐标系内绘图网格
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },// 工具栏。内置有导出图片，数据视图，动态类型切换，数据区域缩放，重置五个工具。
        xAxis: {
          type: "category", // 类目轴，适用于离散的类目数据。为该类型时类目数据可自动从 series.data 或 dataset.source 中取，或者可通过 xAxis.data 设置类目数据。
          boundaryGap: false, // 坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样。
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },// 直角坐标系 grid 中的 x 轴，
        yAxis: {
          type: "value", //数值轴，适用于连续数据。
        }, // 直角坐标系 grid 中的 y 轴，一般情况下单个 grid 组件最多只能放左右两个 y 轴
        series: [
          {
            name: "Email",
            type: "line",
            stack: "Total",
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: "Union Ads", // 系列名称，用于tooltip的显示，legend 的图例筛选，在 setOption 更新数据和配置项时用于指定对应的系列。
            type: "line",
            stack: "Total", // 
            data: [220, 182, 191, 234, 290, 330, 310],
          },
          {
            name: "Video Ads",
            type: "line",
            stack: "Total",
            data: [150, 232, 201, 154, 190, 330, 410],
          },
          {
            name: "Direct",
            type: "line",
            stack: "Total",
            data: [320, 332, 301, 334, 390, 330, 320],
          },
          {
            name: "Search Engine",
            type: "line",
            stack: "Total",
            data: [820, 932, 901, 934, 1290, 1330, 1320],
          },
        ],
      };
      myChart.setOption(option);
    },
  },
};
</script>
<style scoped>
.container {
  width: 800px;
  height: 400px;
  margin-left: 30px;
}
#echart {
  width: 100%;
  height: 100%;
}
</style>

