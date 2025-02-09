const { Router } = require("express");
const { getTrendingmovies, getMovieTrailers, getMovieDetails, getSimilarMovies, getMoviesByCategories } = require("../controllers/movies")

const router = Router();

router.get('/trending', getTrendingmovies);
router.get('/:id/trailers', getMovieTrailers);
router.get('/:id/details', getMovieDetails);
router.get('/:id/similar', getSimilarMovies);
router.get('/:category', getMoviesByCategories); //could be now_playing , popular , top_rated , upcoming 

module.exports = router;