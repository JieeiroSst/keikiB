var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/keiki-shop/codes', function(req, res, next) {
    res.render('codes');
});

module.exports = router;