车亮召

## 第二次课

> css3

### 0. 盒子模型

![](./imgs/box-model.png)

0.1 块级盒子(block box)

- 换行

- width height

- padding margin border

  0.2 内联盒子(inline box)

- 不换行

- 无 width height

  0.3 背景和边框

[官方文档](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders)

```css
.box {
  background: no-repeat center/80% url("../img/image.png");
}
```

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

[官方教程](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/Grids)

[example](./practice02//grid/index.html)

![](imgs/grid_terms.png)

```css
.container {
  display: grid;
  /* grid-template-columns: 200px 200px 200px; /* 加3个宽度为200px的列 */
  /* grid-template-columns: 1fr 1fr 2fr; /* fr单位，灵活网格 */
  grid-template-columns: repeat(3, 1fr) /* 重复构建行列 */
  grid-gap: 20px; /* 网格间隙, grid-column-gap 列间隙；grid-row-gap 行间隙；grid-gap 同时设定 */
  gap: 20px; /* 新标准为了通用gap代替grid-gap，两个都写上，保证健壮性 */
}
```

### 第三次课

> 移动端适配
