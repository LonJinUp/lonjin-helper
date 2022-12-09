/**
  对象缺失字段补全
  @param {Object} data 当前对象
  @param {string} empty 补充内容
*/
export function fieldPatching(data, empty = '--') {
    for (let item in data) {
        if(data[item] === null || data[item] === '' || data[item] == undefined) {
            data[item] = empty
        }else {
            Array.isArray(data[item]) && (data[item] = data[item].map(child=>fieldPatching(child, empty)))
            typeof data[item] === 'object' && (data[item] = fieldPatching(data[item], empty))
        }
    }
    return data
}