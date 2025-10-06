const User = require("../../models/user");

const getmeDB = async (id) => {
    return await User.findById(id);
}

module.exports = {getmeDB}