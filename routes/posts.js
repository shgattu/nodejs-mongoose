/**
 * Created by Anu on 10/20/2016.
 */
var express = require('express');
var Posts = require('../lib/post');
var router = new express.Router();
router.get('/',function(req,res){
    Posts.find(function(err,posts){
        if(err) throw err;
        console.log(posts);
        res.render('posts',{
            posts: posts
        });
    });
})

module.exports = router;