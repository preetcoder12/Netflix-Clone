require('dotenv').config();
const express = require("express");
const authRoutes = require("./routes/auth")
const movieRoutes = require("./routes/movies")
const tv_showsRoutes = require("./routes/tv_shows")
const search_routes = require("./routes/searchRoutes")
const { connectDB } = require("./config/db")
const { protectroute } = require("./middleware/protectRoute");
const cookieParser = require('cookie-parser');

const app = express();
const port = process.env.port || 10000;

app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
    return res.send("home page");
});

app.use('/api/v1/user', authRoutes);
app.use('/api/v1/movie', protectroute, movieRoutes);
app.use('/api/v1/tv_shows', protectroute, tv_showsRoutes);
app.use('/api/v1/search', protectroute, search_routes);



app.listen(port, () => {
    console.log(`server started at port:  http://localhost:${port}`);
    connectDB();

})

