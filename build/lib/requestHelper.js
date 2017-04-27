'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var requestHelper = {
    getBody: function getBody(ctx) {
        return new Promise(function (resolve, reject) {
            var data = '';
            //ctx.on('data', (chunk) => {
            //    data += chunk;
            //});
            //
            //ctx.on('end', (chunk) => {
            //    resolve(data);
            //});
        });
    }
};

exports.default = requestHelper;