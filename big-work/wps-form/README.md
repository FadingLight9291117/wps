# Big Work

## some problem

### 2022.6.7

1. `<script setup>` 模式下 componet 标签中的`:is`值需要设置为一个组件对象。当是字符串的时候无法显示组件，可能因为`<script setup>`模式下，组件没有手动注册，`<component>`无法显示

```html
<componet :is="type"></componet>
```

2. js, ts 可以在闭包或函数中修改外部变量的值，python 在函数中不行

```js
let a = 0;

function foo() {
  a++;
}

// a = 1
```

### 2022.6.9

组件与 vuex 双向绑定时，一般使用`computed`，保证响应式的同时，又防止直接修改 vuex 的 state

```js
const title = computed({
  get: () => store.getters.getNewForm.title,
  set: (val) => store.commit("setTitle", { title: val }),
});
```

### 2022.6.10

在 mainView 的 button 子组件中,vuex 居然自动双向绑定

vuex 的 state 的子对象可以被直接修改?

问题在于 vuex 的 state 是可以被直接修改的，但是不建议。因为 vuex 能够记录每一次 state 的变化记录，保存状态快照，实现时间漫游／回滚之类的操作。

### 2022.6.11

新建 form 的小问题组件，点击后换样式，然后点击其他地方恢复样式，这个需求，可以使用`<button>`的伪类`:fouce-within`实现

`:fouce`和`:force-within`

### 2022.6.12

1. js lambda 表达式没有 this 指针

2. js 读取 html 选择的文件，使用`FileReader`对象

```js
const elem = document.getElementById("id");
const files = elem.files;
let file = files[0];
const reader = new FileReader();
reader.readAsBinaryString(file);
reader.onload = function (e) {
  const content = reader.result;
  console.log(content);
};
```

### 2022.6.13

1. 小技巧

类似 kotlin 中的 `?:`

```js
const a = { a: 1 };
let b = a.b || 2;
```

### 2022.6.14

1. vue style scoped 是防止样式向下传递

### 2022.6.16

docker nginx 部署 vue 时，配置文件配置 127.0.0.1 无法访问

docker 是一个虚拟环境,127.0.0.1 和 localhost 指的是虚拟环境内部,而不是外部宿主机,所以无法这样访问.

## wps 记录

| date      | content                                                |
| :-------- | :----------------------------------------------------- |
| 2022.6.8  | 完成新建表单页面的单选框 和多选框组件                  |
| 2022.6.9  | 完成新建表单页面所有问题组件                           |
| 2022.6.10 | 完成新建表单页面的主要功能                             |
| 2022.6.11 | 封装表单小组件为统一的组件; 分拆新建表单页面为三个页面 |
| 2022.6.13 | 完成新建表单页面收藏问题功能                           |
| 2022.6.15 | 完成新建表单页面的复制问题功能和中间插入问题功能       |
