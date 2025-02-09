const User = require("../../backend/models/user")
const bcrypt = require("bcryptjs");
const { generatetokencookie } = require("../utils/generatetoken");

//......................................SIGNUP...............................................

async function signup(req, res) {
    try {
        const { email, username, password } = req.body;
        if (!username || !email || !password) { return res.status(400).json({ error: "misssing values" }); }
        const emailregx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailregx.test(email)) { return res.status(400).json({ error: "Invalid email" }); }
        if (password.length < 6) { return res.status(400).json({ error: "password must be atleast 6 characters" }); }
        const existinguserByemail = await User.findOne({ email: email });
        if (existinguserByemail) { return res.status(400).json({ error: "Email already exist" }); }
        const existinguserByeusername = await User.findOne({ username: username });
        if (existinguserByeusername) { return res.status(400).json({ error: "Username already exist try another one" }); }

        const salt = await bcrypt.genSalt(10);
        const hashedpass = await bcrypt.hash(password, salt);

        const PROFILE_PICS = ["./avatar1.png", "./avatar2.png", "./avatar3.png"];
        const image = PROFILE_PICS[Math.floor(Math.random() * PROFILE_PICS.length)];
        const newuser = new User({
            username,
            email,
            password: hashedpass,
            image,
        });


        generatetokencookie(newuser._id, res);
        await newuser.save();
        res.status(200).json({ msg: "submitted" });

    } catch (error) {
        console.error("Signup Error:", error); // Log error to console
        return res.status(500).json({ error: "Internal server error !" });
    }

}

//......................................SIGNIN...............................................

async function login(req, res) {
    try {
        const { email, password } = req.body;
        if (!email || !password) { return res.status(400).json({ success: false, error: " Missing values" }) };

        const user = await User.findOne({ email: email });
        if (!user) { return res.status(400).json({ success: false, error: " Invalid credentials" }) };
        const ispassword = await bcrypt.compare(password, user.password);
        if (!ispassword) { return res.status(400).json({ success: false, error: " Invalid credentials" }) };

        generatetokencookie(user._id, res);
        return res.status(200).json({ success: true, msg: " successfull Login" })

    } catch (error) {
        console.log(error, " error occured while Login");
        return res.status(400).json({ success: false, error: " error occured while Login" })
    }

}


//......................................LOGOUT...............................................
function logout(req, res) {
    try {
        res.clearCookie("jwt-netflix");
        return res.status(200).json({ success: true, msg: " logout successfully" })
    } catch (error) {
        console.log(error, " error occured while logout");
        return res.status(400).json({ success: false, error: " error occured while logout" })
    }

}

module.exports = {
    signup,
    login,
    logout

}