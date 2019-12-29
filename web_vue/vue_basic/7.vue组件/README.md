# Vue 组件

## 组件的使用

分为三个步骤：

1. 创建组件构造器
2. 注册组件
3. 使用组件

```
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
	</head>
	<body>
		
		<div id="app">
			<!-- 3. 使用组件 -->
			<global-component></global-component>
			<local-component></local-component>
		</div>
		
		<script src="https://cdn.jsdelivr.net/npm/vue"></script>
		<script>
			
			// 1. 创建组件构造器
			const globalCpt = Vue.extend({
				template: `
					<div>
						<h2>我是全局组件</h2>
						<p>我是内容11111...</p>
						<p>我是内容22222...</p>
					</div>
				`
			})
			
			const localCpt = Vue.extend({
				template: `
					<div>
						<h2>我是局部组件</h2>
						<p>我是内容xxxxx...</p>
						<p>我是内容yyyy...</p>
					</div>
				`,
			})
			
			// 2. 注册组件 (全局组件)
			Vue.component('global-component', globalCpt)
			
			const app = new Vue({
				el: '#app',
				components: {
					'local-component': localCpt
				}
			})
			
		</script>
	</body>
</html>


```

## 父、子组件

```
const localCptChild = Vue.extend({
	template: `
		<div>
			<h2>我是局部组件子组件</h2>
			<p>我是内容局部子组件...</p>
			<p>我是内容局部子组件...</p>
		</div>
	`
})
			
const localCpt = Vue.extend({
	template: `
		<div>
			<h2>我是局部父组件</h2>
			<p>我是内容xxxxx...</p>
			<p>我是内容yyyy...</p>
			<local-component-child></local-component-child>
		</div>
	`,
	components: {
		'local-component-child': localCptChild
	}
})
```

## 组件数据的存放

> 1.组件的数据data存放在哪里？

- 组件对象也有一个`data`属性（`methods`等属性同理）
- `data`属性必须是函数
- 且函数返回一个对象，对象内部保存着数据

> 2.data属性为什么必须是函数？

- 实例化一个组件对象，重新生成一个data对象
- 防止发生连锁反应

## 父子组件的通信

子组件是不能引用父组件或者`Vue`实例的数据的。但是，在开发中，往往需要从上层往下层传递一些数据。

比如，在一个页面中，父组件从服务器请求了很多数据，其中，需要传递部分数据给下面的子组件展示。

> 如何进行父子组件之间的通信呢？Vue官方提到：

1. 通过`props`向**子组件**传递数据

	- 方式一: 字符串数组，数组中的字符串就是传递时的名称。
	- 方式二: 对象，对象可以设置传递时的类型，也可以设置默认值等。

2. 通过事件向**父组件**发送消息
