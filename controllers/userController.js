const USER = require("../models/userModel");
const { v4: uuidv4 } = require('uuid');
const { getUser, setUser } = require("../utility/auth")

const handleUserSignUp = async (req, res) => {
    const { name, email, password } = req.body
    await USER.create({
        name: name,
        email: email,
        password: password
    })
    return res.redirect('/');
}

const handleUserLogIn = async (req, res) => {
    const { email, password } = req.body;
    const user_Find = await USER.findOne({ email, password })
    console.log(user_Find);
    if (!user_Find) {
        res.render('logIn', {
            msg: " Invalid email or password"
        })
    }
    const sessionID = uuidv4();
    setUser(sessionID, user_Find)
    console.log(sessionID);
    res.cookie('uuid', sessionID)
    res.redirect('/');
}

module.exports = {
    handleUserSignUp,
    handleUserLogIn,
}