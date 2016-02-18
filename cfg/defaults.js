/**
 * Function that returns default values.
 * Used because Object.assign does a shallow instead of a deep copy.
 * Using [].push will add to the base array, so a require will alter
 * the base array output.
 */
'use strict';

const path = require('path');
const srcPath = path.join(__dirname, '/../src');
const dfltPort = 8000;

/**
 * Get the default modules object for webpack
 * @return {Object}
 */
function getDefaultModules() {
  return {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        include: srcPath,
        loader: 'eslint-loader'
      }
    ],
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!autoprefixer-loader'
      },
      {
        test: /\.sass/,
        loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader?outputStyle=expanded&indentedSyntax'
      },
      {
        test: /\.scss/,
        loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader?outputStyle=expanded'
      },
      {
        test: /\.less/,
        loader: 'style-loader!css-loader!autoprefixer-loader!less-loader'
      },
      {
        test: /\.styl/,
        loader: 'style-loader!css-loader!autoprefixer-loader!stylus-loader'
      },
      {
        /**
         * Kvoli semantic som musel pre loader pridat podporu SVG|TTF|EOT
         */
        test: /\.(png|jpg|gif|svg|woff|woff2|ttf|eot)$/,
        /**
         * ?limit znamena ze ak nacita obrazok kt velkost je mensia ako 8192kB tak tento obrazok sa da ako Base64 to
         * stranky
         */
        loader: 'url-loader?limit=8192'
      }
    ]
  };
}

module.exports = {
  srcPath: srcPath,
  publicPath: '/assets/',
  port: dfltPort,
  getDefaultModules: getDefaultModules
};
