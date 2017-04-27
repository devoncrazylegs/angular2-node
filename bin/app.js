import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import cors from 'kcors';
import path from 'path';
import serve from 'koa-static';

global.appRoot = path.resolve(__dirname);

// Routes
import index from './src/routes/index';
import storage from './src/routes/storage';

const config = require('./Config');

const app = new Koa();

app.use(bodyParser());
app.use(serve('client'));
app.use(serve(path.join('client/assets')));
app.use(index.routes());
app.use(index.allowedMethods());
app.use(storage.routes());
app.use(storage.allowedMethods());

export default app;