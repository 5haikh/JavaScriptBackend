const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "Faiz@123";

const app = express();
app.use(express.json());

const allUsers = [
    {
        name: "faiz",
        username: "faiz@email.com",
        password: "faiz"
    },
    {
        name: "zaid",
        username: "zaid@email.com",
        password: "zaid"
    }
];

function userExists(username, password) {
    for(let i = 0; i < allUsers.length; i++) {
        if(allUsers[i].username == username && allUsers[i].password == password) {
            return true;
        } 
    }
    return false;
}

app.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    if(!userExists(username, password)) {
        return res.status(403).json({
            msg: "User doesnt exist"
        })
    }

    let token = jwt.sign({username: username}, jwtPassword);
    return res.json({token});
})

app.get("/users", (req, res) => {
    const token = req.headers.authorization;
    try {
        const decoded = jwt.verify(token, jwtPassword);
        console.log(decoded);
        return res.status(200).json({
            users: allUsers.filter((value) => {
                if(value.username == decoded.username)
                    return false;
                else 
                    return true;
            })
        });
    } catch (error) {
        console.log(error);
        return res.status(403).json({
            msg: "Invalid token"
        });
    }
})

app.listen(3000);