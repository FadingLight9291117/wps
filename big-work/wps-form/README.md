# Big Work

## some problem

### 2022.6.7

1. `<script setup>` 模式下 componet标签中的`:is`值为一个组件对象，可能因为`<script setup>`模式下，组件没有手动注册，`<component>`无法显示

```vue

<componet :is="type"></componet>

```

2. js, ts可以在闭包或函数中修改外部变量的值，python在函数中不行

```js
let a = 0

function foo() {
    a++
}

// a = 1

```

### 2022.6.9

组件与vuex双向绑定时，一般使用`computed`

```js

```

## 记录

| date     | content                                       |
|:---------|:----------------------------------------------|
| 2022.6.8 | finish singleSelect component and multiSelect |
