const { Router } = require("express");
const { signup, login, logout, authcheck } = require("../controllers/auth");
const { protectroute } = require("../middleware/protectRoute");
const router = Router();

router.post('/signup', signup)
router.post('/login', login)
router.post('/logout', logout)
router.get('/auth', protectroute, authcheck)

module.exports = router;