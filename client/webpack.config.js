const path = require('path');
const webpack = require('webpack');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const APP_DIR = path.resolve(__dirname, 'src');
const BUILD_DIR = path.resolve(__dirname, 'dist');

module.exports = {
  devServer: {
    inline: true,
    contentBase: './',
    port: 3000,
    historyApiFallback: true // In case we refresh the page, vizualize the last page you have been.
  },
  entry: ['babel-polyfill', APP_DIR + '/index.jsx'],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    modules: [APP_DIR, 'node_modules']
  },

  module: {
    rules: [
      {
        include: [APP_DIR, path.resolve('node_modules')],
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        include: [APP_DIR],
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader'
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: 'url-loader',
        query: { mimetype: 'image/png' }
      },
      {
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['env', 'es2015', 'react', 'stage-0']
          }
        },
        test: /\.j(s|sx)$/,
        use: 'babel-loader',
        include: [APP_DIR]
      }
    ]
  },

  plugins: [
    new LiveReloadPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(APP_DIR, 'index.html')
    })
  ]
};
