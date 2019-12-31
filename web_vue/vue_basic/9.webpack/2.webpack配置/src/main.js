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