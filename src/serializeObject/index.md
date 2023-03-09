# serializeObject

> 序列化对象，并转成字符串，支持多层级嵌套数据格式。

## Demo:

```js
import { serializeObject } from 'lonjin-helper'

const obj1 = { name: 'John', age: 30 }
const obj2 = { age: 30, name: 'John' }

console.log(serializeObject(obj1) === serializeObject(obj2)) //true
```