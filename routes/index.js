var express = require('express');
var router = express.Router();

//first add the reference to the controller
var controller = require('../controller');

/* GET home page. */
router.get('/', controller.home);

router.get('/login', controller.login);

router.get('/oauthredirect',controller.oauthredirect);

module.exports = router;
