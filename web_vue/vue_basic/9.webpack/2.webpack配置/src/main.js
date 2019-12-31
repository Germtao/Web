// CommonJS导入
const {add, mul} = require('./mathUtils.js')

console.log(add(20, 30));
console.log(mul(30, 30));

// ES6导入
import {name, age, height} from './info.js'

console.log(name);
console.log(age);
console.log(height);

// 依赖css文件
require('./css/normal.css')

// 依赖less文件
require('./css/special.less')

// 写一些东西
document.writeln('<p>Hello Webpack!</p>')

// 使用 vue 进行开发
import Vue from 'vue'

// 创建一个组件
// const App = {
// 	template: `
// 		<div>
// 			<h2>{{message}}</h2>
// 			<button @click="buttonClick">按钮</button>
// 			<h2>{{name}}</h2>
// 		</div>
// 	`,
// 	data() {
// 		return {
// 			message: 'Hello Webpack...',
// 			name: 'Hello Vue!'
// 		}
// 	},
// 	methods: {
// 		buttonClick() {
			
// 		}
// 	}
// }
// import App from './vue/app.js'
import App from './vue/App.vue'

new Vue({
	el: '#app',
	template: '<App/>',
	components: {
		App
	}
})