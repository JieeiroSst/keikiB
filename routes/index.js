var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/keiki-shop/', function(req, res, next) {
    res.render('index');
});

module.exports = router;
