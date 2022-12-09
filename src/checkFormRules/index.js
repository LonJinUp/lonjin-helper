
/**
 * 数据验证 可以配合rules.js 使用，也可以自定义验证规则
 * https://lonjinup.github.io/factorypattern/
 * @param {String} val 提示语
 */
 export function checkFormToast(val) {
    let message = []
    for (let val of arguments) {
        val && message.push(val)
    }
    if (message.length) {
        return message[0]
    } else {
        return ''
    }
}


