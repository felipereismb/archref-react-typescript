const { merge } = require('webpack-merge');
const webpack = require('webpack');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const VARIABLES = require('./mock/variables');
const common = require('./webpack.common');

module.exports = () => {
  return merge(common('prd'), {
    mode: 'production',
    optimization: {
      minimizer: [new TerserWebpackPlugin()],
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.REACT_APP_SERVER_URL': JSON.stringify(
          VARIABLES.PRD.URL_BASE,
        ),
      }),
    ],
  });
};
