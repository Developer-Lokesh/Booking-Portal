const Driver = require("../../models/driver");
const User = require("../../models/user")

const getUsersDB = async () => {
    return await User.find();
}

const getDriversDB = async () => {
    return await Driver.find();
}

module.exports = {getUsersDB, getDriversDB}