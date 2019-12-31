export default {
	template: `
		<div>
			<h2>{{message}}</h2>
			<button @click="buttonClick">按钮</button>
			<h2>{{name}}</h2>
		</div>
	`,
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