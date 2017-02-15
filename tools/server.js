// common server for both production and development
import historyApiFallback from 'connect-history-api-fallback';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import { chalkSuccess } from './chalkConfig';
import devConfig from '../webpack.config.dev';
import prodConfig from '../webpack.config.prod';
import express from 'express';
import http from 'http';
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');

let config;
const app = express();
const server = http.createServer(app);

/* eslint-disable no-console */
console.log(chalkSuccess('Starting Express server...'));

if (process.argv[2] !== "production") {
  require('dotenv').load({path: path.resolve(process.cwd() ,".env")});
  config = devConfig;
} else {
  config = prodConfig;
}

const bundler = webpack(config);

require('../config/passport')(passport);

app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(express.static('src/*.html'));
app.use(historyApiFallback());
app.use(webpackHotMiddleware(bundler));
app.use(webpackDevMiddleware(bundler, {
  // Dev middleware can't access config, so we provide publicPath
  publicPath: config.output.publicPath,

  // These settings suppress noisy webpack output so only errors are displayed to the console.
  noInfo: false,
  quiet: false,
  stats: {
    assets: false,
    colors: true,
    version: false,
    hash: false,
    timings: false,
    chunks: false,
    chunkModules: false
  },

  // for other settings see
  // http://webpack.github.io/docs/webpack-dev-middleware.html
}));
server.listen(process.env.PORT);

const options = {
  server: {
    socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 }
  },
  replset: {
    socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 }
  }
};

mongoose.connect(process.env.MONGO_URI, options, err => {
  if (err) {
    console.error(`Some error happened while connecting to db - ${err}`);
  } else {
    console.log(`db connected successfully!`);
  }
});

mongoose.Promise = global.Promise;
const conn = mongoose.connection;

conn.on('error', console.error.bind(console, 'connection error:'));

conn.once('open', () => {
  // Routes
});
/* eslint-disable no-console */
console.log(chalkSuccess('Express server is listening on port: ' + server.address().port));
