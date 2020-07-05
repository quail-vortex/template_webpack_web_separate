const MiniCssExtract = require("mini-css-extract-plugin");
const FixStyleOnlyEntries = require("webpack-fix-style-only-entries");

const files = {
  style: './src/css_src/main.scss',
}

module.exports = [{
  mode: 'development',
  devtool: 'source-map',
  entry: files,
  output: {
    path: `${__dirname}/dist/assets`,
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        MiniCssExtract.loader,
        {
          loader: "css-loader",
          options: {
            url: false,
          }
        },
        {
          loader: "postcss-loader",
          options: {
            sourceMap: true,
            config: { path: './' },
          }
        },
        "sass-loader",
      ]
    }]
  },
  plugins: [
    new FixStyleOnlyEntries(),
    new MiniCssExtract({
      filename: "css/[name].css"
    }),
  ]
}, {
  mode: 'production',
  entry: files,
  output: {
    path: `${__dirname}/dist/assets`,
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        MiniCssExtract.loader,
        {
          loader: "css-loader",
          options: {
            url: false,
          }
        },
        {
          loader: "postcss-loader",
          options: {
            sourceMap: true,
            config: { path: './' },
          }
        },
        "sass-loader",
      ]
    }]
  },
  plugins: [
    new FixStyleOnlyEntries(),
    new MiniCssExtract({
      filename: "css/[name].min.css"
    }),
  ]
}];
