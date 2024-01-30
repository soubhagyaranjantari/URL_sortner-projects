const shortId = require("shortid")
const URL = require('../models/urlModel')
const handdleGenerateNewShortUrl = async (req, res) => {
    const shortID = shortId();
    const body = req.body;
    if (!body.url) res.status(400).json({ msg: "url required" })


    await URL.create({
        shortID: shortID,
        redirectURL: body.url,
        visitHistory: [],
        createdBy:req.user._id
    })
    return res.render('index', {
        shortURL: shortID
    })
    return res.json({ Created_ID: shortID })
}
const handdleGetAnalytics = async (req, res) => {
    try {
        const shortID = req.params.shortID;
        const result = await URL.findOne({ shortID });

        if (result) {
            res.json({ "Total Clicks": result.visitHistory.length, "Analytic Summary": result.visitHistory });
        } else {
            res.status(404).json({ error: 'URL not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


module.exports = {
    handdleGenerateNewShortUrl,
    handdleGetAnalytics
}