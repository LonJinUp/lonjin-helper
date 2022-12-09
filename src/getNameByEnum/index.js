/**
 * 根据value找到字典中对应的 key(label、name)
 * @param {Array} enumArray
 * @param {Number || String} val
*/
export function getNameByEnum(enumArray, val) {
    if (val === undefined || val === null) return '';
    let name = ''
    enumArray.forEach((item, index) => {
        if (item.value === val || item.VALUE === val || item.id === val) {
            name = item.name || item.NAME || item.label || item.LABEL
        }
    })
    return name
}