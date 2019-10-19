const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var ImageminPlugin = require('imagemin-webpack-plugin').default;
module.exports = {
  entry: {
    app:'./src/index.js',
    vendor: ['jquery','lodash']
  },
  mode:'production',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'assets/js/[name][chunkhash].js'
  },
  optimization: {
    splitChunks:{
      chunks:'all'
    },
    minimizer: [
      new UglifyJsPlugin(),
      new OptimizeCSSAssetsPlugin()
    ]
  },

  module: {
    rules: [
        {
        test: /\.js$/,
        use: {loader: 'babel-loader'},
        exclude: /node_modules/
        },
        {
          test: /\.(sa|sc|c)ss$/,
            use: [
                {
                    loader:MiniCssExtractPlugin.loader
                }
                ,'css-loader','postcss-loader']
        },
        {
          test: /\.(gif|png|jpe?g|svg)$/i,
          use: [
              {
                loader: 'url-loader',
                options: {
                  outputPath: 'assets/images',
                  limit:154000,
                  name: '[name].[ext]?[hash]'
                }
              }
              ,'image-webpack-loader']
      }
    ]
  
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "assets/css/styles.css",
    }),
    new HtmlWebpackPlugin({  // Also generate a test.html
        filename: 'index.html',
        template: './src/index.html',
        inject: true
      }),
      new ImageminPlugin(),
      new CleanWebpackPlugin()
  ]
};