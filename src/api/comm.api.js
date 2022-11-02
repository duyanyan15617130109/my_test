exports.api = {
  // 字典表
  selDict: { url: "/MenuRest/selDict", method: "POST" },
  getUserInfo: { url: "/UserAccount/userId", method: "POST" },
  // 监控数据刷新
  refreshData: { url: "/statisticsRest/requestDispatch", method: "POST" },
  logins: { url: "/UserAccount/userLogin", method: "GET" },
};
