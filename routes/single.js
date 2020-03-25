var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/keiki-shop/single', function(req, res, next) {
    res.render('single');
});

module.exports = router;