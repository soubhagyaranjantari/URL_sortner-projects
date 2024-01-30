// importing
const express = require("express");
const path = require("path")
const connectMongoDB = require("./connectionMDB");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 8001;

const { restictForOnlyLoggedInUser, checkAuth } = require('./middlewares/manageAuth')

// mongoDB models
const URL = require("./models/urlModel");
const USER = require("./models/userModel")

// mongo connection
connectMongoDB(`mongodb://127.0.0.1:27017/URL_SHORT_NER`).then(() => console.log("mongoDB Connected"));

// routers
const { router } = require('./routes/useUrlRoutes');
const staticRouter = require('./routes/staticRouter');
const userRouter = require('./routes/useUserRouter');

// ssr
app.set('view engine', 'ejs')
app.set('views', path.resolve('./views'))

// middlewire
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

// sending to paticular routes
app.use('/', checkAuth, staticRouter);
app.use('/url', restictForOnlyLoggedInUser, router);
app.use('/user', userRouter);

// listing port
app.listen(PORT, () => {
    console.log(`Server Listing At PORT : ${PORT}`);
})