const config = require('./webpack.config');
const webpack = require('webpack');
const moment = require('moment');

config.output.filename = `bundle.${moment().format('x')}.js`;
config.plugins.push(new webpack.optimize.UglifyJsPlugin({minimize: true}));

module.exports = config;