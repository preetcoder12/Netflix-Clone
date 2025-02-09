require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const generatetokencookie = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "1d" });
    res.cookie("jwt-netflix", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, //15 days in milisec
        httpOnly: true, //only accesible by browser
        sameSite: "strict" //prevents csrf attacks cross-site request forgery attacks
    });
    return token;
}

module.exports = {
    generatetokencookie,
}