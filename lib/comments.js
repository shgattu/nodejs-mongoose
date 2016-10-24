/**
 * Created by Anu on 10/24/2016.
 */
var mongoose = require('mongoose');
var CommentsSchema = {
    content: {type : String},
    date:{type:Date, default: Date.now},
    firstName : {type: String},
    lastName : {type :String}
};
module.exports = CommentsSchema;