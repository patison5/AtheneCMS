module.exports = (env, argv) => ({
	entry: `${__dirname}/client/index`,
	output: {
		path: `${__dirname}/public/js`,
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|jpg|gif|svg|ttf|eot|woff|woff2)$/,
				loader: 'file-loader',
				options: {
				  name(file) {
				    if (argv.mode === 'development') {
				      return '[path][name].[ext]';
				    }

				    return '[hash].[ext]';
				  },
				},
			}
		]
	},
    devServer: {
        historyApiFallback: true,
        contentBase: './'
    },
	devtool: argv.mode === 'development' ? 'source-map' : false
})
