const express = require("express");
const URL = require("../models/urlModel");
const router = express.Router()

router.get('/', async (req, res) => {
    const allUser = await URL.find({});
    res.render('index', {
        name: "Soubhagya",
        url: allUser
    });
})

module.exports = router;