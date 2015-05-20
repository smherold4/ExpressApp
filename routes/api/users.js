var express = require('express');
var router = express.Router();


router.put('/', function(req, res) {
	console.log(req);
	console.log('chhhhhhhhh the log');
	res.json({ some: "object literal" });
});


module.exports = router;
