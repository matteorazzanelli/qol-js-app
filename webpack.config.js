
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

const dotenv = require('dotenv').config({ path: __dirname + '/.env' })
const Dotenv = require('dotenv-webpack');

require('dotenv').config()
console.log(process.env)

module.exports = {
  module: {
    mode: 'production',
    entry: './src/assets/js/index.js',
    rules: [
      {test: /\.txt$/, use: 'raw-loader' },
      {test: /\.css$/, use: ["style-loader", "css-loader"]},
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' }), new Dotenv()],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true
  },
};