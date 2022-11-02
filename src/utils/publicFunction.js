import { MessageBox, Message, Notification } from "element-ui";
const publicFunction = {
  /**
   * @description 信息提示弹窗
   * @param {string} message 提示文案
   * @param {string} type 提示弹窗类型
   * 用法 $fun.message('xxxxxxx') 默认为成功提示
   */
  message: (message, type = "success") => {
    if (type == "success") return Message.success(message || "成功");
    if (type == "info") return Message.info(message || "警告");
    if (type == "error") return Message.error(message || "异常");
    if (type == "warning") return Message.warning(message || "异常");
  },

  /**
   * @description 信息提示弹窗
   * @param {string} title 提示标题
   * @param {string} type 提示弹窗类型
   */
  handleConfirm: (text = "确定执行此操作吗？", type, title) => {
    return MessageBox.confirm(text, title || "提示", {
      confirmButtonText: "确定",
      cancelButtonText: "取消",
      type: type || "warning",
    });
  },

  /**
   * @description Notification通知
   * @param {string} title 提示标题
   * @param {string} type 提示弹窗类型
   * @param {string} duration 通知的显示时间
   * @param {string} offset 提示框偏移的距离
   */
  handleNotify: (title, type, duration, offset) => {
    const titleInfo = title;
    const msgType = type || "warning";
    const msgDuration = duration || 2000;
    const myOffset = offset || 200;
    return Notification({
      title: titleInfo,
      type: msgType,
      showClose: true,
      duration: msgDuration,
      offset: myOffset,
    });
  },

  /**
   * @description 中国标准时间转换为年月日
   * @param {string} time 时间
   * @return {string}
   */
  filterTime(time) {
    var date = new Date(time);
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? "0" + m : m;
    var d = date.getDate();
    d = d < 10 ? "0" + d : d;
    return y + "-" + m + "-" + d;
  },

  /**
   * @description  中国标准时间转换为年 月 日 小时 分钟
   * @param {string} time 时间
   * @return {string}
   */
  colationTime(time) {
    let date = new Date(time);
    let y = date.getFullYear();
    let m = date.getMonth() + 1;
    m = m < 10 ? "0" + m : m;
    let d = date.getDate();
    d = d < 10 ? "0" + d : d;
    let h = date.getHours();
    h = h < 10 ? "0" + h : h;
    let minute = date.getMinutes();
    minute = minute < 10 ? "0" + minute : minute;
    let gettime = y + "-" + m + "-" + d + " " + h + ":" + minute;
    return gettime;
  },

  /**
   * @description  获取当前时间 默认返回 当前的年月日
   * @param {string} time 时间
   * @return {string}
   */
  obtainTime(type = "date") {
    let yy = new Date().getFullYear();
    let mm = new Date().getMonth() < 9 ? "0" + (new Date().getMonth() + 1) : new Date().getMonth() + 1;
    let dd = new Date().getDate() < 10 ? "0" + new Date().getDate() : new Date().getDate();
    let getTime = null;
    if (type === "date") getTime = yy + "-" + mm + "-" + dd;
    if (type === "month") getTime = yy + "-" + mm;
    if (type === "year") getTime = yy.toString();
    return getTime;
  },

  /**
   * @description 获取当前登陆用户的身份 用于一些特定类型的判断
   * @return 01 发电企业 02 售电公司 03 电力用户
   */
  getUserType() {
    let type = "",
      user_type = localStorage.getItem("userType");
    if (user_type == "2104") type = "01";
    if (user_type == "2103") type = "02";
    if (user_type == "2102") type = "03";
    return type;
  },
  dataEncry() {
    let Base64 = require("js-base64").Base64;
    let dataEnc;
    if (window.localStorage.getItem("xxpltoken") == null || window.localStorage.getItem("xxpltoken") == undefined) {
      dataEnc = "";
    } else {
      dataEnc = Base64.encode(window.localStorage.getItem("xxpltoken"));
    }

    return dataEnc;
  },
};

export default publicFunction;
