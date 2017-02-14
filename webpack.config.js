let path = require('path');
let webpack = require('webpack');
let ExtractTextPlugin = require("extract-text-webpack-plugin");
let precss = require('precss');
let autoprefixer = require('autoprefixer');

let cwd = process.cwd();

module.exports = {
	entry: {
		index: path.join(cwd, './app.js'),
		vandor: ['react', 'react-dom'],
	},
	output: {
		path: path.join(cwd, '/dist/'),
		filename: 'dist.[chunkhash:8].js',
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
				loader: 'url?limit=50000&name=public/[name].[hash:8].[ext]'
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
