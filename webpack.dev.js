const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	entry: './src/client/index.js',
	mode: "development",
	devServer: {
	    port: 8082
	},
	output:{
		libraryTarget:'var',
		library: 'Client'
	},
	module:{
		rules:[
		{
			test: '/\.js$/',
			exclude: /node_modules/,
			loader:"babel-loader"
		},
		{
			test: /\.scss$/,
			use: ['style-loader', 'css-loader', 'sass-loader']
		}
	]
	},
	plugins:[
	    new HtmlWebpackPlugin({
	    	template:'./src/client/views/index.html',
	    	filename:'./index.html'
	    }),
	    new CleanWebpackPlugin({
	    	dry: true,
	    	verbase:true,
	    	cleanStaleWebpackAssets:true,
	    	protectWebpackAssets:false
	    })
	]
}