
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
/**
 * npm install @types/webpack
 * @type {import('webpack').Configuration}
 */
const config = {
	output: {
		path: path.resolve(__dirname, '../dist')
	},
	module: {
		rules: [
			{
				test: /\.(png|jpg|gif)$/,
				use: {
					loader: 'url-loader',
					options: {
						name: '[name].[ext]',
						outputPath: 'images/',
						limit: 8192
					}
				}
			},
			{
				test: /\.(ts|tsx)$/,
				use: [
					'babel-loader',
					'ts-loader'
				],
				exclude: /node_modules/,
			},
			{
				test: /\.(js|jsx)$/,
				use: 'babel-loader',
				exclude: /node_modules/,
			},{
				test: /\.less$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							publicPath: '../',
						}
					},
					{
						loader: 'css-loader',
						options: {
							modules: {
								localIdentName: '[local]__[name]--[hash:4]'
							}
						}
					},
					'postcss-loader',
					'less-loader'
				]
			}
		]
	},
	resolve: {
		alias: {
			'@images': path.resolve(__dirname, '../src/images')
		},
		extensions: ['.js','.jsx','.ts','.tsx']
	},
	plugins: [
		new webpack.DllReferencePlugin({
			manifest: path.resolve(__dirname, '../dll', 'manifest.json')
		}),
		new CopyWebpackPlugin({
			patterns: [{
				from: path.resolve(__dirname, '../dll'),
				to: path.resolve(__dirname, '../dist/dll')
			}]
		}),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[hash].css',
			chunkFilename: 'css/[id].[hash].css',
		})
	]
}

module.exports = config;