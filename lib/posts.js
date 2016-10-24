/**
 * Created by Anu on 10/23/2016.
 */
var mongoose = require('mongoose');
var CommentsSchema = require('./comments');
var SchemaTypes = mongoose.Schema.Types;
var PostSchema = new mongoose.Schema({
    date: { type:Date,required:true,default:Date.now},
    title:{type: String},
    content: { type: String},
    author: {
       type: SchemaTypes.ObjectId,
        ref: 'user'
    },
    comments: [CommentsSchema]
});

var Post = mongoose.model('post',PostSchema);
module.exports = Post;