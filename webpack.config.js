module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main-configured.js"
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }  
};
