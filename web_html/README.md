# HTML

[HTML参考手册](https://www.w3school.com.cn/tags/index.asp)

## 基础

### 语义化

     根据网页中内容的结构，选择合适的HTML标签进行编写。

**好处**

1. 在没有`CSS`的情况下，页面也能呈现出很好的内容结构。

2. 有利于`SEO`，让搜索引擎、爬虫更好的理解网页。

3. 方便其他设备解析（如屏幕阅读器、盲人阅读器等）。

4. 便于团队开发与维护。

### 标题与段落

- 标题

>双标签: `<h1></h1>`...`<h6></h6>`
>在一个网页中，`h1`标题最重要，并且一个`.html`文件中只能出现一次。
>`h5`、`h6`标签在网页中不经常使用

- 段落

>双标签: `<p></p>`

### 文本修饰标签

- 强调: 双标签 `<strong></strong>`、`<em></em>`

**区别:** 
> 1. 写法和展示效果不同，一个加粗、一个斜体
> 2. `strong`的强调性更强，`em`强调性稍弱

- 下标: `<sub></sub>`

- 上标: `<sup></sup>`

- 删除: `<del></del>`

- 插入: `<ins></ins>`

### 图片标签

`<img src="" alt="">` 单标签

- `src`: 引入图片的地址

- `alt`: 当图片出现问题时，可以显示一段文字提示

- `title`: 提示信息

- `width`、`height`: 图片大小

### 引入文件的地址路径

- 相对路径

> `.`: 当前路径
> `..`: 上一级路径

- 绝对路径

> E:/xx/xx/xx/xx.xx
> http://pic-bucket.ws.126.net/photo/0001/2019-12-23/F127J1SV00AN0001NOS.jpg

### 链接标签

`<a></a>`

- `href`: 链接地址

- `target`: 链接打开的方式, `_self`(默认)当前页打开, `_blank` 新窗口打开

- `base`: 统一设置链接打开方式, header中设置

### 跳转锚点

- 实现一

> #号 + id属性

- 实现二

> #号 + name属性

### 特殊符号

编写一些文本时，经常会遇到输入法无法输入的字符，如®(注册商标)、©(版权符)等，还有往一段文字中加入多个空格时，页面并不会解析出多个空格。这些无法输入和空格字符都是特殊字符，在HTML中，为这些特殊字符准备了专门的代码。

|特殊字符|含义|特殊字符代码|
|:---:|:---:|:---:|
||空格符|`&nbsp;`|
|©|版权|`&copy;`|
|®|注册商标|`&reg;`|
|<|小于号|`&lt;`|
|>|大于号|`&gt;`|
|&|和号|`&amp;`|
|￥|人民币|`&yen;`|
|°|摄氏度|`&deg;`|

### 列表

- 无序列表

`<ul>`、`<li>`: 列表的最外层容器、列表项

```
<ul>
     <li>
     </li>
</ul>
```

> 注: `ul`、`li`必须是组合出现的，它们之间是不能有其他标签的。

- 有序列表

`<ol>`、`<li>`: 列表的最外层容器、列表项

> 注: 有序列表用的非常少，可以用无序列表代替。

`type`属性: 改变前面标记的样式(一般都是用CSS去控制)

- 定义列表

```
<dl>
     <dt></dt>
     <dd></dd>
</dl>
```
### 表格标签

**结构**

- `<table>`: 表格最外层容器

- `<tr>`: 定义表格行

- `<th>`: 定义表头

- `<td>`: 定义表格单元

- `<caption>`: 定义表格标题

> 注: 要符合嵌套规范。

*语义化标签*

`thead`、`tbody`、`tfoot`

> 注: 在一个table中，tbody可以出现多次，thead、tfoot只出现一次。

**属性**

- `border`: 表格边框

- `cellpadding`: 单元格内的空间

- `cellspacing`: 单元格之间的空间

- `rowspan`: 合并行

- `colspan`: 合并列

- `align`: 左右对齐方式

- `valign`: 上下对齐方式

### 表单标签

- `form`: 表单最外层容器

- `input`: 标签用于搜集用户信息，根据不同的`type`属性值，展示不同的控件，如输入框、密码框和复选框等。

|type属性|含义|
|:---:|:---:|
|text|普通的文本输入框|
|password|密码输入框|
|checkbox|复选框|
|radio|单选框|
|file|上传文件|
|submit|提交按钮|
|reset|重置按钮|

- `textarea`: 多行文本框

- `select`、`option`: 下拉菜单

- `label`: 辅助表单

### 表单表格组合例子

```
<form action="">
     <table border="1" cellpadding="30">
          <tbody>
               <tr align="center">
                    <td rowspan="4">个人信息</td>
                    <td colspan="2">用户注册</td>
               </tr>
               <tr align="right">
                    <td>用户名:</td>
                    <td><input type="text" placeholder="请输入用户名"></td>
               </tr>
               <tr align="right">
                    <td>密码:</td>
                    <td><input type="password" placeholder="请输入密码"></td>
               </tr>
               <tr align="center">
                    <td colspan="2">
                         <input type="submit">&nbsp;&nbsp;&nbsp;&nbsp;
                         <input type="reset">
                    </td>
               </tr>
          </tbody>
     </table>
</form>
```
