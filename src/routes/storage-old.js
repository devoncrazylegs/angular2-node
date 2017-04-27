var express = require('express');
var router = express.Router();
var storageController = require('../controllers/Storage-old');
var storageControllerInstance = new storageController();

router.get('/', function(req, res, next) {
    storageControllerInstance.getItems(req, res, next);
});

router.post('/', function(req, res, next) {
    storageControllerInstance.storeTerm(req, res, next);
});

module.exports = router;
