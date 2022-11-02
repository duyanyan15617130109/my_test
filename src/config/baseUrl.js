const env = process.env.VUE_APP_HOST && process.env.VUE_APP_HOST.trim();
let apiBaseUrl = ""; // api地址

switch (env) {
  case "texun": // 生产
    // apiBaseUrl = "http://newzjpx-test.zj.sgcc.com.cn/xxpl-server"; //电力交易内网
    // apiBaseUrl = 'http://192.168.2.175/xxfb-server' //公司服务器
    // apiBaseUrl = "http://172.19.254.17/xxpl-server"; //电力交易外网地址
    //apiBaseUrl = "/xxpl-server"; // 测试地址
    apiBaseUrl = "/gateway/xxpl-server"; // 网关地址
  default: // 网关地址
    apiBaseUrl = "/gateway/xxpl-server";
    //apiBaseUrl = "/xxpl-server"; // 测试地址
    // apiBaseUrl = "http://172.19.254.17/xxpl-server";//电力交易外网地址
    // apiBaseUrl = "http://newzjpx-test.zj.sgcc.com.cn/xxpl-server";
    // apiBaseUrl = "http://172.20.10.8:18080/xxpl-server";
    // apiBaseUrl = "http://172.30.106.33:18080/xxpl-server"; //周凡林
    // apiBaseUrl = "http://192.168.150.198:18080/xxpl-server";
    break;
}
console.log("***apiBaseUrl", apiBaseUrl);
module.exports = {
  apiBaseUrl,
};
