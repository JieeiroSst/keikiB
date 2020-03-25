var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/keiki-shop/wishlist', function(req, res, next) {
    res.render('wishlist');
});

module.exports = router;