/**
 * Created by Anu on 10/21/2016.
 */
var mongoose = require('mongoose');
var User = require('./users');

mongoose.connect('mongodb://localhost/demo_database',function(err){
    if(err) {throw err;}
// Ugly way to create the initial user


    var email = "shwetha.gattu@gmail.com";
    User.findByEmail(email,function(err,user){
        if(err) { throw err; }
        if(user) {
            console.log('user exists!');
            process.exit();
        }



    })
    var me = new User({
        firstName: 'Shwetha',
        lastName: 'Gattu',
        username:'shgattu',
        password:'password',
        email: email

    });
    me.save(function(err){if(err) { throw err; }
        console.log(me);
        process.exit();
    })
});