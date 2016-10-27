/**
 * Created by Anu on 10/20/2016.
 */
var express = require('express');
var Posts = require('../lib/posts');
var Users = require('../lib/users');
var Author = require('./post-author')
var router = new express.Router();
router.use('/:id/author',Author);
router.get('/',list);
router.get('/:id',view);
router.get('/:id/edit',edit);

// Using router params
router.param(':id',function(req,res,next,id){
    Posts.loadById(id,function(err,post){
        if(err) { throw err; }
        req.appData = {
            post: post
        };
        next();
    })

})
function list(req,res){
    Posts.find(function(err,posts){
        if(err) throw err;
        console.log(posts);
        res.render('posts',{
            posts: posts
        });
    });
}
function view(req,res){
    var postId = req.params.id;
    console.log('postid is'+postId)
    Posts.loadById(postId,function(err,post){
        if(err) { throw err;}
        console.log('post with author'+post)
        res.render('post',{
            post: post
        })

    })
}
function edit(req,res){
    var postId = req.params.id;
    console.log('postid is'+postId)
    Posts.loadById(postId,function(err,post){
        if(err) { throw err;}
        console.log(post)
        res.render('post-edit',{
            post: post
        })

    })
}
module.exports = router;