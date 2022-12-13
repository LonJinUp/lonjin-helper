# formatConfig

>  根据列表配置寻找对应的值

| 参数     | 说明                                                          | 类型   | 必填值 | 默认值  |
| -------- | ------------------------------------------------------------- | ------ | ------ | ------- |
| array    | 列表                                                          | Array  | true   | --      |
| data     | 数据源                                                        | Object | true   | --      |
| exitData | 替补数据,如果在data中没有找到对应的数据，就从`exitData`中寻找 | Object | false  | null    |
| key      | 根据哪个字段匹配                                              | String | false  | 'key'   |
| value    | 赋值到`array`指定字段                                         | String | false  | 'value' |
| empty    | 如果没匹配到，赋值为'--'                                      | String | false  | '--'    |

## Demo:

基本用法
```js
import { formatConfig } from 'lonjin-helper'

let arr = [
    {label: '用户名', value: '', key: 'userName'},
    {label: '手机号', value: '', key: 'mobile'},
    {label: '年龄', value: '', key: 'age'}
]

let data = {
    userName: 'tom',
    mobile: '185****2345',
    age: null
}

arr = formatConfig(arr,data)
console.log(arr)
/**
[
    {
        "label": "用户名",
        "value": "tom",
        "key": "userName",
        "original": "tom"
    },
    {
        "label": "手机号",
        "value": "185****2345",
        "key": "mobile",
        "original": "185****2345"
    },
    {
        "label": "年龄",
        "value": "--",
        "key": "age",
        "original": null
    }
]
 */
```

替补数据
```js
import { formatConfig } from 'lonjin-helper'

let arr = [
    {label: '用户名', value: '', key: 'userName'},
    {label: '手机号', value: '', key: 'mobile'},
    {label: '年龄', value: '', key: 'age'}
]

let data = {
    userName: 'tom',
    mobile: '185****2345',
    age: null
}

let exitData = {
    age: 18
}

arr = formatConfig(arr, data, exitData)
console.log(arr)
/**
[
    {
        "label": "用户名",
        "value": "tom",
        "key": "userName",
        "original": "tom"
    },
    {
        "label": "手机号",
        "value": "185****2345",
        "key": "mobile",
        "original": "185****2345"
    },
    {
        "label": "年龄",
        "value": 18,
        "key": "age",
        "original": 18
    }
]
 */
```

根据指定字段去匹配（默认为`key`）
```js
import { formatConfig } from 'lonjin-helper'

let arr = [
    {label: '用户名', value: '', model: 'userName'},
    {label: '手机号', value: '', model: 'mobile'},
    {label: '年龄', value: '', model: 'age'}
]

let data = {
    userName: 'tom',
    mobile: '185****2345',
    age: null
}

arr = formatConfig(arr, data, {}, 'model')
console.log(arr)
/**
[
    {
        "label": "用户名",
        "value": "tom",
        "model": "userName",
        "original": "tom"
    },
    {
        "label": "手机号",
        "value": "185****2345",
        "model": "mobile",
        "original": "185****2345"
    },
    {
        "label": "年龄",
        "value": "--",
        "model": "age",
        "original": null
    }
]
 */
```

赋值到`array`指定字段
```js
import { formatConfig } from 'lonjin-helper'

let arr = [
    {label: '用户名', options: '', model: 'userName'},
    {label: '手机号', options: '', model: 'mobile'},
    {label: '年龄', options: '', model: 'age'}
]

let data = {
    userName: 'tom',
    mobile: '185****2345',
    age: null
}

arr = formatConfig(arr, data, {}, 'model', 'options')
console.log(arr)
/**
[
    {
        "label": "用户名",
        "options": "tom",
        "model": "userName",
        "original": "tom"
    },
    {
        "label": "手机号",
        "options": "185****2345",
        "model": "mobile",
        "original": "185****2345"
    },
    {
        "label": "年龄",
        "options": "--",
        "model": "age",
        "original": null
    }
]
 */
```

