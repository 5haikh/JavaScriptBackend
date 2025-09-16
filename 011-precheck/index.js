const express = require('express');
const app = express();

app.get('/health-check', function (req, res) {
    const myId = req.query.myId;
    const username = req.headers.username;
    const password = req.headers.password;
    console.log(myId);
    console.log(username);
    console.log(password);

    if(username == undefined && password == undefined) {
        res.status(403).json({
            msg: 'Username or password is not provided.'
        })
    }
    if(myId != 1 && myId != 2) {
        res.status(411).json({
            msg: 'Invalid myId'
        })
    }
    res.status(200).json({
        msg: 'All check successful'
    })
})

//problem in this method for multiple routes we have to repeat logic for multiple times.

app.listen(3000);