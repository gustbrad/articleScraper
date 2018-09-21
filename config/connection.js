var mongoose = require('mongoose');

mongoose.Promise = Promise;
//mongoose.connect('mongodb://heroku_c0g2w7r4:1gebku9hkjm2f4cufid074ke8j@ds117431.mlab.com:17431/heroku_c0g2w7r4');
mongoose.connect("mongodb://localhost/week44Popu1ater");
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