const Article = require("../model/articles");

const patch = async(req, res) => {
    try{
       Article.findOneAndUpdate(
        {title: req.param.articleTitle},
        {$set: req.body},  //making it dynamic for the user that which key and value pair they want to update from the body object
        function(err){
           if(!err){
            res.send("Successfully updated the article.");
           }else{
            res.send(err);
           }
        }
       )
    }catch(err){
       console.log(err);
       process.exit(1);
    }
}

module.exports = patch;