如果没匹配到，默认赋值为`暂无数据`
```js
import { formatConfig } from 'lonjin-helper'

let arr = [
    {label: '用户名', options: '', model: 'userName'},
    {label: '手机号', options: '', model: 'mobile'},
    {label: '年龄', options: '', model: 'age'},
    {label: '家庭地址', options: '', model: 'address'}
]

let data = {
    userName: 'tom',
    mobile: '185****2345',
    age: null
}

arr = formatConfig(arr, data, {}, 'model', 'options', '无数据')
console.log(arr)
/**
[
    {
        "label": "用户名",
        "options": "tom",
        "model": "userName",
        "original": "tom"
    },
    {
        "label": "手机号",
        "options": "185****2345",
        "model": "mobile",
        "original": "185****2345"
    },
    {
        "label": "年龄",
        "options": "无数据",
        "model": "age",
        "original": null
    },
    {
        "label": "家庭地址",
        "options": "无数据",
        "model": "address",
        "original": null
    }
]
 */
```

### 扩展

如果内部定义了`format`方法，获取到值后会执行`format`方法

```js
import { formatConfig } from 'lonjin-helper'

let format = val=>`tell:${val}`

let arr = [
    {label: '用户名', value: '', key: 'userName'},
    {label: '手机号', value: '', key: 'mobile', format: format},
]

let data = {
    userName: 'tom',
    mobile: '185****2345'
}

arr = formatConfig(arr, data)
console.log(arr)
/**
[
    {
        "label": "用户名",
        "value": "tom",
        "key": "userName",
        "original": "tom"
    },
    {
        "label": "手机号",
        "value": "tell:185****2345",
        "key": "mobile",
        "original": "185****2345"
    }
]
 */
```

如果`key`为数组，`value`也为数组
```js
import { formatConfig } from 'lonjin-helper'

let arr = [
    {label: '用户名', value: '', key: 'userName'},
    {label: '手机号', value: '', key: 'mobile'},
    {label: '地址', value: [], key: ['province', 'city', 'area']}
]

let data = {
    userName: 'tom',
    mobile: '185****2345',
    province: '北京市',
    city: '北京市',
    area: '朝阳区'
}

arr = formatConfig(arr, data)
console.log(arr)
/**
[
    {
        "label": "用户名",
        "value": "tom",
        "key": "userName",
        "original": "tom"
    },
    {
        "label": "手机号",
        "value": "185****2345",
        "key": "mobile",
        "original": "185****2345"
    },
    {
        "label": "地址",
        "value": [
            "北京市",
            "北京市",
            "朝阳区"
        ],
        "key": [
            "province",
            "city",
            "area"
        ]
    }
]
 */
```

如果`key`为数组，`value`为字符串，可以将匹配到的值进行拼接
```js
import { formatConfig } from 'lonjin-helper'

let arr = [
    {label: '用户名', value: '', key: 'userName'},
    {label: '手机号', value: '', key: 'mobile'},
    {label: '地址', value: '', key: ['province', 'city', 'area']}
]

let data = {
    userName: 'tom',
    mobile: '185****2345',
    province: '北京市',
    city: '北京市',
    area: '朝阳区'
}

arr = formatConfig(arr, data)
console.log(arr)
/**
[
    {
        "label": "用户名",
        "value": "tom",
        "key": "userName",
        "original": "tom"
    },
    {
        "label": "手机号",
        "value": "185****2345",
        "key": "mobile",
        "original": "185****2345"
    },
    {
        "label": "地址",
        "value": "北京市北京市朝阳区",
        "key": [
            "province",
            "city",
            "area"
        ]
    }
]
 */
```

也可以添加一个`andString`来指定拼接时候的符号

```js
let arr = [
    {label: '用户名', value: '', key: 'userName'},
    {label: '手机号', value: '', key: 'mobile'},
    {label: '地址', value: '', key: ['province', 'city', 'area'], andString: '-'}
]

let data = {
    userName: 'tom',
    mobile: '185****2345',
    province: '北京市',
    city: '北京市',
    area: '朝阳区'
}

arr = formatConfig(arr, data)
console.log(arr)
/**
[
    {
        "label": "用户名",
        "value": "tom",
        "key": "userName",
        "original": "tom"
    },
    {
        "label": "手机号",
        "value": "185****2345",
        "key": "mobile",
        "original": "185****2345"
    },
    {
        "label": "地址",
        "value": "北京市-北京市-朝阳区",
        "key": [
            "province",
            "city",
            "area"
        ],
        "andString": "-"
    }
]
 */
```