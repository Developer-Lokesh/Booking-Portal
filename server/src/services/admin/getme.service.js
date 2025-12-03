const User = require("../../models/user");

const getmeDB = async (id) => {
    return await User.findById(id).select("-password -__v");
}

module.exports = {getmeDB}