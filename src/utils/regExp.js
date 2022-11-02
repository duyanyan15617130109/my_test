/**
 * Created by WebStorm.
 * User: 高俊东
 * Date: 3/8/21
 * Time: 10:25 AM
 */

/**
 * 校验手机号码
 * @param phone
 * @returns {boolean}
 */
function checkPhone(phone) {
    if(!phone) return false
    return !(phone.search(/^1(3|4|5|6|7|8|9)\d{9}$/) == -1)
}

/**
 * 校验邮箱
 * @param email
 * @returns {boolean}
 */
function checkEmail(email) {
    console.log(email,'email')
    if(email) return false
    let regex = /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g;
    console.log(regex.test( email ),'yyy')
    return regex.test( email )
}
export default{
    checkPhone,
    checkEmail
}
