var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/keiki-shop/terms', function(req, res, next) {
    res.render('terms');
});

module.exports = router;