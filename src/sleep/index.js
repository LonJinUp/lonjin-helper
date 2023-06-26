/**
 * 在 async 函数内部使程序等待指定时间后再继续执行。
 * @param {number} time - 等待的时间，以毫秒为单位。默认为 0。
 * @returns {Promise<void>} - 等待指定时间后解析的 Promise。
 */
export const sleep = (time = 0) => new Promise((resolve) => setTimeout(resolve, time));
