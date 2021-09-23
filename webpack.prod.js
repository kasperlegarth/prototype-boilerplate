const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtraxtPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "assets/js/app.[contenthash].js",
    path: path.resolve(__dirname, "prototype"),
    assetModuleFilename: "[name].[hash][ext]"
  },
  plugins: [
    new MiniCssExtraxtPlugin(
      {
        filename: "assets/css/[name].[contenthash].css"
      }
    ),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(svg|png|jpg|gif)$/,
        type: "asset/resource",
        generator: {
          filename: "assets/img/[name].[hash][ext]"
        }
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtraxtPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  }
});