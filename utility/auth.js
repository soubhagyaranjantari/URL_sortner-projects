const sessionIDToUserMap = new Map()

const setUser = (id, user) => {
    sessionIDToUserMap.set(id, user)
}

const getUser = (id) => {
    return sessionIDToUserMap.get(id)
}

module.exports={
    setUser,
    getUser
}