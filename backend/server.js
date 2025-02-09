require('dotenv').config();
const express = require("express");
const authRoutes = require("./routes/auth")
const movieRoutes = require("./routes/movies")
const tv_showsRoutes = require("./routes/tv_shows")
const { connectDB } = require("./config/db")

const app = express();
const port = process.env.port || 10000;

app.use(express.json());

app.get('/', (req, res) => {
    return res.send("home page");
});

app.use('/user', authRoutes);
app.use('/movies', movieRoutes);
app.use('/tv_shows', tv_showsRoutes);



app.listen(port, () => {
    console.log(`server started at port:  http://localhost:${port}`);
    connectDB();

})

