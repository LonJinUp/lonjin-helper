/**
 * 序列化对象，并转成字符串
 * @param {Object} obj 
 * @returns 
 */
function serializeObject(obj) {
    const keys = Object.keys(obj).sort()
    const serializedObj = {}
    for (let key of keys) {
        const value = obj[key];
        if (value !== null && typeof value === 'object') {
            serializedObj[key] = serializeObject(value)
        } else {
            serializedObj[key] = value;
        }
    }
    return JSON.stringify(serializedObj)
}