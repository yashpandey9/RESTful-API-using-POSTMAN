const Article = require("../model/articles");

const specific_del = async(req, res) => {
    try{
     Article.deleteOne({title: req.params.articleTitle}, function(err){
        if(!err){
            res.send("Successfully deleted the article.");
        }else{
            res.send(err);
        }
     })
   }catch(err){
    console.log(err);
    process.exit(1);
   }
}

module.exports = specific_del;