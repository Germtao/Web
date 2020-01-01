// Node配置
const path = require('path')

const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: 'bundle.js',
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
			},
			{
				test: /\.(png|jpg|gif|jpeg)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							// 当加载的图片, 小于limit时, 会将图片编译成base64字符串
							// 大于limit时, 需要使用 file-loader 进行加载
							limit: 8192,
							name: 'assets/[name].[hash:8].[ext]',
						}
					},
				]
			},
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['es2015']
					}
				}
			},
			{
				test: /\.vue$/,
				use: {
					loader: 'vue-loader',
				}
			}
	  ]
	},
	resolve: {
		// 别名
		alias: {
			'vue$': 'vue/dist/vue.esm.js'
		}
	},
	plugins: [
		// webpack自带plugin
		new webpack.BannerPlugin('最终版权归TT所有'),
		new HtmlWebpackPlugin({
			template: 'index.html'
		}),
	],
}