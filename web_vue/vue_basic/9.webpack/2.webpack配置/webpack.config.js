// Node配置
const path = require('path')

module.exports = {
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
	    {
	      test: /\.css$/,
				// css-loader: 只负责加载css文件
				// style-loader: 负责将样式添加到 DOM 中
				// 使用多个loader时, 从右->左加载
	      use: [ 'style-loader', 'css-loader' ]
	    },
			{
				test: /\.less$/,
				use: [{
						loader: "style-loader" // creates style nodes from JS strings
				}, {
						loader: "css-loader" // translates CSS into CommonJS
				}, {
						loader: "less-loader" // compiles Less to CSS
				}]
			}
	  ]
	}
}