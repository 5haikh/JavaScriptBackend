const express = require('express');
const app = express();

app.get('/', function (req, res, next) {
    console.log("First func");
    next();
}, function (req, res, next) {
    console.log("Second func");
    res.json({msg: "hello"});
    // return;
    console.log("End of request"); // without return it'll execute
    next();
}, function (req, res) {
    console.log("Third func");
})

app.listen(3000);