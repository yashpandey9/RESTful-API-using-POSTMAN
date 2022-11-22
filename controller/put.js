const Article = require("../model/articles");

const put = async(req, res) => {
    try{
       Article.findOneAndUpdate(
        {title: req.param.articleTitle},
        {title: req.body.title, content: req.body.content},
        {overwrite: true},
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

module.exports = put;