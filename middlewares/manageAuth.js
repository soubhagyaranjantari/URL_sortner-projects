const { getUser } = require("../utility/auth");

const restictForOnlyLoggedInUser = async (req, res, next) => {
    const userId = req.cookies?.uuid;

    console.log('authmanage', userId)

    if (!userId) return res.redirect('/logIn');

    const user = getUser(userId)

    if (!user) return res.redirect("/logIn")

    req.user = user;
    next()
}
const checkAuth = async (req, res, next) => {
    const userId = req.cookies?.uuid;

    const user = getUser(userId)

    req.user = user;
    next()
}

module.exports = {
    restictForOnlyLoggedInUser,
    checkAuth
}