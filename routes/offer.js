var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/keiki-shop/offer', function(req, res, next) {
    res.render('offer');
});

module.exports = router;