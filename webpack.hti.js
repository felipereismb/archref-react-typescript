const { merge } = require('webpack-merge');
const webpack = require('webpack');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const VARIABLES = require('./mock/variables');
const common = require('./webpack.common');

module.exports = () => {
  return merge(common('hti'), {
    mode: 'development',
    optimization: {
      minimizer: [new TerserWebpackPlugin()],
    },
    devServer: {
      port: 9000,
      open: true,
      hot: true,
      compress: true,
      stats: 'errors-only',
      overlay: true,
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.REACT_APP_SERVER_URL': JSON.stringify(
          VARIABLES.HTI.URL_BASE,
        ),
      }),
    ],
  });
};
