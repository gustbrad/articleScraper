var mongoose = require('mongoose');

mongoose.Promise = Promise;
mongoose.connect('mongodb://heroku_8v2z624w:of92ka9hbdinan2sc12ll4kpnm@ds261072.mlab.com:61072/heroku_8v2z624w');

//mongoose.connect("mongodb://localhost/week44Popu1ater");
var db = mongoose.connection;

db.on("error", function(error) 
{
  console.log("Mongoose Error: ", error);
});

db.once("open", function() 
{
  console.log("Mongoose connection successful!");
});

module.exports = db;