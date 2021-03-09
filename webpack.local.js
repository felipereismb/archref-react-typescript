const { merge } = require('webpack-merge');
const webpack = require('webpack');

const VARIABLES = require('./mock/variables');
const common = require('./webpack.common');

module.exports = () => {
  return merge(common('local'), {
    mode: 'development',
    devServer: {
      port: 3000,
      open: true,
      hot: true,
      compress: true,
      stats: 'errors-only',
      overlay: true,
      historyApiFallback: true,
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.REACT_APP_SERVER_URL': JSON.stringify(
          VARIABLES.DES.URL_BASE,
        ),
      }),
    ],
  });
};
