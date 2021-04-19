module.exports = {
  mode: "development",
  entry: __dirname + "/src/index.js",
  output: {
    path: __dirname + "/public/dist",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: __dirname + "node_modules",
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"]
            }
          }
        ]
      }
    ]
  },
  resolve: {
    modules: ["node_modules"],
    extensions: [".js"]
  }
};
