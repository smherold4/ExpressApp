var express = require('express');
var router = express.Router();
var filtersHelper = require('./helpers/filters');

router.get('/', function(req, res) {
    var db = req.db;
    var collection = db.get('usercollection');
    collection.find({},{},function(e,docs){
        res.render('users/index', {
            "user_list" : docs,
            "title": "Users"
        });
    });
});

router.get('/new', function(req, res) {
    res.render('users/new', { title: 'Add New User to usercollection' });
});

router.post('/', function(req, res) {
	var collection = req.db.get('usercollection');
	var newUserData = req.body.user;
	
	var userObject = filtersHelper.filterByKeys(newUserData, ['uid','username','email']);
	if (newUserData.attributename) { userObject[newUserData.attributename] = newUserData.attributeval; }

	collection.insert(userObject, function (err, doc) {
		if (err) {
			res.send("There was a problem saving this user.");
		} else {
			res.redirect("/users");
		}
	});
});
module.exports = router;
