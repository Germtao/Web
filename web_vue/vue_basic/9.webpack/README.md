# Webpack

## 1. 定义

- 从本质讲: `webpack`是一个现代的`JavaScript`应用的静态**模块打包工具**。

### 前端模块化

- 目前使用前端模块化的一些方案：`AMD`、`CMD`、`CommonJS`、`ES6`

- 在`ES6`之前，要想进行模块化开发，就必须借助于其他工具

- 并且通过模块化开发完成项目之后，还需要处理模块间的各种依赖，并且将其进行整合打包

- 而`webpack`其中一个核心就是可以进行模块化开发，并处理各模块间的依赖关系

- 不仅仅是`JavaScript`文件，还有`CSS`、图片、`JSON`文件等等，在`webpack`中都可以被当成模块来使用

### 打包

- 将`webpack`中的各种资源模块进行打包，并合成一个或多个包(`Bundle`)

- 并且在打包过程中，还可以对资源进行处理，比如压缩图片、将`scss`转成`css`、将`ES6`语法转成`ES5`语法、将`TypeScript`转成`JavaScript`等等

- `grunt`、`gulp`也可以完成打包操作

### `grunt`、`gulp`

核心：`Task`：

- 可以配置一系列的`task`，并且定义`task`要处理的事务（比如ES6、ts转化，图片压缩，scss转化css）

- 之后让`grunt`、`gulp`来依次执行这些task，而且让整个流程自动化

- 所以`grunt`、`gulp`也被称为**前端自动化任务管理工具**

看一个`gulp`的task：

```
const gulp = require('gulp')
const bable = require('gulp-bable')

gulp.task('js', () => 
	gulp.src('src/*.js')
		.pipe(bable({
			presets: ['es2015']
		}))
		.pipe(gulp.dest('dist'))
)
```

> 以上的task就是讲src下面的所有js文件转成ES5的语法，并且最终输出到dist文件夹中

什么时候用`grunt`、`gulp`？

> 工程模块依赖非常简单，甚至没有用到模块化的概念，只需要进行简单的合并、压缩。反之，请使用`webpack`。

`grunt/gulp`和`webpack`的区别？

- `grunt/gulp`更加强调的是前端流程的自动化，模块化不是它的核心。

- `webpack`更强调模块化开发管理，而文件压缩合并、预处理等功能，是它附带的功能。

## 2. Webpack的使用

1. `cd 项目文件夹`

2. `webpack ./src/main.js ./dist/bundle.js`

3. 引用	
```
<body>
	<script src="./dist/bundle.js" type="text/javascript" charset="utf-8"></script>
</body>
```

#### 1. node 配置 webpack

1. `cd 项目文件夹`

2. npm init

```
package name: (2.webpack配置) meetwebpack
version: (1.0.0)
description:
entry point: (webpack.config.js) index.js
test command:
git repository:
keywords:
author:
license: (ISC)
About to write to /Users/qdsg/Documents/Github/web/web_vue/vue_basic/9.webpack/2.webpack配置/package.json:

{
  "name": "meetwebpack",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}


Is this OK? (yes)
```

3. 配置package.json

```
"scripts": {
	"build": "webpack"
},
```

> npm run build

4. 本地安装webpack

```
npm install --save-dev webpack
npm install --save-dev webpack@<version>
```

#### 2. 什么是 loader？

`loader`是`webpack`中一个非常核心的概念。包括基本的js代码处理、图片、css加载，还有一些文件的转换。

使用过程：

1. 通过`npm`安装需要使用的`css-loader`: 负责加载css文件

`npm install --save-dev css-loader`

2. 通过`npm`安装需要使用的`style-loader`: 负责将样式添加到 DOM 中

`npm install --save-dev style-loader`

3. 在`webpack.config.js`中的`module`关键字下进行配置

```
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  }
}
```

> 注: 使用多个loader时, 从右->左加载

## 3. 使用vue的配置过程

`npm install vue --save`

![webpack使用vue配置错误]()

> 解决方案：webpack.config.js中配置

```
module.exports = {
	...,
	resolve: {
		// 别名
		alias: {
			'vue$': 'vue/dist/vue.esm.js'
		}
	}
}
```

#### 创建Vue时，template和el的关系

```
new Vue({
	el: '#app',
	template: `,
		<div>
			<h2>{{message}}</h2>
			<button @click="buttonClick"></button>
			<h2>{{name}}</h2>
		</div>
	`,
	data: {
	 message: 'Hello Webpack...',
	 name: 'Hello Vue!'
	},
	methods: {
		buttonClick() {
			
		}
	}
})
```

> index.html 中的代码

```
<body>
		<div id="app">
			
		</div>
		<script src="./dist/bundle.js" type="text/javascript" charset="utf-8"></script>
	</body>
```

#### Vue终极使用方案

> 创建.vue文件封装组件

```
<template>
	<div>
		<h2 class="title">{{message}}</h2>
		<button @click="buttonClick">按钮</button>
		<h2>{{name}}</h2>
	</div>
</template>

<script>
	export default {
		name: 'App',
		data() {
			return {
				message: 'Hello Webpack...',
				name: 'Hello Vue!'
			}
		},
		methods: {
			buttonClick() {
				
			}
		}
	}
</script>

<style>
	.title {
		color: #008000;
	}
</style>
```

> 需要安装`vue-loader`和`vue-template-compiler`

`npm install vue-loader vue-template-compiler --save-dev`

## 4. Plugin

#### 1. plugin的基本使用

> webpack.config.js 中配置webpack自带 BannerPlugin

```
const webpack = require('webpack')

module.exports = {
	// ...
	plugins: [
		// webpack自带plugin
		new webpack.BannerPlugin('最终版权归TT所有')
	] 
}
```

#### 2. 打包html的plugin

> 发布项目时，需要将`html`文件打包到`dist`文件夹中，使用`HtmlWebpackPlugin`。

- 自动生成一个`index.html`文件（可以按指定模板来生成）

- 将打包的`js`文件，自动通过`script`标签插入到`body`中

> 安装HtmlWebpackPlugin插件

`npm install --save-dev html-webpack-plugin`

> 修改webpack.config.js中的配置

```
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
	...
	plugins: [
		new HtmlWebpackPlugin({
			template: 'index.html' // 指定模板
		})
	] 
}
```

#### 3. 压缩js的plugin

该插件使用`uglify-js`压缩`JavaScript`。

- 1. 安装`uglifyjs-webpack-plugin` @1.1.1指定版本，和CLI2保持一致

`npm install uglifyjs-webpack-plugin@1.1.1 --save-dev`

- 2. webpack.config.js中配置

```
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
	...
	plugins: [
		...
		new UglifyJsPlugin()
	] 
}
```

## 5. 搭建本地服务器

`webpack`提供了一个可选的本地开发服务器，基于`node.js`搭建，内部使用`express`框架，可以实现浏览器热更新。

> 需要先安装 @2.9.3指定版本，和CLI2保持一致

`npm install webpack-dev-server --save-dev`

## 6. 配置文件环境（生产、开发）分离

- 1. 需先安装`webpack-merge`

`npm install --save-dev webpack-merge`
