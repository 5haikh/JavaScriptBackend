const mongoose = require("mongoose");
const express = require("express");
const jwt = require("jsonwebtoken");
const zod = require("zod");

app = express();
app.use(express.json());

const userSignUpSchema = zod.object({
    email: zod.email(),
    password: zod.string(),
    name: zod.string()
});
const userSignInSchema = zod.object({
    email: zod.email(),
    password: zod.string()
})

const User = mongoose.model("users", {name: String, email: String, password: String});
mongoose.connect("mongodb+srv://smfaiz1024_db_user:RVjZo7xasf7wl3TE@cluster0.rmhz0vh.mongodb.net/newusers?retryWrites=true&w=majority&appName=Cluster0");

app.post("/signup", async(req, res) => {
    const userInput = req.body;
    const inputValidated = userSchema.safeParse(userInput);
    console.log(inputValidated);
    if(!inputValidated.success) {
        return res.status(400).json({msg: "Invalid input"});
    }
    const user1 = new User({name: userInput.name, email:userInput.email, password: userInput.password});
    const found = await User.findOne({email: userInput.email});
    console.log(found);
    if(found) {
        return res.status(400).json({msg: "User already exists"});
    }
    user1.save()
        .then(doc => {
            return res.status(201).json({msg: "User saved"})
        })
        .catch(err => {console.log("failed to save user with err " + err);})    
})

app.post("/signin", async (req, res) => {
    const userInput = req.body;
    const inputValidated = userSignInSchema.safeParse(userInput);
    
    if(!inputValidated.success) {
        return res.status(400).json({msg: "Invalid input"});
    }

    const userObj = await User.findOne({email: userInput.email});

    if(!userObj) {
        return res.status(403).json({msg: "User doesnt found"});
    }

    if(userObj.password ==  userInput.password) {
        const token = jwt.sign({email: userInput.email}, "Hello@123");
        return res.status(200).json({token});
    }
    else {
        return res.status(403).json({msg: "Invalid password"});
    }
})

app.listen(3000);