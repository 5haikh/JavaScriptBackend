const express = require('express');
const app = express();

app.use(express.json());
let errorCount = 0;

app.post('/', function (req, res) {
    let myVar = req.body.someValue;
    let myVarlen = myVar.length;
    console.log(myVar);
    res.send("Ok");
});

app.use(function (err, req, res, next) {
    errorCount++;
    console.log(errorCount);
    res.status(500).json({msg: "Something went wrong"});
});

app.listen(3000);
