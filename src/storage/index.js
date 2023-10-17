/**
 * 将指定的键值对存储到localStorage中。
 * @param {string} key - 要存储的键。
 * @param {any} value - 要存储的值。
 */
export function setStorage(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
}

/**
 * 获取localStorage中指定键的值。
 * @param {string} key - 要获取值的键。
 * @returns {any} - 存储的值，如果键不存在则返回 null。
 */
export function getStorage(key) {
    return JSON.parse(window.localStorage.getItem(key) || null);
}

/**
 * 删除/清空localStorage中的值 如果有key，则删除指定对象，如果没有则清空所有localStorage
 */
export function clearStorage(key) {
    if (key) {
        localStorage.removeItem(key)
    } else {
        window.localStorage.clear()
    }
}
