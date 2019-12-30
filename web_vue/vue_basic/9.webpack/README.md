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
