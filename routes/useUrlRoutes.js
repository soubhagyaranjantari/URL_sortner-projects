const express = require("express");
const { handdleGenerateNewShortUrl, handdleGetAnalytics } = require("../controllers/urlController");
const URL = require("../models/urlModel");

const router = express.Router();

router.post('/', handdleGenerateNewShortUrl);

router.get("/:shortID", async (req, res) => {
    const shortID = req.params.shortID;
    console.log(shortID);
    const entry = await URL.findOneAndUpdate({
        shortID
    }, {
        $push: {
            visitHistory: {
                timestamp: new Date().toISOString().slice(0, 19).replace("T", " ")
            },
        },
    });
    res.redirect(entry.redirectURL)
});

router.get('/analytics/:shortID', handdleGetAnalytics)

module.exports = {
    router,
}
