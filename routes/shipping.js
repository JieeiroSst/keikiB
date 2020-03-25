var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/keiki-shop/shipping', function(req, res, next) {
    res.render('shipping');
});

module.exports = router