var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/keiki-shop/kitchen', function(req, res, next) {
    res.render('kitchen');
});

module.exports = router;