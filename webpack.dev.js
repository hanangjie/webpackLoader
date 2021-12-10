const path = require('path');
module.exports = {
  mode:'development',
  entry: path.join(__dirname, './src/index.js'),
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: {
          loader: path.resolve('./loaders/sync-loader.js'),
          options: { name: 'Alice' }
        }
      },
      {
        test: /\.(css)$/,
        use: {
          loader: path.resolve('./loaders/css-loader.js'),
          options: { color: 'red' }
        }
      },
    ]
  },
  devServer: {
    port:9000,
    static: {
      directory: path.join(__dirname, 'public'),
    },
    magicHtml: true,
  },
};