var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Index' });
});
router.get('/hello', function(req, res) {
  res.render('hello', { title: 'Hola. Que Tal?' });
});

router.get('/userlist', function(req, res) {
    var db = req.db;
    var collection = db.get('usercollection');
    collection.find({},{},function(e,docs){
        res.render('userlist', {
            "userlist" : docs,
            "title": "Users"
        });
    });
});


router.get('/itemlist', function(req, res) {
    var db = req.db;
    var collection = db.get('itemcollection');
    collection.find({},{},function(e,docs){
        res.render('itemlist', {
            "itemlist" : docs,
            "title": "Items"
        });
    });
});

/* GET New User page. */
router.get('/newuser', function(req, res) {
    res.render('newuser', { title: 'Add New User' });
});

router.get('/newitem', function(req, res) {
    res.render('newitem', { title: 'Add New Item' });
});



/* POST to Add User Service */
router.post('/adduser', function(req, res) {

    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var userName = req.body.username;
    var userEmail = req.body.useremail;
    var userId = req.body.userid;
    var collection = db.get('usercollection');
    if (req.body.attributename) {
      var aname = req.body.attributename;
      var aval = req.body.attributeval;
      var newUserJSON =  {
              "_id" : userId,
              "username" : userName,
              "email" : userEmail };
      newUserJSON[aname] = aval;
      collection.insert(newUserJSON, function (err, doc) {
        if (err) {
          // If it failed, return error
          res.send("There was a problem adding the information to the database.");
        }
        else {
          // If it worked, set the header so the address bar doesn't still say /adduser
          res.location("userlist");
          // And forward to success page
          res.redirect("userlist");
        }
      });
    } else {
      collection.insert({
        "_id" : userId,
        "username" : userName,
        "email" : userEmail
      }, function (err, doc) {
        if (err) {
          // If it failed, return error
          res.send("There was a problem adding the information to the database.");
        }
        else {
          // If it worked, set the header so the address bar doesn't still say /adduser
          res.location("userlist");
          // And forward to success page
          res.redirect("userlist");
        }
      });
  
    }

    
});

module.exports = router;
