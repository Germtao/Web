import {flag, sum} from "./aaa.js";
if (flag) {
	console.log('导入aaa.js文件');
	console.log(sum(20, 50));
}

import {total, height} from './aaa.js'
console.log(total);
console.log(height);

import {mul, Person} from './aaa.js'
console.log(mul(50, 30));

const p = new Person()
p.run()

import addr from './aaa.js'
console.log(addr);