const USER = require("../models/userModel");

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
    res.redirect('/');
}

module.exports = {
    handleUserSignUp,
    handleUserLogIn,
}