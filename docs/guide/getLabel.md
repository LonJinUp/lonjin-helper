# getLabel

> 根据value寻找对应的label，支持递归

| 参数   | 说明     | 类型         | 必填值 | 默认值 |
| ------ | -------- | ------------ | ------ | ------ |
| value  | value值  | Array/String | true   | --     |
| list   | 目标数组 | Array        | true   | --     |
| result | 结果     | Array/String | true   | --     |

## Demo:

基本用法
```js
import { getLabel } from 'lonjin-helper'

let list = [
    {label: '类目1', value: '1'},
    {label: '类目1', value: '2'}
]

let value = '1'
console.log(getLabel(value,list,'')) //类目1
```

多级查找
```js
let arr = [
    {
        label: '北京市',
        value: '1', 
        children: [
            {
                label: '北京市',
                value: '2', 
                children: [
                    {label: '朝阳区', value: '3'},
                    {label: '丰台区', value: '4'}
                ]
            },
            
        ]
    },
    {
        label: '山西省',
        value: '5', 
        children: [
            {
                label: '太原市',
                value: '6', 
                children: [
                    {label: '清徐县', value: '7'},
                    {label: '太原市区', value: '8'}
                ]
            },
            
        ]
    },
]

let value = ['1', '2' , '3']
console.log(getLabel(value,arr, [])) //['北京市', '北京市', '朝阳区']
```
