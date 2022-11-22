const Article = require('../model/articles');

const read = async(req, res) => {
    try{
        Article.find(function(err, foundArticles){
            if(!err){
               res.send(foundArticles);
            }else{
             res.send(err);
            }
         });
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = read;