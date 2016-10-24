/**
 * Created by Anu on 10/21/2016.
 */
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
// bcrypt is used for password encryption
var SALT_WORK_FACTOR = 10;

var User;

var UserSchema = new mongoose.Schema({
    firstName: {type:String},
    lastName: {type:String},
    username: {type:String},
    email: {type:String, required: true, index: {unique:true}, validate:[ validateEmail,'Invalid email address']},
    password: {type:String, required:true}
});
// validate email address
function validateEmail(email){
    return /.?@.?\.?/.test(email);
}
// Virtual fields

UserSchema.virtual('fullName').get(function(){
    return this.firstName + ' ' + this.lastName;
});

UserSchema.static("findByEmail",function(email,cb){
    User.findOne({email:email},cb);
})
// filters
UserSchema.pre('save', function(next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        // hash the password along with our new salt
        bcrypt.hash(user.password,salt,null, function(err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});
var User = mongoose.model('user',UserSchema);
module.exports = User;
