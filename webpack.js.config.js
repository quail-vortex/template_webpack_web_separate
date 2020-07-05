const files = {
  script: './src/js_src/main.js',
}

module.exports = [{
  mode: 'development',
  devtool: 'source-map',
  entry: files,
  output: {
    filename: 'js/[name].js',
    path: `${__dirname}/dist/assets`,
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: [{
        loader: 'babel-loader',
        options: {
          babelrc: false,
          configFile: './babel.config.json',
        }
      }]
    }]
  },
  plugins: []
}, {
  mode: 'production',
  entry: files,
  output: {
    filename: 'js/[name].min.js',
    path: `${__dirname}/dist/assets`,
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: [{
        loader: 'babel-loader',
        options: {
          babelrc: false,
          configFile: './babel.config.json',
        }
      }]
    }]
  },
  plugins: []
}];
