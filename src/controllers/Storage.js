const config = require('../../Config');
import client from '../lib/redisClient';

class Storage {
    storeTerm(ctx) {
        return new Promise((resolve, reject) => {
            console.log(ctx.request.body);
            let itemToStore = `${ctx.request.body.word}:${ctx.request.body.pigLatinWord}`;

            client.lpush('words', itemToStore.toString("base64"), (err, reply) => {
                if(err) {
                    reject(err);
                } else {
                    if(reply > 10) {
                        client.ltrim('words', 0, 9);
                    }
                    resolve({
                        status : reply,
                        word   : itemToStore
                    });
                }
            });
        });
    }

    getItems(ctx) {
        return new Promise((resolve, reject) => {
            client.lrange('words', 0, 9, (error, reply) => {
                if(error) {
                    reject(error);
                } else {
                    resolve(reply);
                }
            });
        });
    }
}

export default Storage;