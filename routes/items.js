var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    var db = req.db;
    var collection = db.get('itemcollection');
    collection.find({},{},function(e,docs){
        res.render('items/index', {
            "itemlist" : docs,
            "title": "Items"
        });
    });
});

router.get('/new', function(req, res) {
    res.render('items/new', { title: 'Add New Item' });
});


module.exports = router;
