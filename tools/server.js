// common server for both production and development
const historyApiFallback = require('connect-history-api-fallback');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const { chalkSuccess } = require('./chalkConfig');
const config = require('../webpack.config.dev');
const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const authRoutes = require('../server/authRoutes');
const logoutRoute = require('../server/logoutRoute');

const api = require('../server/api');
const environment = process.argv[2];
const app = express();
const server = http.createServer(app);

/* eslint-disable no-console */
console.log(chalkSuccess(`Starting Express server in ${environment} mode...`));

const runWebpack = () => {
  if (environment === "development") {
    const bundler = webpack(config);
    app.use(historyApiFallback());
    app.use(express.static('src/*.html'));
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
      }

      // for other settings see
      // http://webpack.github.io/docs/webpack-dev-middleware.html
    }));
  } else {
    app.use(express.static('dist'));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(process.cwd(), 'dist', 'index.html'));
    });
  }
};

if (environment !== "production") {
  require('dotenv').load({path: path.resolve(process.cwd() ,".env")});
}

require('../config/passport')(passport);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

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

mongoose.Promise = require('bluebird');
const conn = mongoose.connection;

conn.on('error', console.error.bind(console, 'connection error:'));

conn.once('open', () => {
  // passport auth routes
  authRoutes(app, passport);
  logoutRoute(app);
  api(app);
  runWebpack();
});

server.listen(process.env.PORT);
/* eslint-disable no-console */
console.log(chalkSuccess('Express server is listening on port: ' + server.address().port));
