var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/keiki-shop/faqs', function(req, res, next) {
    res.render('faqs');
});

module.exports = router;