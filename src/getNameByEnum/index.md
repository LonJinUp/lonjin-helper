# getNameByEnum

> 根据value找到字典中对应的 key(label、name)

| 参数      | 说明     | 类型          | 必填值 | 默认值 |
| --------- | -------- | ------------- | ------ | ------ |
| enumArray | 枚举数组 | Array         | true   | --     |
| val       | value值  | Number/string | true   | --     |

## Demo:

基本用法

```js
import { getNameByEnum } from 'lonjinHelper'
let enumArray = [
    {label: '测试1', value: 1},
    {label: '测试2', value: 2},
    {label: '测试3', value: 3},
]
console.log(getNameByEnum(enumArray, 1)) //测试1
```

匹配键名可以为（id/value/VALUE）  
查找键名可以为（label/Label/name）
```js
let enumArray = [
    {name: '测试1', id: 1},
    {name: '测试2', id: 2},
    {name: '测试3', id: 3},
]
console.log(getNameByEnum(enumArray, 1)) //测试1

let enumArray2 = [
    {label: '测试1', id: 1},
    {label: '测试2', id: 2},
    {label: '测试3', id: 3},
]
console.log(getNameByEnum(enumArray, 1)) //测试1
```