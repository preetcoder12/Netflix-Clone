require("dotenv").config();
const jwt  = require("jsonwebtoken");
const User = require("../models/user")

async function protectroute(req, res, next) {
    try {
        const token = req.cookies["jwt-netflix"];
        if (!token) { return res.status(401).json({ success: false, error: "Unauthorised - token unavaialable" }) };

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded) { return res.status(401).json({ success: false, error: "Unauthorised - token unmatched" }) }

        const user = await User.findById(decoded.userId).select("-password");
        if (!user) { return res.status(401).json({ success: false, error: "Unauthorised - user not found" }) }

        req.user = user;
        next();
    } catch (error) {
        res.status(500).json({ success: false, error: "Internal server error", details: error.message });
    }
}


module.exports = {
    protectroute,
}