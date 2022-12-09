# 金额处理

> 常用金额处理/转化方法

## dividedIntoYuan

> 分转元，四舍五入强制保留2位小数

| 参数   | 说明 | 类型   | 必填值 | 默认值 |
| ------ | ---- | ------ | ------ | ------ |
| amount | 金额 | Number | true   | --     |

### Demo:
```js
import { dividedIntoYuan } from 'lonjinHelper'

let price = 100
console.log(dividedIntoYuan(price)) //1.00
```

## regYuanToFen

> 金额转化 元转成想要的倍数，默认100倍(元-->分)

| 参数   | 说明 | 类型          | 必填值 | 默认值 |
| ------ | ---- | ------------- | ------ | ------ |
| amount | 金额 | Number/String | true   | --     |
| digit  | 倍数 | Number/String | false  | 100    |

### Demo:

基础使用：

```js
import { regYuanToFen } from 'lonjinHelper'

let price = 1
console.log(regYuanToFen(price)) //100
```

转化为10倍

```js
import { regYuanToFen } from 'lonjinHelper'

let price = 1
console.log(regYuanToFen(price, 10)) //10
```

## twoDecimalPlaces

> 保留两位小数

| 参数   | 说明 | 类型          | 必填值 | 默认值 |
| ------ | ---- | ------------- | ------ | ------ |
| amount | 金额 | Number/String | true   | --     |

```js
import { twoDecimalPlaces } from 'lonjinHelper'

let price = '102'
console.log(twoDecimalPlaces(price)) //102.00
```

## priceUppercase

> 中文大写金额

| 参数   | 说明 | 类型          | 必填值 | 默认值 |
| ------ | ---- | ------------- | ------ | ------ |
| amount | 金额 | Number/String | true   | --     |

### demo

```js
import { priceUppercase } from 'lonjinHelper'

let price = '102.22'
console.log(priceUppercase(price)) //壹佰零贰元贰角贰分
```