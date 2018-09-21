var cheerio = require('cheerio');
var request = require('request');
var Article = require('../models/Article');

function scrapedWeb(callback) 
{
  request('https://www.bgr.com', function(error, response, html)
    
  {
    if (error) console.log("Error Scraping", error);

    var $ = cheerio.load(html);
    
    $("h3.entry-title").each(function(i, element) {
      var link = $(element).children().attr("href");
      var title = $(element).children().text();
      $("div.entry-content").each(function(i, element) {
        var body = $(element).children().text();
  
      
      var scrapeArticle = new Article(
      {
        title: title,
        body: body,
        link: link
      });
      console.log(scrapeArticle)
      scrapeArticle.save(function(error) 
      {
      });
    });
    });

   
    callback();
  });
      
}
exports.scrapedWeb = scrapedWeb;