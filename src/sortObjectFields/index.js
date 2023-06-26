/**
 * 对象排序
 * 对传入的对象进行递归排序，按字段名称的字母顺序对对象的字段进行排序，并返回新的排序后的对象。
 * @param {Object} obj - 需要排序的对象。
 * @returns {Object} - 排序后的新对象。
 */
export function sortObjectFields(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }
    if (Array.isArray(obj)) {
        return obj.map(sortObjectFields);
    }
    const sortedKeys = Object.keys(obj).sort();
    const sortedObj = {};

    sortedKeys.forEach((key) => {
        sortedObj[key] = sortObjectFields(obj[key]);
    });

    return sortedObj;
}
