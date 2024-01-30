const express = require("express");
const URL = require("../models/urlModel");
const router = express.Router()

router.get('/', async (req, res) => {
    if (!req.user) return res.redirect('/logIn')
    const allUser = await URL.find({ createdBy: req.user._id });
    res.render('index', {
        name: "Soubhagya",
        url: allUser
    });
})

router.all('/signUp', (req, res) => {
    res.render('signUp')
})
router.all('/logIn', (req, res) => {
    res.render('logIn')
})
 
module.exports = router;