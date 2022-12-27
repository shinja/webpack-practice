
const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
	entry: "./src/index.js",
	mode: 'development',
	output: {
		// TODO: temp for clean webpack plugin and webpack 5
		path: path.resolve(__dirname, 'dist'),
		/**
		 * resolve the duplicate image asset issue,
		 * if we specific the output option in file-loader/url-loader
		 *
		 **/
		// assetModuleFilename: 'img/[name].[hash:8][ext][query]'
	},
	module: {
		rules: [
			{
				test: /\.(css|scss)$/,
				use: [
					'style-loader',
					'css-loader',
					'postcss-loader',
					'sass-loader'
				]
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				/**
				 * webpack 5 usage.
				 */
				// type: 'asset/resource',
				// generator: {
				// 	filename: 'img/[name].[hash:8][ext][query]'
				// }

				/**
				 *
				 * https://webpack.js.org/guides/asset-modules/
				 * 加上
				 * type: 'javascript/auto',
				 * dependency: { not: ['url'] },
				 * 解決 style.css裡面的圖片會引用錯誤的問題。
				 */
				type: 'javascript/auto',
				dependency: { not: ['url'] },
				loader: 'file-loader',
				options: {
					outputPath: 'img',
					name: '[name].[contenthash:8].[ext]',
				},

				// loader: 'url-loader',
				// options: {
				// 	outputPath: 'img',
				// 	name: '[name].[contenthash:8].[ext][query]',
				//  	limit: 20 * 1024 // doing base64 if LESS than limit.
				// },
			},

			{
				test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
				/**
				 * in webpack 5, we don't need do this again.
				 */
				// use: [
				//   {
				// 	loader: 'file-loader',
				// 	options: {
				// 	  outputPath: 'fonts/',
				// 	  name: '[name].[ext]',
				// 	}
				//   }
				// ],

				/**
				 * webpack 5 usage.
				 */
				type: 'asset/resource',
				generator: {
					filename: 'fonts/[name].[hash:8][ext][query]'
				}
			},
			{
				test: /\.js$/i,
				loader: 'babel-loader',
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin({
			verbose: true,
		}),
		/**
		 * Fixed some Vue warning.
		 */
		new webpack.DefinePlugin({
			__VUE_OPTIONS_API__: true,
			__VUE_PROD_DEVTOOLS__: false,
		})
	]
}