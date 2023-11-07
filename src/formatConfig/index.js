/**
 * 根据列表配置寻找对应的值
 * @param {Array} array - 配置列表
 * @param {Object} data - 数据源
 * @param {Object} [exitData] - 替补数据
 * @param {String} [key] - 匹配字段，默认为 'key'
 * @param {String} [value] - 赋值字段，默认为 'value'
 * @param {String} [empty] - 未匹配到时的默认值，默认为 '--'
 * @returns {Array} - 处理后的数组
 */
export function formatConfig(array, data, exitData = null, key = 'key', value = 'value', empty = '--') {
    if (!Array.isArray(array) || !array.length) {
        return []
    }

    return array.map(item => {
        if (Array.isArray(item[key])) {
            // 如果键值是数组
            item[value] = item[key].map(child => (data[child] || exitData[child] || empty));
        } else {
            // 如果键值不是数组
            item[value] = (data[item[key]] || exitData[item[key]] || empty)
        }

        if (item.format && typeof item.format === 'function') {
            // 如果存在格式化方法，调用它
            item[value] = item.format(item[value])
        }

        // 存储原始数据（备份）
        item.original = item[value] || null

        return item
    })
}
