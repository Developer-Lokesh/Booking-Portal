const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const generateToken = (data) => {
    // console.log(data)
    const accesstoken = jwt.sign(data, process.env.JWT_SECRET, {expiresIn:"30d"});
    const reftoken = jwt.sign(data, process.env.JWT_SECRET, {expiresIn:"30d"});
    return {accesstoken, reftoken};
}

const verifyToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET);
}

const hashPassword = (password) => {
    return bcrypt.hash(password, 12);
}

const verifyPassword = (password, hashedPassword) => {
    return bcrypt.compare(password, hashedPassword);
}


module.exports = {generateToken, verifyToken, hashPassword, verifyPassword};