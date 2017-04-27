'use strict';

var Config = require(global.appRoot + '/Config.js');
var redisClient = require('../lib/redisConnection-old');

function Storage() {
    this.__objectName = 'Storage';
}

Storage.prototype.storeTerm = function (req, res, next) {
    var itemToStore = req.body.word + ":" + req.body.pigLatinWord;

    redisClient.lpush('words', itemToStore.toString("base64"), function (err, reply) {
        if (err) {
            res.json('Error:' + err);
        } else {
            if (reply > 10) {
                redisClient.ltrim('words', 0, 9);
            }
            res.send({
                status: reply,
                word: itemToStore
            });
        }
    });
};

Storage.prototype.getItems = function (req, res, next) {
    redisClient.lrange('words', 0, 9, function (error, reply) {
        if (error) {
            res.json('Error:' + error);
        } else {
            res.send(reply);
        }
    });
};

module.exports = Storage;