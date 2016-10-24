/**
 * Created by Anu on 10/23/2016.
 */
var mongoose = require('mongoose');
var CommentsSchema = require('./comments');
var PostSchema = new mongoose.Schema({
    date: { type:Date,required:true,default:Date.now},
    title:{type: String},
    content: { type: String},
    author: {
        name:{ type: String},
        email: {type: String}
    },
    comments: [CommentsSchema]
});

var Post = mongoose.model('post',PostSchema);
module.exports = Post;