const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'app/assets/javascripts');
const APP_DIR = path.resolve(__dirname, 'app/assets/jsx');

function buildConfig(env) {
  return {
    entry: APP_DIR + '/app.jsx',
    output: {
      path: BUILD_DIR,
      filename: 'main.js'
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          include: APP_DIR,
          query: {
            presets: ['es2015', 'react']
          }
        },
        {
          test: /\.json$/,
          loader: 'json-loader'
        }
      ]
    }
  }
}

const env = process.env.NODE_ENV;
module.exports = buildConfig(env);
