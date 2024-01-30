const express = require("express");
const { handleUserSignUp, handleUserLogIn } = require("../controllers/userController");

const router = express.Router();

router.post('/', handleUserSignUp)

router.post('/logIn',handleUserLogIn)

module.exports = router;