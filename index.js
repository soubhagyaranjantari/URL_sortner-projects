const express = require("express");
const path = require("path")
const connectMongoDB = require("./connectionMDB");
const app = express();
const PORT = 8001;
const { router } = require('./routes/useUrlRoutes');
const URL = require("./models/urlModel");
const staticRouter = require('./routes/staticRouter')

connectMongoDB(`mongodb://127.0.0.1:27017/URL_SHORT_NER`).then(() => console.log("mongoDB Connected"));

app.set('view engine', 'ejs')
app.set('views', path.resolve('./views'))

app.use(express.json());
app.use(express.urlencoded({ extended: false }))


app.use('/url', router); 
app.use('/', staticRouter)

app.listen(PORT, () => {
    console.log(`Server Listing At PORT : ${PORT}`);
})