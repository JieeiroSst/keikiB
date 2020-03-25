var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/keiki-shop/hold', function(req, res, next) {
    res.render('hold');
});

module.exports = router;