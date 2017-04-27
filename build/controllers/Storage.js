'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _redisClient = require('../lib/redisClient');

var _redisClient2 = _interopRequireDefault(_redisClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var config = require('../../Config');

var Storage = function () {
    function Storage() {
        _classCallCheck(this, Storage);
    }

    _createClass(Storage, [{
        key: 'storeTerm',
        value: function storeTerm(ctx) {
            return new Promise(function (resolve, reject) {
                console.log(ctx.request.body);
                var itemToStore = ctx.request.body.word + ':' + ctx.request.body.pigLatinWord;

                _redisClient2.default.lpush('words', itemToStore.toString("base64"), function (err, reply) {
                    if (err) {
                        reject(err);
                    } else {
                        if (reply > 10) {
                            _redisClient2.default.ltrim('words', 0, 9);
                        }
                        resolve({
                            status: reply,
                            word: itemToStore
                        });
                    }
                });
            });
        }
    }, {
        key: 'getItems',
        value: function getItems(ctx) {
            return new Promise(function (resolve, reject) {
                _redisClient2.default.lrange('words', 0, 9, function (error, reply) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(reply);
                    }
                });
            });
        }
    }]);

    return Storage;
}();

exports.default = Storage;