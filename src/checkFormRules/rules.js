
export const rules = {
    // 判断是否是邮箱
    isEmail: (val, message)=> {
        const reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/
        if (!reg.test(val)) return message
    },

    // 判是否为空
    isEmpty: (val, message)=> {
        if (val === '' || val == null || val === undefined) return message
    },

    // 判断数组是否为空
    emptyArray: (arr, message)=> {
        if (!arr || !arr.length) return message
    },

    //判断两个字符串或者数字是否相等
    isEqual: (val, valAgain, message)=> {
        if (!val || !valAgain || val !== valAgain) return message
    },

    //判断是否为手机号
    isMobile: (val, message) => {
        const reg = /^[1][3,4,5,7,8,9][0-9]{9}$/
        if (!reg.test(val)) return message
    },

    //密码是否合法 8-20位 数字+字母不区分大小写
    legitimatePassword: (val, message)=> {
        const reg = new RegExp('^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,20}$', 'g')
        if (!reg.test(val)) return message
    },

    //密码是否合法 8-20位 数字+字母区分大小写
    legalPasswordCase: (val, message)=> {
        const reg = new RegExp('^(?![0-9A-Z]+$)(?![0-9a-z]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,20}$', 'g')
        if(!reg.test(val)) return message
    },


    //判断数字是否在对应区间
    intervalValue: (val, min, max, message) => {
        const minNumber = Number(min)
        const maxNumber = Number(max)
        const value = Number(val)
        if (minNumber - value > 0 || value - maxNumber > 0) return message
    },


    //是否为合法身份证号码（可以验证15位和18位身份证）
    isIdCardNo(val, message) {
        if (val === null || val === '' || typeof val === 'undefined') {
            return '请输入身份证号码'
        }
        //内地身份证
        val = val.toUpperCase()
        //身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X。
        if (!/(^\d{15}$)|(^\d{17}([0-9]|X)$)/.test(val)) {
            return message
        }
        //校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
        //下面分别分析出生日期和校验位
        var len, re
        len = val.length
        if (len == 15) {
            re = new RegExp(/^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/)
            var arrSplit = val.match(re)
            //检查生日日期是否正确
            var dtmBirth = new Date('19' + arrSplit[2] + '/' + arrSplit[3] + '/' + arrSplit[4])
            var bCorrectDay
            bCorrectDay = dtmBirth.getYear() == Number(arrSplit[2]) && dtmBirth.getMonth() + 1 == Number(arrSplit[3]) && dtmBirth.getDate() == Number(arrSplit[4])
            if (!bCorrectDay) {
                return message
            } else {
                //将15位身份证转成18位
                //校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
                var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2)
                var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2')
                var nTemp = 0,
                    i
                val = val.substr(0, 6) + '19' + val.substr(6, val.length - 6)
                for (i = 0; i < 17; i++) {
                    nTemp += val.substr(i, 1) * arrInt[i]
                }
                val += arrCh[nTemp % 11]
                return void 0
            }
        }
        if (len == 18) {
            re = new RegExp(/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/)
            var arrSplit = val.match(re)
            //检查生日日期是否正确
            var dtmBirth = new Date(arrSplit[2] + '/' + arrSplit[3] + '/' + arrSplit[4])
            var bCorrectDay
            bCorrectDay = dtmBirth.getFullYear() == Number(arrSplit[2]) && dtmBirth.getMonth() + 1 == Number(arrSplit[3]) && dtmBirth.getDate() == Number(arrSplit[4])
            if (!bCorrectDay) {
                return message
            } else {
                //检验18位身份证的校验码是否正确。
                //校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
                var valnum
                var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2)
                var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2')
                var nTemp = 0,
                    i
                for (i = 0; i < 17; i++) {
                    nTemp += val.substr(i, 1) * arrInt[i]
                }
                valnum = arrCh[nTemp % 11]
                if (valnum != val.substr(17, 1)) {
                    return message
                }
                return void 0
            }
        }
    }
}

