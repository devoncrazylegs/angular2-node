'use strict';

const env = process.env.NOD_ENV || 'development';
const port = process.env.PORT || 4341;
const src = env === 'production' ? './app' : './app';

require('babel-polyfill');
if(env === 'development') {
    require('babel-register');
}

const app = require(src).default;
app.listen(port);