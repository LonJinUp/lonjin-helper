# 使用文档

## 开始使用

使用npm下载
```js
npm i lonjin-helper
```

单个导入

```js
import { fieldPatching } from 'lonjin-helper'
let data = {
    name: '张三',
    age: '李四',
    mobile: null,
    address: undefined,
}

console.log(fieldPatching(data)) 
```
