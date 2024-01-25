const mongoose = require('mongoose')

const urlShortnerSchema = new mongoose.Schema({
    shortID: {
        type: String,
        unique: true,
        required: true
    },
    redirectURL: {
        type: String,
        required: true
    },
    visitHistory: [{ timestamp: { type: String } }],
},
    { timestamps: true });

const URL = mongoose.model('url', urlShortnerSchema);



module.exports = URL;