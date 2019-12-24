# CSS

[CSS参考手册](https://www.w3school.com.cn/cssref/index.asp)

## 基础语法

> 选择器 { 属性1: 值1; 属性2: 值2 }

```
div {
    /* 宽 (像素px 百分比%)*/
    width: 100%;
    /* 高 */
    height: 100px;
    /* 背景色 */
    background-color: red;
}
```

## 引入方式

- 内联(行内、行间)样式

    在`html`标签上添加`style`属性来实现的

- 内部样式

    在`<style>`标签内添加的 *(单个文件需要特别样式时)*

> 注: 内部样式的优点，可以复用代码。

- 外部样式

    引入一个`CSS`文件来添加的 *(多个页面需要特别样式时)*

|标签|描述|
|:---:|:---:|
|`<style>`|定义样式定义|
|`<link>`|定义资源引用（另一种@import不推荐）|
|`<div>`|定义文档中的节或区域（块级）|
|`<span>`|定义文档中的行内的小块或区域|
|`<font>`|规定文本的字体、字体尺寸、字体颜色。不赞成使用。请使用样式|
|`<basefont>`|定义基准字体。不赞成使用。请使用样式|
|`<center>`|对文本进行水平居中。不赞成使用。请使用样式|

更多请参考[CSS教程](https://www.w3school.com.cn/css/index.asp)。

## CSS 样式

### 背景属性

|属性|描述|
|:---:|:---:|
|background|简写属性，作用是将背景属性设置在一个声明中|
|background-color|背景颜色|
|background-image|背景图|
|background-position|背景图片的位置|
|background-repeat|背景图片的平铺方式|
|background-attachment|背景图随滚动条的移动方式|

- 背景色

    `background-color`

- 背景图

    `background-image` 必须为这个属性设置一个`URL`值

- 背景平铺

    `background-repeat`

    1. `repeat-x` x轴平铺
    2. `repeat-y` y轴平铺
    3. `repeat` x、y轴均平铺，默认
    4. `no-repeat` 不允许平铺

- 背景位置

    `background-position`

    **关键字**

    |单一关键字|等价关键字|
    |:---:|:---:|
    |center|center center|
    |top|top center 或 center top|
    |bottom|bottom center 或 center bottom|
    |right|right center 或 center right|
    |left|left center 或 center left|

    **百分数值** 

    百分数值同时应用于元素和图像

    `background-position:50% 50%;`

    **长度值**

    长度值解释的是元素内边距区左上角的偏移, 偏移点是图像的左上角

    `background-position: 100px 0;`

- 背景图随滚动条的移动方式

    `background-attachment`

    scroll: 默认 (背景位置是根据当前元素进行偏移的)
    fixed: (背景位置是根据浏览器进行偏移的)





