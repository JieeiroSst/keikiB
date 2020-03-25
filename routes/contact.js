var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/keiki-shop/contact', function(req, res, next) {
    res.render('contact');
});

module.exports = router;