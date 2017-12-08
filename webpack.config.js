const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoPrefixer = require('autoprefixer');

//browser/client side code configuration and transpilation
const browserConfig = {
  entry: './src/browser/index.js',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      //static files loader config
      {
        test: [/\.svg$/, /\.git$/, /\.jpe?g$/, /\.png$/],
        loader: 'file-loader',
        options: {
          name: 'public/media/[name].[ext]',
          publicPath: url => url.replace(/public/, '')
        }
      },
      //stylesheets loader config
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: { importLoaders: 1 }
            },
            {
              loader: 'postcss-loader',
              options: { plugins: [autoPrefixer()] }
            }
          ]
        })
      },
      //jsx/es6 code config setup
      {
        test: /js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react-app']
        } 
      }
    ]
  },
  //extra plugin configuration
  plugins: [
    new ExtractTextPlugin({
      filename: 'public/css/[name].css'
    })
  ]
};

//server-side/back-end code configuration and transpilation
const serverConfig = {
  entry: './src/server/index.js',
  target: 'node',
  output: {
    path: __dirname,
    filename: 'server.js',
    libraryTarget: 'commonjs2'
  },
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react-app']
        }
      },
      {
        test: [/\.svg$/, /\.git$/, /\.jpe?g$/, /\.png$/],
        loader: 'file-loader',
        options: {
          name: 'public/media/[name].[ext]',
          publicPath: url => url.replace(/public/, ''),
          emit: false
        }
      },
      {
        test: /\.css$/,
          use: [
            {
              loader: 'css-loader/locals'
            }
          ]
      }
    ]
  }
};

module.exports = [browserConfig, serverConfig];


