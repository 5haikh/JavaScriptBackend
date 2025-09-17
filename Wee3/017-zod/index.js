const express = require('express');
const zod = require('zod');

const app = express();
const schema = zod.array(zod.number());

app.use(express.json());

app.post('/', (req, res) => {
    let myVar = req.body.myArr;
    const response = schema.safeParse(myVar);
    res.json({
        response
    });
});

app.listen(3000);