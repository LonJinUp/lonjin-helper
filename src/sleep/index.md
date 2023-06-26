# sleep

> 在 async 函数内部使程序等待指定时间后再继续执行

| 参数 | 说明     | 类型   | 必填值 | 默认值 |
| ---- | -------- | ------ | ------ | ------ |
| time | 等待时间 | Number | true   | 0      |

## Demo:

基本用法

```js
import { sleep } from 'lonjinHelper'

async function fn() {
    await sleep(3000)
    console.log('hello world')
}
```