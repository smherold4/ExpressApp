var express = require('express');
var router = express.Router();
var filtersHelper = require('./helpers/filters');

router.get('/', function(req, res) {
	var db = req.db;
	var collection = db.get('itemcollection');
	collection.find({},{},function(e,docs){
		res.render('items/index', {
			"item_list" : docs,
			"title": "Items"
		});
	});
});

router.get('/new', function(req, res) {
	res.render('items/new', { title: 'Add New Item to itemcollection' });
});

router.post('/', function(req, res) {
	var collection = req.db.get('itemcollection');
	collection.insert(req.body.item, function (err, doc) {
		if (err) {
			res.send("There was a problem saving this item.");
		} else {
			res.redirect("/items");
		}
	});
});
module.exports = router;
