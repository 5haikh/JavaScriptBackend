const express = require('express');
const app = express();

let hits = 0;
function hitsCounter(req, res, next) {
    hits++;
    console.log(hits);
    next();
}
app.get('/', hitsCounter, function (req, res) {
    res.json({
        msg: "success"
    });
});

app.listen(3000);