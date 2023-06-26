# sortObjectFields

> 对传入的对象进行递归排序，按字段名称的字母顺序对对象的字段进行排序，并返回新的排序后的对象。

## Demo:

基本用法

```js
import { sleep } from 'lonjin-helper'

const obj = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        street: '123 Avenue',
    },
    hobbies: ['reading', 'traveling', 'coding'],
};

const obj2 = {
    age: 30,
    name: 'John',
    address: {
        street: '123 Avenue',
        city: 'New York',
    },
    hobbies: ['reading', 'traveling', 'coding'],
};

console.log(JSON.stringify(sortObjectFields(obj2)) === JSON.stringify(sortObjectFields(obj))) // true
```