var express = require('express');
var router = express.Router();

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
    res.render('users/new', { title: 'Add New User' });
});

router.post('/', function(req, res) {
	var collection = req.db.get('usercollection');
	
	var newUserJSON = {
		"uid" : req.body.userid,
		"username" : req.body.username,
		"email" : req.body.useremail 
	}
	
	if (req.body.attributename) {
		newUserJSON[req.body.attributename] = req.body.attributeval;
	}
	
	collection.insert(newUserJSON, function (err, doc) {
		if (err) {
			res.send("There was a problem saving this user.");
		} else {
			res.redirect("/users");
		}
	});
});
module.exports = router;
