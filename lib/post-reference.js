/**
 * Created by Anu on 10/24/2016.
 */
var mongoose = require('mongoose');
var User = require('./users');
var Post = require('./posts');
mongoose.connect('mongodb://localhost/demo_database',function(err){
    if(err) { throw err; }
    console.log('connected!');
    Post.findById("580e6fab09cbb71844f0e600").populate('author')
        .exec(function(err,post){
            if(err) { throw err; }

            console.log(post);
            process.exit();
        })

})