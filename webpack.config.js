var webpack = require('webpack');
var path = require('path');
var BUILD_DIR = path.resolve(__dirname, '');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: ['babel-polyfill',APP_DIR + '/index.jsx'],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
  module : {
    loaders : [
      {
        test : /\.jsx?$/,
        include : APP_DIR,
        loader : 'babel'
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader?modules=true&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader!less-loader'
      }
    ],

  },
  plugins:[
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    // new webpack.optimize.UglifyJsPlugin({
    //
    //     // Eliminate comments
    //     comments: false,
    //
    //     // Compression specific options
    //     compress: {
    //         // remove warnings
    //         warnings: false,
    //
    //         // Drop console statements
    //         drop_console: true
    //     },
    // })

  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
    devServer:{
    }
};

module.exports = config;