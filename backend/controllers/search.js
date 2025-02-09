const User = require('../models/user');
const { fetchfromTMDB } = require('../services/tmdb.services');

async function searchPerson(req, res) {
    try {
        const { query } = req.params;
        const data = await fetchfromTMDB(`https://api.themoviedb.org/3/search/person?query=${query}&include_adult=false&language=en-US&page=1`);
        if (!data.results.length) return res.status(404).json({ success: false, message: "No results found" });

        await User.findByIdAndUpdate(req.user._id, {
            $push: {
                searchHistory: {
                    id: data.results[0].id,
                    image: data.results[0].profile_path,
                    title: data.results[0].name,
                    searchType: "person",
                    createdAt: Date.now(),
                }
            }
        });

        res.status(200).json({ success: true, person: data.results });
    } catch (error) {
        console.error("Error in searchPerson:", error);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    }
}

async function searchMovies(req, res) {
    try {
        const { query } = req.params;
        const data = await fetchfromTMDB(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`);
        if (!data.results.length) return res.status(404).json({ success: false, message: "No results found" });

        await User.findByIdAndUpdate(req.user._id, {
            $push: {
                searchHistory: {
                    id: data.results[0].id,
                    image: data.results[0].poster_path,
                    title: data.results[0].title,
                    searchType: "movie",
                    createdAt: Date.now(),
                }
            }
        });

        res.status(200).json({ success: true, movie: data.results });
    } catch (error) {
        console.error("Error in searchMovies:", error);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    }
}

async function searchTvShows(req, res) {
    try {
        const { query } = req.params;
        const data = await fetchfromTMDB(`https://api.themoviedb.org/3/search/tv?query=${query}&include_adult=false&language=en-US&page=1`);
        if (!data.results.length) return res.status(404).json({ success: false, message: "No results found" });

        await User.findByIdAndUpdate(req.user._id, {
            $push: {
                searchHistory: {
                    id: data.results[0].id,
                    image: data.results[0].poster_path,
                    title: data.results[0].title,
                    searchType: "tv",
                    createdAt: Date.now(),
                }
            }
        });

        res.status(200).json({ success: true, tv: data.results });
    } catch (error) {
        console.error("Error in searchTvShows:", error);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    }
}

async function searchHistory(req, res) {
    try {
        res.status(200).json({ success: true, content: req.user.searchHistory });
    } catch (error) {
        res.status(500).json({ success: false, error: "Internal Server Error" });
    }
}

async function deletesearchHistory(req, res) {
    let { id } = req.params; //as our id was in string so it can not able to delete the seach history
    id = parseInt(id);
    try {
        await User.findByIdAndUpdate(req.user._id, { $pull: { searchHistory: { id: id } } });
        res.status(200).json({ success: true, msg: "Item removed from search history" });
    } catch (error) {
        console.error("Error in deletesearchHistory:", error);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    }
}

module.exports = { searchPerson, searchMovies, searchTvShows, searchHistory, deletesearchHistory };
