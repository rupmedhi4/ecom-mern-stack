const express = require("express");
const {addContactUsData} = require("../controllers/contactUs.controller");


const router = express.Router();


router.post('/', addContactUsData);


module.exports = router;
