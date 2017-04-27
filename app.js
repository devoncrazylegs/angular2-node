'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _koaBodyparser = require('koa-bodyparser');

var _koaBodyparser2 = _interopRequireDefault(_koaBodyparser);

var _kcors = require('kcors');

var _kcors2 = _interopRequireDefault(_kcors);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _koaStatic = require('koa-static');

var _koaStatic2 = _interopRequireDefault(_koaStatic);

var _index = require('./src/routes/index');

var _index2 = _interopRequireDefault(_index);

var _storage = require('./src/routes/storage');

var _storage2 = _interopRequireDefault(_storage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

global.appRoot = _path2.default.resolve(__dirname);

// Routes


var config = require('./Config');

var app = new _koa2.default();

app.use((0, _koaBodyparser2.default)());
app.use((0, _koaStatic2.default)('client'));
app.use((0, _koaStatic2.default)(_path2.default.join('client/assets')));
app.use(_index2.default.routes());
app.use(_index2.default.allowedMethods());
app.use(_storage2.default.routes());
app.use(_storage2.default.allowedMethods());

exports.default = app;