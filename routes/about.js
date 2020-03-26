var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/keiki-shop/about', function(req, res, next) {
    res.render('about');
});

module.exports = router;
