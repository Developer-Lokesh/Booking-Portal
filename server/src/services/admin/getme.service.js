const User = require("../../models/user");

const getmeDB = async (id) => {
    return await User.find(id);
}

module.exports = {getmeDB}