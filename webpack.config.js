const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: ["./src/index.js", "./src/styles.scss"],
  output: {
    filename: "main-configured.js"
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  }
};
