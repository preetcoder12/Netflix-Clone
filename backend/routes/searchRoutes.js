const { Router } = require("express");
const { searchPerson, searchMovies, searchTvShows,searchHistory ,deletesearchHistory} = require("../controllers/search")
const router = Router();

router.get('/person/:query', searchPerson);
router.get('/movie/:query', searchMovies);
router.get('/tv_shows/:query', searchTvShows);

router.get('/history', searchHistory);
router.delete('/history/:id', deletesearchHistory);
module.exports = router;