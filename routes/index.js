var express = require('express');
var router = express.Router();
var home = require('./home');
var users = require('./users');
var author = require('./post-author');
var posts = require('./posts');
router.use('/',home);
router.use('/users',users);
router.use('/posts',posts);

module.exports = router;
