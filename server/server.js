const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
// const mongoose = require('mongoose');
const router = require('./router');
const config = require('../config/config');

// db setup
//mongoose.connect(config.DATABASE);

// config
const port = process.env.PORT || 3090;
const app = express();

// app setup middleware
app.use(bodyParser.json({ type: '*/*' }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(cors());
router(app);

// if (process.env.NODE_ENV !== 'production') {
//   const webpackMiddleware = require('webpack-dev-middleware');
//   const webpack = require('webpack');
//   const webpackConfig = require('./webpack.config.js');
//   app.use(webpackMiddleware(webpack(webpackConfig)));
// } else {
//   app.use(express.static('dist'));
//   app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'dist/index.html'));
//   });
// }

// server setup
const server = http.createServer(app);

server.listen(port, () => {
  console.log('Server running on port ', port);
});
