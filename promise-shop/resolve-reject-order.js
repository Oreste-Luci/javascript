
let promise = (param) => {
    return new Promise( (resolve, reject) => {

        if (param === 1) {
            console.log('Promise Resolving');
            resolve('Uno');
        }

        console.log('Promise Rejecting');
        reject('Rejecting')
    });
}

promise(1).then( (text) => {
    console.log(text);
}, (error) => {
    console.log(error);
});
