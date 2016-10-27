/**
 * Created by Anu on 10/25/2016.
 */
var express = require("express");
var router = new express.Router();

router.get("/",function(req,res){
    var post = req.appData.post;

    var author = post.author
    console.log(req.params);
    res.render("post-author",{
        post:post,
        author: author
    })
})

module.exports = router;