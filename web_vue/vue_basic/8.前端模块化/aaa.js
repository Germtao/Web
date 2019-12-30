let name = '小明'
let age = 18
let flag = true

function sum(num1, num2) {
	return num1 + num2
}

if (flag) {
	console.log(sum(20, 30));
}

// 导出
export {
	flag, sum
}
export var total = 1000
export var height = 1.88

export function mul(num1, num2) {
	return num1 * num2
}

// ES6定义类
export class Person {
	run() {
		console.log('在奔跑');
	}
}

// 导入时可以重新命名
const address = '北京市'
export default address