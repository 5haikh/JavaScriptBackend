const fs = require('fs')


function print1() {
    console.log(pm1);
}
pm1 = new Promise(function (resolve) {
    setTimeout(function () {
        resolve("Last promise");
    }, 3 * 1000);
})
pm1.then(print1);


function myPromise() {
    return new Promise(function(resolve) {
        fs.readFile('hello.txt', 'utf-8', function(err, data) {
            resolve(data);
        });
    });
}

p = myPromise();

function printData(data) {
    console.log(data);
}

p.then(printData);


pm = new Promise(function (resolve) {
    console.log("focus here")
    resolve("Hello");
})
function print() {
    console.log(pm);
}
pm.then(print);



console.log("After promises");