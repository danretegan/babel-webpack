const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist/assets"),
    filename: "bundle.js",
  },
  mode: "development", //* Sau "production" în funcție de necesități
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    devMiddleware: {
      publicPath: "/assets/",
    },
    port: 8080, //* Se poate specifica un port personalizat
  },
};
