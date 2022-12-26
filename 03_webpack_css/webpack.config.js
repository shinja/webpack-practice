module.exports = {
	entry: "./src/index.js",

	module: {
		rules: [
			{
				test: /\.css$/,
				// 1.
				// loader: 'css-loader'

				// 2.
				use: [
					'style-loader',
					'css-loader'
				]

				// 3.
				// use: [
				// 	{ loader: 'css-loader', /** other options */}
				// ]
			},
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			}
		]
	}
}