var express = require('express');
var router = express.Router();


router.put('/users', function(req, res) {
	var collection = req.db.get('usercollection');
	collection.update(req.body.query, { $set: req.body.update });
	res.json({success: true});
});

router.put('/items', function(req, res) {
	var collection = req.db.get('itemcollection');
	collection.update(req.body.query, { $set: req.body.update });
	res.json({success: true});
});


module.exports = router;
