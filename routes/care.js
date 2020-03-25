var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/keiki-shop/care', function(req, res, next) {
    res.render('care');
});

module.exports = router;