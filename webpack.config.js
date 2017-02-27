const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const precss = require('precss');
const autoprefixer = require('autoprefixer');

const cwd = process.cwd();

module.exports = {
	entry: {
		index: path.join(cwd, './app.js'),
		vandor: ['react', 'react-dom', 'isomorphic-fetch'],
	},
	output: {
		path: path.join(cwd, '/dist/'),
		filename: 'dist.[chunkhash:8].js',
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
	postcss: function() {
		return [precss, autoprefixer];
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin('vandor',  'vendor.js'),
        new ExtractTextPlugin('style.[chunkhash:8].css', {
        	allChunks: true
        }),
	]
}
