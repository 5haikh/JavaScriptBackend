const fs = require('fs');

function readFile(cb) {
    fs.readFile('hello.txt', 'utf-8', function (err, data) {
        cb(data);
    });
    console.log("Inside callback");
}

function printFile(data) {
    console.log(data);
}

console.log("Before callback");
readFile(printFile);
console.log("After callback");

