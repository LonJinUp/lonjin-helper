# storage

> 设置、读取、清空`localStorage`

## setStorage

设置缓存

| 参数  | 说明    | 类型                               | 必填值 | 默认值 |
| ----- | ------- | ---------------------------------- | ------ | ------ |
| key   | key值   | String                             | true   | --     |
| value | value值 | String/Number/Array/Object/Boolean | true   | --     |

### Demo

```js
import { setStorage } from 'lonjin-helper'

setStorage('token', 'sjd92hd89#88hdye')

setStorage('userinfo', {name: 'tom', age: 18})
```


## getStorage 

读取缓存中的值，如果没有则返回`null`

| 参数 | 说明  | 类型   | 必填值 | 默认值 |
| ---- | ----- | ------ | ------ | ------ |
| key  | key值 | String | true   | --     |

### Demo

```js
import { setStorage, getStorage } from 'lonjin-helper'

setStorage('token', '#sj234@21230988')
setStorage('userinfo', {name: 'tom', age: 18})

let token = getStorage('token')
console.log(token) // #sj234@21230988

let info = getStorage('userinfo')
console.log(info) // {name: "tom", age: "18"}
```

## clearStorage

删除/清空`localStorage`中的值 如果有key，则删除指定对象，如果没有则清空所有`localStorage`

### Demo

```js
import { clearStorage } from 'lonjin-helper'

//删除指定值
clearStorage('user')

// 清空
clearStorage()
```