const express = require("express");
const { addToCartHandler, getUserCartHandler, clearUserCartHandler } = require("../controllers/fetchData.controller");

const router = express.Router();

router.post('/data', addToCartHandler);
router.get("/user/:userId", getUserCartHandler);
router.delete('/clear/:userId', clearUserCartHandler);

module.exports = router;
