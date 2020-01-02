# learn-vue-router

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 什么是路由？

- 网络工程中的术语

- 通过互联的网络把信息从`源地址`传输到`目的地址`的活动

> 路由器提供了两种机制：

1. 路由：决定数据包从`来源`到`目的地`的路径

2. 转送：将`输入端`的数据转移到合适的`输出端`

> 路由中有一个非常重要的概念：路由表

- 本质上就是一个映射表，决定了数据包的指向

#### 1. 后端路由阶段

早期的网站开发，整个`HTML`页面是由服务器来渲染的，也就是服务器直接生产渲染好对应的`HTML`页面，返回给客户端进行展示。

1. 一个页面对应一个`URL`
2. `URL`会发送到服务器，服务器通过正则对该`URL`进行匹配，最后交给一个`Controller`进行处理
3. `Controller`进行各种处理，最终生成`HTML`或者数据，返回给前端
4. 这就完成了一个`IO`操作

> 优点：

- 当页面中需要请求不同的路径内容时，交给服务器来进行处理，服务器渲染好整个页面，并将页面返回客户端。
- 这种被渲染好的页面，不需要单独加载任何`css`和`js`，可以直接交给浏览器展示，也有利于`SEO`的优化。

> 缺点：

- 整个页面的模块由后端人员来编写和维护
- 开发页面需要通过`PHP`和`Java`等语言来编写
- `HTML`代码和数据以及对应的逻辑会混在一起，编写和维护非常糟糕

#### 2. 前、后端分离阶段

随着`Ajax`的出现，有了前、后端分离的开发模式。**后端**只提供`API`来返回数据，**前端**同过`Ajax`获取数据，并通过`JavaScript`将数据渲染到页面中。

> 优点：

前、后端责任的清晰，后端专注于数据，前端专注于交互和可视化。

#### 3. 单页面富应用阶段 (SPA)

在前、后端分离的基础上加了一层*前端路由*，也是有前端来维护的一套路由规则。

> 前端路由的核心：

改变URL，但是页面不进行整体的刷新
