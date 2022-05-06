车亮召

## 第二次课

> css3

### 1. 定位

### 2. 布局

#### 2.1 flex 布局

[官方教程](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/Flexbox)

[example](./practice02/flex/index.html)

![](imgs/flex_terms.png)

```css
section {
  display: flex;
  flex-direction: row; /* or column */
  flex-wrap: wrap; /* 换行 */
  /* felx-flow: row wrap; <=> flex-direction: row; flew-wrap: wrap;  */
}

article {
  flex: 1 200px; /* 1是动态尺寸, 200px是弹性盒子内子代元素的宽度至少为200px; */
}

article:nth-of-type(3)  /* 第3个占2格 */ {
  flex: 2 200px;
}
```

#### 2.2 grid 网格布局



## 第三次课

> 移动端适配
