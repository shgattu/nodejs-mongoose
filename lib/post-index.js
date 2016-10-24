/**
 * Created by Anu on 10/24/2016.
 */
var mongoose = require('mongoose');
var Post = require('./posts');
var User = require('./users')
mongoose.connect('mongodb://localhost/demo_database',function(err){
    if(err) { throw err; }
    console.log('connected!');
    var email = "shwetha.gattu@gmail.com";
    User.findByEmail(email,function(err,user){
        if(err) { throw err; }

        var post = new Post({
            date: Date.now(),
            title: 'My Epic Post',
            content: 'This is some epic Cotent! It is really good',
            author:user.id
        });
        for(var i=0 ; i < 4 ; i++){
            post.comments.push({
                date: Date.now(),
                content: 'THis is '+i +' in subdocument',
                firstName:'Indiana',
                lastName: 'Jones'
            })
        }

        post.save(function(err){
            if(err) throw err;

            console.log(post);
            process.exit();
        })

    })


})