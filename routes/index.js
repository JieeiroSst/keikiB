var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/keiki-shop/home', function(req, res, next) {
    res.render('index');
});

module.exports = router;
