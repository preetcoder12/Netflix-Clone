const { fetchfromTMDB } = require("../services/tmdb.services");


async function getTrendingTvShows(req, res) {
    try {
        const data = await fetchfromTMDB('https://api.themoviedb.org/3/trending/tv/day?language=en-US');
        const randomTvShow = data.results[Math.floor(Math.random() * data.results?.length)];
        res.json({ success: true, content: randomTvShow });
    } catch (error) {
        res.status(400).json({ success: false, error: "internal server error" });
    }
}

async function getTvShowsTrailers(req, res) {
    const { id } = req.params;
    try {
        const data = await fetchfromTMDB(`https://api.themoviedb.org/3/tv/${id}/videos?language=en-US`);
        res.json({ success: true, content: data.results });
    } catch (error) {
        res.status(400).json({ success: false, error: "internal server error" });
    }
}

async function getTvShowsDetails(req, res) {
    const { id } = req.params;
    try {
        const data = await fetchfromTMDB(`https://api.themoviedb.org/3/tv/${id}?language=en-US`);
        res.json({ success: true, details: data });
    } catch (error) {
        res.status(400).json({ success: false, error: "internal server error" });
    }
}

async function getSimilarTvShows(req, res) {
    const { id } = req.params;
    try {
        const data = await fetchfromTMDB(`https://api.themoviedb.org/3/tv/${id}/similar?language=en-US&page=1`);
        res.json({ success: true, similar: data.results });
    } catch (error) {
        res.status(400).json({ success: false, error: "internal server error" });
    }
}
async function getTvShowsByCategories(req, res) {
    const { category } = req.params;
    try {
        const data = await fetchfromTMDB(`https://api.themoviedb.org/3/tv/${category}?language=en-US&page=1`);
        res.json({ success: true, similar: data.results });
    } catch (error) {
        res.status(400).json({ success: false, error: "internal server error" });
    }
}


module.exports = {
    getTrendingTvShows,
    getTvShowsTrailers,
    getTvShowsDetails,
    getSimilarTvShows,
    getTvShowsByCategories
}