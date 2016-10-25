/**
 * Created by Anu on 10/20/2016.
 */
var express = require('express');
var Posts = require('../lib/posts');
var Users = require('../lib/users');
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
router.get('/:id',function(req,res){
    var postId = req.params.id;
    console.log('postid is'+postId)
    Posts.loadById(postId,function(err,post){
        if(err) { throw err;}
        console.log(post)
        res.render('post',{
            post: post
        })

    })
})
module.exports = router;