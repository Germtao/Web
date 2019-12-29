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