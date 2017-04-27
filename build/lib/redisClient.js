'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redis = require('redis');

var _redis2 = _interopRequireDefault(_redis);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var client = _redis2.default.createClient();

client.on('error', function (error) {
    console.log(error);
});

exports.default = client;