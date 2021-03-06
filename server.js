const express = require('express');
const router = require('./router.js');
const db = require('./database.js');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const bodyparser = require('body-parser');
const app = express();
 
const compiler = webpack(webpackConfig);
 
app.use(express.static(__dirname + '../dist'));
 
app.use('/ChatBot', bodyparser.json());
app.use('/', router);
app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));
 
const server = app.listen(3000);




