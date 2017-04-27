import KoaRouter from 'koa-router';
const storage = KoaRouter({ prefix: '/store' });
import requestHelper from '../lib/requestHelper';

import storageController from '../controllers/Storage.js';
const storageControllerInstance = new storageController();

storage.get('/', async (ctx, next) => {
    var items = await storageControllerInstance.getItems(ctx);
    ctx.body = items;
    await next();
});

storage.post('/', async(ctx, next) => {
    let items = '';
    ctx.body = await storageControllerInstance.storeTerm(ctx);
    await next();
});

export default storage;