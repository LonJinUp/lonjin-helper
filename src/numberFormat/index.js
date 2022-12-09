/**
 * 金额转化 分转元 四舍五入强制保留2位小数
 * @param {Number | String} amount  金额
 **/
export function dividedIntoYuan(amount) {
    return (Number(amount) / 100).toFixed(2)
}

/**
 * 金额转化 元转成想要的倍数，默认100倍(元-->分)
 * @param {Number | String} amount  金额
 * @param {Number | string} digit 倍数
 **/
export const regYuanToFen = (amount, digit = 100)=> {
    let m=0,
	s1 = amount.toString(),
	s2 = digit.toString();
    try{m+=s1.split(".")[1].length}catch(e){}
    try{m+=s2.split(".")[1].length}catch(e){}
    return Number(s1.replace('.', '')) * Number(s2.replace('.', ''))/Math.pow(10,m)
}

/**
 * 金额转化 强制保留2位小数
 * @param {Number | String} amount  金额
 **/
export function twoDecimalPlaces(amount) {
    var f = parseFloat(amount)
    if(isNaN(f)) return false;
    var f = Math.round(amount * 100) / 100
    var s = f.toString()
    var rs = s.indexOf('.')
    if (rs < 0) {
        rs = s.length
        s += '.'
    }
    while(s.length <= rs + 2) {
        s += '0'
    }
    return s
}

/**
 * 金额转化 金额转大写文字
 * @param {Number | String} amount  金额
 **/
export const priceUppercase = (amount)=> {
    var cnNums = new Array('零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖')
    var cnIntRadice = new Array('', '拾', '佰', '仟')
    var cnIntUnits = new Array('', '万', '亿', '兆')
    var cnDecUnits = new Array('角', '分', '毫', '厘')
    var cnIntLast = "元" //整型完以后的单位
    var maxNum = 999999999999999.9999; //最大处理的数字
    var IntegerNum; //金额整数部分
    var DecimalNum; //金额小数部分
    var ChineseStr = ''; //输出的中文金额字符串
    var parts; //分离金额后用的数组，预定义
    if(amount == '')return '';
    amount = parseFloat(amount)
    // 超出最大数
    if(amount >= maxNum ){
        console.error('Amount exceeds maximum(form priceUppercase tips)')
        return ''
    }
    if( amount == 0 ){
        ChineseStr = cnNums[0] + cnIntLast
        return ChineseStr
    }
    amount = amount.toString() //转换为字符串
    if(amount.indexOf('.') == -1){
        IntegerNum = amount
        DecimalNum = ''
        cnIntLast = '元整'
    }else{
        parts = amount.split('.')
        IntegerNum = parts[0]
        DecimalNum = parts[1].substr(0,4)
    }
    let zeroCount = 0
    let IntLen = 0
    let n,p,m,q;
    let decLen = 0
    if( parseInt(IntegerNum,10) > 0 ){//获取整型部分转换
        zeroCount = 0
        IntLen = IntegerNum.length
        for(var i=0; i<IntLen; i++ ){
            n = IntegerNum.substr(i,1)
            p = IntLen - i - 1
            q = p / 4
            m = p % 4
            if(n == '0'){
                zeroCount++
            }else{
                zeroCount > 0 && (ChineseStr += cnNums[0])
                zeroCount = 0; //归零
                ChineseStr += cnNums[parseInt(n)]+cnIntRadice[m]
            }
            if( m==0 && zeroCount<4 ){
                ChineseStr += cnIntUnits[q]
            }
        }
        ChineseStr += cnIntLast
        //整型部分处理完毕
    }
    if(DecimalNum!= ''){//小数部分
        decLen = DecimalNum.length
        for(i=0; i<decLen; i++ ){
            n = DecimalNum.substr(i,1)
            if(n != '0'){
                ChineseStr += cnNums[Number(n)]+cnDecUnits[i]
            }
        }
    }
    ChineseStr == '' && (ChineseStr += cnNums[0]+cnIntLast)
    return ChineseStr
}

/**
 * 金额转化 加千位分隔符
 * @param {Number | String} amount  金额
 **/
export function formatPrice(amount) {
    return String(amount).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}