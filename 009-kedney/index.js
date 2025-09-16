const express = require('express');
const app = express();

app.use(express.json());

let users = [{
    name: 'john',
    kidneys: [{
        healthy: false
    },
    {
        healthy: false
    }]
}];

app.get('/', function (req, res) {
    let kidneyCount = users[0].kidneys.length;
    let healthyKidney = 0;
    for(let i = 0; i < users[0].kidneys.length; i++){
        if(users[0].kidneys[i].healthy) {
            healthyKidney++;
        }
    }
    let unhealthyKindey = kidneyCount - healthyKidney;
    res.json({
        kidneyCount,
        healthyKidney,
        unhealthyKindey
    })
})

app.post('/', function (req, res) {
    let isHealthy = req.body.isHealthy;
    users[0].kidneys.push({healthy: isHealthy});
    res.json({
        "TotalKidnies": users[0].kidneys.length
    });
})

app.put('/', function (req, res) {
    for(let i = 0; i < users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = true;
    }
    res.json({
        "Message": "Done"
    });
})

app.delete('/', function (req, res) {
    let newKidneys = [];
    if (users[0].kidneys.length == 0) {
        res.json({
            "Message": "There are no kindeys to remove!"
        });
    }
    for(let i = 0; i < users[0].kidneys.length; i++){
        if (users[0].kidneys[i].healthy){
            newKidneys.push(users[0].kidneys[i]);
        }
    }
    users[0].kidneys = newKidneys;
    res.json({
        "Message": "All the unhealthy kindenys are removed!"
    });
})

app.listen(3000);