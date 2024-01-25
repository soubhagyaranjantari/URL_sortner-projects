const express = require("express");
const connectMongoDB = require("./connectionMDB");
const app = express();
const PORT = 8001;
const { router } = require('./routes/useUrlRoutes')
connectMongoDB(`mongodb://127.0.0.1:27017/URL_SHORT_NER`).then(() => console.log("mongoDB Connected"));

app.use(express.json());

app.use('/url', router)

app.listen(PORT, () => {
    console.log(`Server Listing At PORT : ${PORT}`);
})