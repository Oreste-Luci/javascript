console.log('Chaining Promises');

let promise1 = (param) => {
    return new Promise( (resolve, reject) => {
        resolve('(A: ' + param + ')');
    });
};

let promise2 = (param) => {
    return new Promise( (resolve, reject) => {
        resolve('(B: ' + param + ')');
    });
};

let promise3 = (param) => {
    return new Promise( (resolve, reject) => {
        resolve('(C: ' + param + ')');
    });
};

// First approach lo chain promises

promise1('Hello').then( result1 => {
    promise2(result1).then( result2 => {
        promise3(result2).then( result3 => {
            console.log(result3);
        });
    });
});

// Second approach to chain promises
Promise.all([
    promise1('1'),
    promise2('2'),
    promise3('3')
]).then( result => {
    console.log(result);
    result.forEach(e => console.log(e));
});
