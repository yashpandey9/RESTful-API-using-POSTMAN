const Article = require('../model/articles');

const home = async(req, res) => {
    try{
        const newArticle = new Article({
            title: req.body.title,
            content: req.body.content
        });
        newArticle.save(function(err){
            if(!err){
                res.send("Successfully added!");
            }else{
                res.send(err);
            }
        });
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = home;