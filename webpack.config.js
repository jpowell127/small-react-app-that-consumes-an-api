var webpack = require('webpack');
// HtmlWebpackPlugin will generate an index.html file in our output dir
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  inject: 'body'
});

module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {
    filename: "index_bundle.js",
    path: __dirname + '/dist'
  },
  module: {
    loaders: [
      {test: /\.js$/, include: __dirname + '/app', loader: "babel-loader"}
    ]
  },
  plugins: [
    HTMLWebpackPluginConfig,
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    // silence UglifyJs warnings about dead code removal
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    })
  ]
};
