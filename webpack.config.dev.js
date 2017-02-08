let path = require('path');
let webpack = require('webpack');
let ExtractTextPlugin = require("extract-text-webpack-plugin");
let precss = require('precss');
let autoprefixer = require('autoprefixer');

let cwd = process.cwd();

module.exports = {
	entry: [
	    'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
		path.join(cwd, './app.js')
	],
	output: {
		path: path.join(cwd, './'),
		filename: 'dist.js',
	},
    devServer: {
        port :3000,
        contentBase: './',
        hot: true,
        inline: true,
		historyApiFallback: true,
		colors: true
    },
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]!postcss-loader!resolve-url-loader')
			},
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]!postcss-loader!resolve-url-loader', 'sass')
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'stage-0', 'react']
				}
			},
			{
				test: /\.(svg|png|jpg|jpeg|gif)$/,
				loader: 'url?limit=50000'
			}
		]
	},
	postcss: () => {
		return [precss, autoprefixer];
	},
	plugins: [
        new ExtractTextPlugin('style.css', {
        	allChunks: true
        }),
        new webpack.HotModuleReplacementPlugin()
	]
}
