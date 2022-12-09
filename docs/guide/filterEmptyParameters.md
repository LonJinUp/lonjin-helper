# filterEmptyParameters

> 过滤对象中空字段，支持多层级对象

| 参数   | 说明     | 类型   | 必填值 | 默认值 |
| ------ | -------- | ------ | ------ | ------ |
| filter | 目标对象 | Object | true   | --     |

## Demo:

基本用法

```js
import { filterEmptyParameters } from 'lonjinHelper'
let data = {
    name: 'tom',
    age: '',
    parent: null,
    children: undefined,
    home: ''
}
console.log(filterEmptyParameters(data)) //{"name": "tom"}
```

多层级对象
```js
import { filterEmptyParameters } from 'lonjinHelper'
let data = {
    name: 'tom',
    age: '',
    parent: null,
    children: undefined,
    home: '',
    info: {
        address: '北京市北京市朝阳区',
        code: null,
    }
}
console.log(filterEmptyParameters(data)) 
/**
{
    "name": "tom",
    "info": {
        "address": "北京市北京市朝阳区"
    }
}
*/
```