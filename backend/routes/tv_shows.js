const { Router } = require("express");
const { getTrendingTvShows, getTvShowsTrailers, getTvShowsDetails, getSimilarTvShows, getTvShowsByCategories } = require("../controllers/tv_shows")

const router = Router();

router.get('/trending', getTrendingTvShows);
router.get('/:id/trailers', getTvShowsTrailers);
router.get('/:id/details', getTvShowsDetails);
router.get('/:id/similar', getSimilarTvShows);
router.get('/:category', getTvShowsByCategories); //could be airing_today , on_the_air , popular , top_rated 

module.exports = router;