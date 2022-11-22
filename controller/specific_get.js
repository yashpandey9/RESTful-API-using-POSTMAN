const Article = require("../model/articles");

const specific_get = async(req, res) => {
    try{
     Article.findOne({title: req.params.articleTitle}, function(err, foundArticle){
        if(foundArticle){
            res.send(foundArticle);
        }else{
            res.send("Sorry! We couldn't find any atricle with the matching title.")
        }
     })
   }catch(err){
    console.log(err);
    process.exit(1);
   }
}

module.exports = specific_get;