const path = require("path");
module.exports = {
  entry: { app: "./src/index-library.js" },
  output: {
    path: __dirname,
    filename: "library-bundle.js",
    libraryTarget: "var",
    library: "Wordcounter",
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "src"),
        use: ["babel-loader"],
      },
    ],
  },
};
