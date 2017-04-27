const requestHelper = {
    getBody(ctx) {
        return new Promise((resolve, reject) => {
            let data = '';
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

export default requestHelper;
