const express = require('express');
const zod = require('zod');
const app = express();

app.use(express.json());

const schema = zod.object({
    email: zod.email(),
    password: zod.string().min(8)
});

app.post("/",(req, res) => {
    const cred = req.body;
    const isValid = schema.safeParse(cred);
    if (!isValid.success) {
        res.json({
            msg: "Invalid input"
        });
        return;
    }
    res.json({
        msg: "success"
    });
});

app.listen(3000)