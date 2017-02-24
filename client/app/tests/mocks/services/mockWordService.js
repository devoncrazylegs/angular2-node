"use strict";
var Rx_1 = require("rxjs/Rx");
var MockWordService = (function () {
    function MockWordService() {
    }
    MockWordService.prototype.storeWord = function () {
        return Rx_1.Observable.from(['Ok']);
    };
    MockWordService.prototype.getWords = function () {
        return Rx_1.Observable.from([]);
    };
    return MockWordService;
}());
exports.MockWordService = MockWordService;
//# sourceMappingURL=mockWordService.js.map