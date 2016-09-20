exports.sanitize = (word) => {
    return word.toLowerCase().replace(/-/, ' ');
};

exports.tokenize = (sentence) => {
    return sentence.split(' ');
};

exports.info = (callback) => {

    let https = require('https');

    let options = {
        host: 'api.github.com',
        path: '/repos/Oreste-Luci/netflix-oss-example',
        method: 'GET',
        headers: {
            'User-Agent': 'oreste'
        }
    };

    let responseBody = '';

    https.request(options, (response) => {

            response.on('data', (data) => {
                responseBody += data;
            });

            response.on('end', () => {
                callback(JSON.parse(responseBody));
            });

            response.on('error', (error) => {
                callback(error);
            });
        })
        .end();
};

exports.infoLang = (infoFunc, callback) => {

    infoFunc((reply) => {
        callback('Language is ' + reply.language);
    });
};
