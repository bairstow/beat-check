// app server setup definitions
var express = require('express');
var app = express();
var PORT = process.env.PORT || 8010;
var morgan = require('morgan');
var baseRouter = require('./routers/baseRouter');
var apiRouter = require('./routers/apiRouter');

// db initialisation call
var db = require('./model/db');

// enable general logging
app.use(morgan('combined'));
// enable access to static files in build directory
app.use(express.static('build'));

// push index calls to launch vue initialisation and SPA
app.use('/', baseRouter);
// push api calls
app.use('/api', apiRouter);

// kickoff express server
app.listen(PORT);
console.log('Server running on port: ' + PORT);
