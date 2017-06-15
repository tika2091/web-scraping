
var request=require("request");
var cheerio=require("cheerio");



console.log(grabbed the items from cnn);

request("http://www.cnn.com/entertainment/culture", function(err res, html){

var $=cheerio.loat(body);
// an empty array to save the scraped data

var result=[];

$("#root").each(functio(i, elemtnt){
  var title=$(this).text();

  result.push({
    title:root,
  });
});
console.log(result);
});
