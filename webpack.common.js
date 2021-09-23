const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/js/app.js",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/html/prototype.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"]
      }
    ]
  }
};