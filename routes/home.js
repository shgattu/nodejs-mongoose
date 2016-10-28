/**
 * Created by Anu on 10/20/2016.
 */
var express = require('express');
var router = express.Router();
/**
 * Add something middleware in home route
 */
function addSomething(req,res,next){
    res.locals.someThing = {
        foo: "bar"
    }
    next();
}
function renderHome(req,res,next){
    res.render('index', { title: 'Express' });

}
/* GET home page. */
router.get('/', addSomething,renderHome);

module.exports = router;