let NodeCache = require( "node-cache" );
let myCache = new NodeCache( { stdTTL: 5, checkperiod: 0 } );

let getValue = (key) => {

    let value = myCache.get(key);

    if (value == undefined) {

        console.log('*************************************** Cache expired. Refreshing.');
        initCache();
        value = myCache.get(key);
    }

    return value;
};

let getKeys = () => {
    return myCache.keys();
}

let initCache = () => {

    console.log('Storing data in cache');

    let countries = ['SP', 'GB', 'FR', 'CL', 'NL' ];
    let cities = ['BCN', 'LON', 'STG'];

    myCache.set('countries', countries);
    myCache.set('cities', cities);
};

let logCacheContents = () => {

    console.log('\n' + (new Date()) + '  -----------------------------------------');
    let keys = getKeys();
    console.log('Keys: ' + keys);

    keys.forEach( key => {
        console.log(`${key} => ${getValue(key)}`);
    });
};

initCache();
logCacheContents();

setInterval(logCacheContents,1*1000);

