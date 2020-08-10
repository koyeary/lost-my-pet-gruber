const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

const config = {
  mode: "production",
  entry: {
    app: "./public/index.js",
  /*   favorites: "./assets/js/favorites.js",
    topic: "./assets/js/topic.js" */
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name].bundle.js"
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  },
  plugins: [
    new WebpackPwaManifest({
      name: "Budget Tracker App",
      short_name: "Budget Tracker App",
      description: "An application that allows you to track your spending both on- and offline.",
      background_color: "#01579b",
      theme_color: "#ffffff",
      start_url: "/",
      display: "standalone"
    })
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }
};


module.exports = config;
