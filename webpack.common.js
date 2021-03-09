const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function stringToHash(string) {
  let hash = 0;
  if (string.length === 0) return hash;
  for (let i = 0; i < string.length; i += 1) {
    const char = string.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash &= hash;
  }
  return Math.abs(hash).toString();
}

module.exports = env => {
  const dist = env === 'prd' ? 'dist' : `dist-${env}`;

  return {
    entry: resolve(__dirname, 'src', 'index.tsx'),
    output: {
      // filename: 'bundle.js',
      filename: `[name].[contenthash:8].js`,
      chunkFilename: `[name].[contenthash:8].js`,
      path: resolve(__dirname, dist),
    },
    optimization: {
      splitChunks: {
        maxInitialRequests: Infinity,
        cacheGroups: {
          commons: {
            chunks: 'all',
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              const pattern = module.context.match(
                /[\\/]node_modules[\\/](.*?)([\\/]|$)/,
              );
              const packageName = pattern[1];
              return `npm.${stringToHash(packageName.replace('@', ''))}`;
            },
          },
        },
      },
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    module: {
      rules: [
        {
          test: /\.ts(x)?$/i,
          use: 'babel-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: 'file-loader',
        },
        {
          test: /\.svg$/,
          use: ['@svgr/webpack', 'url-loader'],
        },
        {
          test: /\.(s)?css$/,
          use: ['style-loader', 'css-loader', 'resolve-url-loader'],
        },
        {
          type: 'javascript/auto',
          test: /\.json$/,
          include: /(info|healthcheck)/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name]',
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: resolve(__dirname, 'public', 'index.html'),
        favicon: resolve(__dirname, 'public', 'favicon.ico'),
        filename: 'index.html',
        inject: 'body',
        minify: {
          collapseWhitespace: true,
          removeComments: true,
        },
      }),
    ],
  };
};
