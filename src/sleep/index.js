/**
 * 使async内部程序等待一定时间后再执行
 * @param time
 * @returns
 */
export const sleep = (time = 0) => new Promise((resolve) => setTimeout(() => resolve(), time))

