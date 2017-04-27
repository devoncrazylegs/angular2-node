'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _requestHelper = require('../lib/requestHelper');

var _requestHelper2 = _interopRequireDefault(_requestHelper);

var _Storage = require('../controllers/Storage.js');

var _Storage2 = _interopRequireDefault(_Storage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var storage = (0, _koaRouter2.default)({ prefix: '/store' });

var storageControllerInstance = new _Storage2.default();

storage.get('/', function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(ctx, next) {
        var items;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return storageControllerInstance.getItems(ctx);

                    case 2:
                        items = _context.sent;

                        ctx.body = items;
                        _context.next = 6;
                        return next();

                    case 6:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function (_x, _x2) {
        return _ref.apply(this, arguments);
    };
}());

storage.post('/', function () {
    var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(ctx, next) {
        var items;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        items = '';
                        _context2.next = 3;
                        return storageControllerInstance.storeTerm(ctx);

                    case 3:
                        ctx.body = _context2.sent;
                        _context2.next = 6;
                        return next();

                    case 6:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined);
    }));

    return function (_x3, _x4) {
        return _ref2.apply(this, arguments);
    };
}());

exports.default = storage;