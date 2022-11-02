exports.api = {
  // 监控统计

  // 查询点击量统计
  queryClick: { url: "/clikStat/queryClick", method: "POST" },

  // 数据点击量统计数据导出
  export: { url: "/clikStat/export", method: "GET" },

  // 查询数据日报表格数据
  queryContent: { url: "/dailyData/queryDailyData", method: "POST" },

  // 数据日报数据导出
  dataExport: { url: "/dailyData/export", method: "GET" },

  // 数据日报查询文章列表
  queryReportList: { url: "/dailyData/queryContent", method: "POST" },

  // 数据监控及统计
  queryStatistics: { url: "/statisticsRest/queryStatistics", method: "POST" },

  // 数据监控及统计准时性
  queryOnTime: { url: "/statisticsRest/queryOnTime", method: "POST" },

  // 数据监控及统计查询负责人信息
  queryInfo: { url: "/statisticsRest/queryInfo", method: "POST" },

  // 数据监控及统计数据导出
  monitorDataExport: { url: "/statisticsRest/export", method: "GET" },
};
