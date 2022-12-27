module.exports = {
	entry: "./src/index.js",
	mode: 'development',
	devtool: 'source-map',
	output: {
		/**
		 * resolve the duplicate image asset issue,
		 * if we specific the output option in file-loader/url-loader
		 *
		 **/
		assetModuleFilename: 'img/[name].[hash:8][ext][query]'
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
			}
		]
	}
}