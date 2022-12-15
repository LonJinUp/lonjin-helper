# checkFormToast && rules

> 通过策略模式封装的数据验校方法，需要配合`rules`使用(也可以自定义rules)；核心思路可以看[JavaScript设计模式-策略模式](https://lonjinup.github.io/factorypattern/)这篇文章。

该方法接受`一个或多个`由验证方法返回的字段，如果`checkFormToast`返回结果，则代表有条件未通过，且返回内容威未通过的提示语。验证顺序由入参顺序决定。

| 参数 | 说明     | 类型             | 必填值 | 默认值 |
| ---- | -------- | ---------------- | ------ | ------ |
| args | 提示文字 | String/undefined | --     |

## demo

配合`rules`模拟邮箱登录

```js
import { checkFormToast, rules} from 'lonjin-helper'

const email = 'abc@qq.com'
const password = '12345678a'

let emailIsEmpty = rules.isEmpty(email, '邮箱不能为空')
let isEmail = rules.isEmail(email, '请输入正确的邮箱')
let passwordIsEmpty = rules.isEmpty(password, '密码不能为空')
let legitimatePassword = rules.legitimatePassword(password, '请输入8-20位 字母+数字不区分大小写')

let toast = checkFormToast(emailIsEmpty, isEmail, passwordIsEmpty, legitimatePassword)

if(toast) {
    alert(toast)
}else {
    // submit
    console.log('submit')
}
```

## rules

> 插件内部提供了一些基础的验证规则，同时鼓励用户自己根据业务续期自己封装`rules`。下面先使用内置的`rules`进行一些演示，末尾有自定义`rules`教程。

### isEmail

> 判断邮箱是否合法

| 参数    | 说明   | 类型   | 必填值 | 默认值 |
| ------- | ------ | ------ | ------ | ------ |
| email   | 邮箱   | String | true   | --     |
| message | 提示语 | String | true   | --     |

demo:

```js
import { checkFormToast, rules } from 'lonjin-helper'

let email = 'lonjin.@'

let isEmail = rules.isEmail(email, '请输入正确的邮箱')
let toast = checkFormToast(isEmail)

if(isEmail){
    alert(isEmail)
}else{
    //submit
}
```

### isEmpty

> 验证字段是否为空

| 参数    | 说明   | 类型   | 必填值 | 默认值 |
| ------- | ------ | ------ | ------ | ------ |
| val     | 邮箱   | String | true   | --     |
| message | 提示语 | String | true   | --     |


```js
import { checkFormToast, rules } from 'lonjin-helper'

let email = ''

let emailIsEmpty= rules.isEmpty(email, '请输入邮箱')
let toast = checkFormToast(emailIsEmpty)

if(emailIsEmpty){
    alert(emailIsEmpty)
}else{
    //submit
}
```

### emptyArray

> 验证数组是否为空

| 参数    | 说明   | 类型   | 必填值 | 默认值 |
| ------- | ------ | ------ | ------ | ------ |
| array   | 数组   | Array  | true   | --     |
| message | 提示语 | String | true   | --     |

```js
import { checkFormToast, rules } from 'lonjin-helper'
let arr = []
let toast = checkFormToast(rules.emptyArray(arr,'不能为空数组'))
if(toast){
    alert(toast)
}else{
    // success
}
```

### isEqual

> 验证两值是否相等(仅限于`String/Number`类型对比)

| 参数     | 说明   | 类型          | 必填值 | 默认值 |
| -------- | ------ | ------------- | ------ | ------ |
| val      | 目标值 | String/Number | true   | --     |
| valAgain | 目标值 | String/Number | true   | --     |
| message  | 提示语 | String        | true   | --     |

```js
import { checkFormToast, rules } from 'lonjin-helper'

let password = '123456'
let passwordAgain = '123456'

let toast = checkFormToast(rules.isEqual(password,passwordAgain,'两次密码不一致'))
if(toast){
    alert(toast)
}else{
    // success
}
```

### isMobile

> 手机号格式验证，仅限于中国大陆手机号

| 参数    | 说明   | 类型          | 必填值 | 默认值 |
| ------- | ------ | ------------- | ------ | ------ |
| mobile  | 手机号 | String/Number | true   | --     |
| message | 提示语 | String        | true   | --     |

```js
import { checkFormToast, rules } from 'lonjin-helper'

let mobile = '1853462'

let toast = checkFormToast(rules.isMobile(mobile,'请输入正确的手机号'))
if(toast){
    alert(toast)
}else{
    // success
}
```

### legitimatePassword

> 验证密码是否合法：8-20位 数字+字母不区分大小写

| 参数     | 说明   | 类型   | 必填值 | 默认值 |
| -------- | ------ | ------ | ------ | ------ |
| password | 密码   | String | true   | --     |
| message  | 提示语 | String | true   | --     |

```js
import { checkFormToast, rules } from 'lonjin-helper'

let password = '123456a'
       
let toast = checkFormToast(rules.legitimatePassword(password,'密码由8-20位数字+字母不区分大小写组成'))
if(toast){
    alert(toast)
}else{
    // success
}
```

### legalPasswordCase

> 验证密码是否合法：8-20位 数字+字母区分大小写

| 参数     | 说明   | 类型   | 必填值 | 默认值 |
| -------- | ------ | ------ | ------ | ------ |
| password | 密码   | String | true   | --     |
| message  | 提示语 | String | true   | --     |

```js
import { checkFormToast, rules } from 'lonjin-helper'

let password = '1234567A'
       
let toast = checkFormToast(rules.legalPasswordCase(password,'密码由8-20位数字+字母区分大小写组成'))
if(toast){
    alert(toast)
}else{
    // success
}
```

### isIdCardNo

> 验证身份证是否合法(可验证15位和18位身份证)

| 参数    | 说明       | 类型   | 必填值 | 默认值 |
| ------- | ---------- | ------ | ------ | ------ |
| idCard  | 身份证号码 | String | true   | --     |
| message | 提示语     | String | true   | --     |

```js
import { checkFormToast, rules } from 'lonjin-helper'

let idCard = '1402211997'

let toast = checkFormToast(rules.isIdCardNo(idCard,'请输入合法身份证'))
if(toast){
    alert(toast)
}else{
    // success
}
```

## 自定义rules

在`/src`目录下新建`rules/rules.js`文件

例如写一个验证当前数据是否为空的情况

```js
export const rules = {
    // 判是否为空
    isEmpty: (val, message)=> {
        if (val === '' || val == null || val === undefined) return message
    },
}
```

使用

```js
import { checkFormToast } from 'lonjin-helper'
import rules from '/src/rules/rules.js'

let email = ''

let emailIsEmpty= rules.isEmpty(email, '请输入邮箱')
let toast = checkFormToast(emailIsEmpty)

if(emailIsEmpty){
    alert(emailIsEmpty)
}else{
    //submit
}
```