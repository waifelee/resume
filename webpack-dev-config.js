

const path = require('path');
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import precss from 'precss';
import autoprefixer from 'autoprefixer';
import rucksackCss from 'rucksack-css';
export default {
  debug: true,
  devtool: 'cheap-module-eval-source-map',
  noInfo: true,
  entry: [
    './src/webpack-public-path',
    'react-hot-loader/patch',
    'webpack-hot-middleware/client?reload=true',
    path.resolve(__dirname, 'src/index.js')
  ],
  target: 'web',
  output: {
    path: `${__dirname}/src`,
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      __DEV__: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      title: 'Resume',
      favicon:'./src/wf.ico',
      minify: {
        removeComments: true,
        collapseWhitespace: true
      },
      hash:true,
      inject: 'body'
    })
  ],
  resolve: {
    extensions: ['', '.js', 'jsx'],

    alias:{
			app:path.resolve(__dirname,'src/js'),
			style:path.resolve(__dirname,'src/styles')
    }
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, 'src/js'),
        loaders: [
          'style',
          'css?modules&sourceMap&importLoaders=1&localIdentName=[local]___[hash:base64:5]',
          'postcss?parser=postcss-scss'
        ]
      },
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, 'src/styles'),
        loader: 'style!css!postcss?parser=postcss-scss'
      },
      {
        test: /\.(otf|eot|svg|ttf|woff|woff2).*$/,
        loader: 'url?limit=10000'
      },
      {
        test: /\.(gif|jpe?g|png|ico)$/,
        loader: 'url?limit=10000'
      }
    ]
  },
  postcss: ()=> [precss,autoprefixer,rucksackCss]
};
