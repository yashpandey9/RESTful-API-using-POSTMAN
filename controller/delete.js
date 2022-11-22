const Article = require("../model/articles")

const del = async(req, res) => {
    Article.deleteMany(function(err){
        if(!err){
            res.send("Successfully deleted all the articles.");
        }else{
            res.send(err);
        }
    })
}

module.exports = del;