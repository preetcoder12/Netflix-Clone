const { fetchfromTMDB } = require("../services/tmdb.services");


async function getTrendingmovies(req, res) {
    try {
        const data = await fetchfromTMDB('https://api.themoviedb.org/3/trending/movie/day?language=en-US');
        const randomMovie = data.results[Math.floor(Math.random() * data.results?.length)];
        res.json({ success: true, content: randomMovie });
    } catch (error) {
        res.status(400).json({ success: false, error: "internal server error" });

    }
}

async function getMovieTrailers(req, res) {
    const { id } = req.params;
    try {
        const data = await fetchfromTMDB(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`);
        res.json({ success: true, content: data.results });
    } catch (error) {
        res.status(400).json({ success: false, error: "internal server error" });
    }
}

async function getMovieDetails(req, res) {
    const { id } = req.params;
    try {
        const data = await fetchfromTMDB(`https://api.themoviedb.org/3/movie/${id}?language=en-US`);
        res.json({ success: true, details: data });
    } catch (error) {
        res.status(400).json({ success: false, error: "internal server error" });
    }
}

async function getSimilarMovies(req, res) {
    const { id } = req.params;
    try {
        const data = await fetchfromTMDB(`https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`);
        res.json({ success: true, similar: data.results });
    } catch (error) {
        res.status(400).json({ success: false, error: "internal server error" });
    }
}
async function getMoviesByCategories(req, res) {
    const { category } = req.params;
    try {
        const data = await fetchfromTMDB(`https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`);
        res.json({ success: true, similar: data.results });
    } catch (error) {
        res.status(400).json({ success: false, error: "internal server error" });
    }
}


module.exports = {
    getTrendingmovies,
    getMovieTrailers,
    getMovieDetails,
    getSimilarMovies,
    getMoviesByCategories,
}