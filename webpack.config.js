const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var Example = require('./plugins/example.js');
module.exports = {
  mode:'development',
  entry: path.join(__dirname, './src/index.js'),
  plugins: [new MiniCssExtractPlugin(), new Example()],
  module: {
    rules: [
      // {
      //   test: /\.(js)$/,
      //   use: [{
      //     loader: path.resolve('./loaders/sync-loader.js'),
      //     options: { name: 'Alice' }
      //   },
      //   {
      //     loader: path.resolve('./loaders/sync-loader1.js'),
      //     options: { name: 'Alice' }
      //   }]
      // },
      {
        test: /\.(css)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
    ]
  }
};