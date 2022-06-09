module.exports = {
  mode: "development",
  entry: {
    client: "./client/index",
  },
  output: {
    filename: "[name].js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  externals: {
    react: "React",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
};
