const express = require('express');
const app = express();

app.post("/nobody", function(req, res) {
    console.log("There is no body: " + req.body);
    res.json({
        msg: "success"
    });
});

//custom middleware should have next() -- important
//before this routes will not be able to use this middleware
app.use(express.json()); //express.json() returns function
app.post("/withbody", function(req, res) {
    console.log("There is body: " + req.body);
    res.json({
        msg: "success"
    });
});

app.listen(3000);
