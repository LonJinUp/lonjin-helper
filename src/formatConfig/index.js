/**
 * 根据列表配置寻找对应的值
 * @param {Array} array 列表
 * @param {Object} data 数据源
 * @param {Object} [exitData] 替补数据
 * @param {String} [key] 根据哪个字段匹配，默认为key
 * @param {String} [value] 赋值到array里面的哪个字段，默认value
 * @param {String} [empty] 如果匹配不到，默认赋值为 '--'
 */

export function formatConfig(array, data, exitData = null, key = 'key', value = 'value', empty = '--') {
    if(array && array.length && Array.isArray(array)){
        array.map(item=>{
            // 如果 key为数组
            if(Array.isArray(item[key])){
                item[key].forEach((child, childIndex) => {
                    // 如果value为数组
                    Array.isArray(item[value]) && !exitData && data[child] && item[value].push(data[child])
                    Array.isArray(item[value]) && exitData && exitData[child] && item[value].push(exitData[child])

                    // 如果value为字符串
                    !Array.isArray(item[value]) && !exitData && (item[value] = !childIndex ? data[child] ? data[child]: empty : item[value] + (item.andString || '') + (data[child] ? data[child] : empty))
                    !Array.isArray(item.value) && exitData && (item[value] = !childIndex ? exitData[child] ? exitData[child] : empty : item[value] + (item.andString || '') +(exitData[child] ? exitData[child] : empty))
                    return child
                })
                // 如果有format方法，执行format方法
                Array.isArray(item[value]) && item.format && (item[value] = item[value].map(child => item.format(child)))
            }else{
                !exitData && (item[value] = data[item[key]])
                exitData && (item[value] = data[item[key]] || exitData[item[key]])
                // 原始数据（备份）
                item.original = item[value] || null
                // 如果有format方法，执行format方法
                item[value] && item.format && (item[value] = item.format(item[value]))
                // 如果没匹配到，赋值为默认值
                !item[value] && (item[value] = empty)
            }
        })
    }
    return array
}