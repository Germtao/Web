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

### 字体

- `font-family`

    字体类型 (中文、英文)

- `font-size`

    字体大小，可以是绝对或相对值

**绝对值**

- 将文本设置为指定的大小
- 不允许用户在所有浏览器中改变文本大小（不利于可用性)
- 绝对大小在确定了输出的物理尺寸时很有用

**相对值**

- 相对于周围的元素来设置大小
- 允许用户在浏览器改变文本大小

> 注: 如果没有规定字体大小，普通文本（比如段落）的默认大小是`16`像素 (16px=1em)。

- `font-weight`

    字体粗细

- `font-style`

    字体样式

    - `normal`: 正常
    - `italic`: 斜体 (所有带有倾斜属性的字体可以设置)
    - `oblique`: 倾斜 (没有倾斜属性的字体也可以设置)

### 文本

CSS 文本属性可定义文本的外观。

通过文本属性，您可以改变文本的颜色、字符间距，对齐文本，装饰文本，对文本进行缩进，等等。

- `text-decoration`: 文本装饰

|值|描述|
|---|---|
|none|默认，无装饰|
|underline|下划线|
|overline|上划线|
|line-through|贯穿线|

- `text-transform` 文本大小写

|值|描述|
|---|---|
|none|默认，大小写不变|
|uppercase|全大写|
|lowercase|全小写|
|capitalize|首字母大写|

- `text-indent`

    文本缩进， 针对首行，单位`em`或百分比%。

- `text-align`: 对齐方式

|值|描述|
|---|---|
|left、start|默认，左对齐|
|right、end|右对齐|
|center|居中|
|justify|两端对齐|

- `line-height`: 文本行高

    上边距 + 字体大小 + 下边距 （上边距=下边距）

- `letter-spacing`

    字符或字母之间的间隔

- `word-spacing`

    字（单词）之间的间隔 (针对英文段落)

## CSS 复合样式

    有的不需要关心顺序，有的是需要(font)

- `background: red url(李沁.jpg) no-repeat center center;
- `border-bottom: dashed 2px blue;` `/* border: solid 2px black; */`
- `font: 2em 宋体;`
    至少需要2个值 (size family)
    - weight style size family ✅
    - style weight size family ✅
    - weight style size/line-height family ✅

> 注🐷: `单一样式`和`复合样式`尽量不要混写，如果非要混写，先复合再单一。

## CSS 选择器

### 1. ID 选择器

    ID 选择器允许以一种独立于文档元素的方式来指定样式

    定义: `#elme{}`  调用: `id="elme"`

*注意点*

- ID是唯一值，在一个页面中只能出现一次，出现多次不符合规范

- 命名规范: 由字母、下划线、中划线、数字等组成，(首位不能是数字)

### 2. CLASS 选择器

    类选择器允许以一种独立于文档元素的方式来指定样式，可以单独使用，也可以与其他元素结合使用。

```
    css: .elme {} 
    html: class="elme"
```

*注意点*

- class选择器是可以复用的

- 可以添加多个class样式

- 多个样式的时候，样式优先级根据css决定，而不是class属性中的顺序

- 标签 + 类的写法

### 3. 标签(TAG、元素)选择器

    最常见的 CSS 选择器是元素选择器。换句话说，文档的元素就是最基本的选择器。

```
    css: div {}
    html: <div></div>
```

*使用场景*

1. 去掉某些标签的默认样式
2. 复杂的选择器中，如 层次选择器

### 4. 群组选择器

```
    css: div, p, span {}
    html: <div>, <p>, <span>
```

### 5. 通配选择器

`* { } == div, ul, li, p, h1, h2... {}`

**使用场景:**

- 去掉所有标签的默认样式

> 注🐷: 尽量避免使用，因为会给所有的标签添加样式，慎用。









