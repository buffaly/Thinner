/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-param-reassign */

const BabiliPlugin = require('babili-webpack-plugin');
const webpack = require('webpack');

const path = require('path');
const glob = require('glob');

module.exports = {
  webpack: (config, { dev }) => {
    config.module.rules.push(
      {
        test: /\.(css|scss)/,
        loader: 'emit-file-loader',
        options: {
          name: 'dist/[path][name].[ext]',
        },
      }
    ,
      {
        test: /\.css$/,
        use: ['babel-loader', 'raw-loader', 'postcss-loader'],
      }
    ,
      {
        test: /\.s(a|c)ss$/,
        use: ['babel-loader', 'raw-loader', 'postcss-loader',
          { loader: 'sass-loader',
            options: {
              includePaths: ['styles', 'node_modules']
                .map(d => path.join(__dirname, d))
                .map(g => glob.sync(g))
                .reduce((a, c) => a.concat(c), []),
            },
          },
        ],
      }
    );

    if (!dev) {
      config.plugins = config.plugins.filter(plugin => plugin.constructor.name !== 'UglifyJsPlugin');
      config.plugins.push(new BabiliPlugin({ mangle: false, deadcode: false }));
    }

    config.plugins.push(new webpack.EnvironmentPlugin({
      GRAPHQL_API_URL: JSON.stringify(process.env.GRAPHQL_API_URL || 'http://localhost:3000/graphql'),
      FB_AUTH_URL: JSON.stringify(process.env.FB_AUTH_URL || 'http://localhost:3000/auth/facebook'),
    }));

    return config;
  },
};
