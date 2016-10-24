var express = require('express');
var router = express.Router();
var home = require('./home');
var users = require('./users');
router.use('/',home);
router.use('/users',users);


module.exports = router;
