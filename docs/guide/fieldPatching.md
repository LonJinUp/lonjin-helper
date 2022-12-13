# fieldPatching

>  对象缺失字段补全

| 参数  | 说明     | 类型   | 必填值 | 默认值 |
| ----- | -------- | ------ | ------ | ------ |
| data  | 目标对象 | Object | true   | --     |
| empty | 补充内容 | String | false  | '--'   |

## Demo:

基本用法
```js
import { fieldPatching } from 'lonjin-helper'
let data = {
    name: '张三',
    age: '李四',
    mobile: null,
    address: undefined,
}

console.log(fieldPatching(data)) 
// { address: "--", age: "李四", mobile: "--", name: "张三"}
```

多层级
```js
import { fieldPatching } from 'lonjinHelper'
let data = {
    name: '张三',
    age: '李四',
    mobile: null,
    other: {
        like: 'code',
        hasHouse: null,
        school: {
            primarySchool: null,
            middleSchool: 'hengshui',
            theUniversity: 'beijin'
        }
    }
}
console.log(fieldPatching(data)) 
/*
{
    "name": "张三",
    "age": "李四",
    "mobile": "--",
    "other": {
        "like": "code",
        "hasHouse": "--",
        "school": {
            "primarySchool": "--",
            "middleSchool": "hengshui",
            "theUniversity": "beijin"
        }
    }
}
*/
```
数组对象
```js
import { fieldPatching } from 'lonjinHelper'
let data = {
    name: '张三',
    age: '李四',
    mobile: null,
    address: [
        {
            province: '北京市',
            city: '北京市',
            area: null
        }
    ]
}
console.log(fieldPatching(data, '无数据')) 
/**
{
    "name": "张三",
    "age": "李四",
    "mobile": "无数据",
    "address": [
        {
            "province": "北京市",
            "city": "北京市",
            "area": "无数据"
        }
    ]
}
 */
```

