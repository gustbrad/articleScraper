var mongoose = require('mongoose');

mongoose.Promise = Promise;
mongoose.connect('mongodb://heroku_2v8zmlfj:dso45oovm53fj1skkg2s0kdoa2@ds163822.mlab.com:63822/heroku_2v8zmlfj');
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