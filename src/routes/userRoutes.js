const express = require("express");
const userRoute = express.Router();

userRoute.post("/signup", (req, res)=>{
    res.send("Signup");
});

userRoute.post("/signin", (req, res)=>{
    res.send("SignIn");
});

module.exports = userRoute;
