var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var hbs = require('express-handlebars');

var routes = require('./routes/routes');

var app = express();

app.engine('handlebars', hbs({defaultLayout: 'main', extname: 'handlebars', partialsDir: [__dirname + '/views/partials']}));
app.set('view engine', 'handlebars');

app.use(logger("dev"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));

app.use(express.static('public'));

app.use('/', routes);

var port = process.env.PORT || 3000;

app.listen(port, function()
{
  console.log('Running on port: ' + port);
});