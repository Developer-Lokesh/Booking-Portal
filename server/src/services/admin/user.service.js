const User = require("../../models/user")

const getUsersDB = async () => {
    return await User.find();
}

module.exports = {getUsersDB}