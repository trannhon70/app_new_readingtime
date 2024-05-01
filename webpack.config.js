const WebpackLogPlugin = require('webpack-log');

module.exports = {
  // Cấu hình của webpack
  // ...
  plugins: [
    new WebpackLogPlugin(),
    // Các plugins khác
  ],
};