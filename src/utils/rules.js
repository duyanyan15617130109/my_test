/**
 * @description From表单验证规则  可用于公用的校验部分
 * @return {function}
 */
let FormValidate = (function () {
  function FormValidate() {}
  FormValidate.Form = function () {
    return {
      // 联系方式的验证
      checkPhone(rule, value, callback) {
        let regPone = null;
        let mobile = /^1[3-9]\d{9}$/; // 手机
        let tel = /^((0\d{3,4})-)(\d{8})(-(\d{3,}))?$/; // 座机
        if (value !== null && value.charAt(0) === "0") {
          // charAt查找第一个字符方法，用来判断输入的是座机还是手机号
          regPone = tel;
        } else if (value !== null && value.charAt(0) !== "0") {
          regPone = mobile;
        }
        if (value == "") {
          return callback(new Error("请输入联系方式"));
        } else if (!regPone.test(value)) {
          return callback(new Error("请输入正确的联系方式格式,其中座机格式'xxxx-xxxxxxxx或xxx-xxxxxxxx'"));
        } else {
          callback();
        }
      },
      // 保留两位小数的验证
      verification(rule, value, callback) {
        let reg = /^\d+.?\d{0,2}$/;
        if (!value) {
          callback(new Error("请输入内容"));
        } else if (!Number(value)) {
          callback(new Error("请输入数字"));
        } else {
          if (reg.test(value)) {
            callback();
          } else {
            callback(new Error("小数点后最多只能输入两位"));
          }
        }
      },
      //只能输入中文、英文、数字、各种标点符号，不能输入特殊字符
      verifyChinese(rule, value, callback) {
        //匹配这些中文标点符号 。 ？ ！ ， 、 ； ： “ ” ‘ ' （ ） 《 》 〈 〉 【 】
        let reg = /^[\u4e00-\u9fa5_a-zA-Z0-9_;_；_。_【_】_[_\]_、_《_》_？_！_!_'_"_“_”_‘_’_._(_（_)_）_,_，_:_：_—_\-_/_\n]+$/;
        if (!reg.test(value) && value !== "") {
          callback(new Error("只能输入中文、英文、数字、各种标点符号"));
        } else {
          callback();
        }
      },
      // 邮箱校验
      veEmail(rule, value, callback) {
        let regex = /^([A-Za-z0-9_\-\.\u4e00-\u9fa5])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,8})$/g;
        if (!value) {
          callback(new Error("请输入邮箱"));
        } else if (!regex.test(value)) {
          callback(new Error("请输入正确的邮箱！"));
        } else {
          callback();
        }
      },
      //  数字，整数，不能为负数
      veNumber(rule, value, callback) {
        let reg = /^\+?[0-9]\d*$/;
        if (!reg.test(value) && value !== "") {
          callback(new Error("请输入正确的数字，整数！"));
        } else {
          callback();
        }
      },
      //  依申请披露校验
      numbersEnglish(rule, value, callback) {
        let reg = /^[0-9A-Z]+$/; //只能输入数字和大写英文字母
        let regex = /^[0-9]*$/;
        let regCom = /^[\u4e00-\u9fa5_a-zA-Z0-9_(_（_)_）_,_，_:_：_—_\-_/_\n]+$/;
        if (reg.test(value) || regex.test(value) || regCom.test(value)) {
          callback();
        } else {
          callback(new Error("只能输入中文、英文、数字、括号（包括全角和半角括号）"));
        }
      },
      // 只能输入数字，小数点前面最多11位，小数点后面最多4位，不能为负数
      verifyDecimal(rule, value, callback) {
        let reg = /^([1-9]\d{0,10}|0)(\.\d{1,4})?$/;
        if (!value) {
          callback(new Error("请输入内容"));
        } else {
          if (reg.test(value)) {
            callback();
          } else {
            callback(new Error("小数点前面最多11位,小数点后面最多4位,不能为负数"));
          }
        }
      },
      // 只能输入中文和英文 联系人
      veChineseEnglish(rule, value, callback) {
        let reg = /^[\u0391-\uFFE5A-Za-z]+$/; //只能输入中文和英文
        if (!value) {
          callback(new Error("请输入内容"));
        } else if (reg.test(value)) {
          callback();
        } else {
          callback(new Error("只能输入中文和英文"));
        }
      },
      // 只能输入中文、英文、数字、括号（包括全角和半角括号）
      veBrackets(rule, value, callback) {
        let reg = /^[\u4e00-\u9fa5_a-zA-Z0-9_(_（_)_）\n]+$/;
        if (!reg.test(value) && value !== "") {
          callback(new Error("只能输入中文、英文、数字、括号（包括全角和半角括号）"));
        } else {
          callback();
        }
      },
    };
  };
  return FormValidate;
})();
export default {
  FormValidate,
};
