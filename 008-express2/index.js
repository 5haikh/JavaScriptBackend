const express = require('express');

const app = express();

app.get('/getSquare', function (req, res) {
    let mynum = req.query.a;
    if (Number.isNaN(parseInt(mynum))) {
        console.log("It's not a valid number")
        res.status(400).send("Please send the valid number!");
    }
    else {
        res.status(200).send("Square root of the number is: " + (mynum * mynum));
    }
})

app.listen(3000, function () {
    console.log("Server has been started!")
})