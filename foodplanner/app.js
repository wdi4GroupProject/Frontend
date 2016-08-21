// require express module
var express = require('./config/express');
var expressLayouts = require('express-ejs-layouts');

// run express
var app = express();


// require installed modules
var morgan = require ("morgan");
var bodyParser = require('body-parser');

// set all the middlewares

// all middleware instantiations

// all middleware instantiations
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.set('port', (process.env.PORT || 7000));

app.get('/', function (req, res) {
res.send('Hello World!');
});

app.listen(app.get('port'), function() {
  console.log('My express server is running at localhost', app.get('port'));
});

module.exports = app;
