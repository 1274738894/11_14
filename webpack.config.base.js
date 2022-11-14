const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");


module.exports = {
  entry: {
    index: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name]_[contenthash].main.js",
  },

  resolve: {
    extensions: ['.jsx', '.less', '.js', '.css'],
    alias:{
      "@":path.join(__dirname,'./src')
    }
  },


  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      //假设是前台应用入口
      title: "首页",
      filename: "index.html",
      template: "./public/index.html",
      chunks: ["index"], //chunks指定需要引入的入口模块的键名 index:"./src/index.js"
    }),
  
  
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          //   options: {
          //     presets: ["@babel/preset-env", "@babel/preset-react"],
          //   },
        },
      },

      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
              publicPath: "./../img",
              outputPath: "img/",
            },
          },
        ],
      },
      {
        test: /\.(ttf|eot|woff|woff2|svg)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          publicPath: "./../fonts",
          outputPath: "fonts/",
        },
      },
    ],
  },

  
};
