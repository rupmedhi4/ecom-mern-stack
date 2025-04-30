const express = require("express");
const {signup,login,getCookie, logOut} = require("../controllers/auth.controller");
const {authMiddleware,tokenCheckMiddleware} = require("../middleware/auth.middleware")

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/logout', logOut);
router.get('/check-cookie', getCookie);

module.exports = router;
