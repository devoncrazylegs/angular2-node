require('babel-polyfill');

import KoaRouter from 'koa-router';
import fs from 'fs';

const index = KoaRouter();

const LOAD_HTML = function() {
    return new Promise((resolve, reject) => {
        fs.readFile(appRoot + '/client/index.html', {}, (err, data) => {
            if(err) return reject(err);
            resolve(data);
        });
    });
};

index.get('/', async (ctx, next) => {
    ctx.body = await LOAD_HTML();
});

export default index;