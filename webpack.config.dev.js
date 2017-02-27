const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const precss = require('precss');
const autoprefixer = require('autoprefixer');

const cwd = process.cwd();

module.exports = {
	entry: [
	    'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
		'isomorphic-fetch',
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
		// historyApiFallback: true, // 使用browserHistory，开启
		colors: true
    },
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:8]!postcss-loader')
			},
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:8]!postcss-loader', 'sass')
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
				loader: 'file-loader?limit=50000&name=public/images/[name].[hash:8].[ext]'
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
