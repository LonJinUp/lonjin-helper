/**
 * 将指定的键值对存储到本地存储中。
 * @param {string} key - 要存储的键。
 * @param {any} value - 要存储的值。
 */
export function setStorage(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
}

/**
 * 获取本地存储中指定键的值。
 * @param {string} key - 要获取值的键。
 * @returns {any} - 存储的值，如果键不存在则返回 null。
 */
export function getStorage(key) {
    return JSON.parse(window.localStorage.getItem(key) || null);
}

/**
 * 清空本地存储中的所有数据。
 */
export function clearAll() {
    window.localStorage.clear();
}
