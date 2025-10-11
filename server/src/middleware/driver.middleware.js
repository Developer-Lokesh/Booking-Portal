const Driver = require("../models/driver");
const { verifyToken } = require("../utils");

module.exports = async (req, res, next) => {
    const isValid = req.headers.authorization?.startsWith("Bearer ");
    if(!isValid){
        return res.json({
            success:false,
            error:"Unauthorized"
        });
    }
    try {
        const token = req.headers.authorization.split(" ")[1];
        const payload = verifyToken(token);
        if(!payload?.id){
            return res.json({
                success:false,
                error:"Invalid token"
            });
        }


        req.driver = payload;
        next();
    } catch (error) {
        return res.json({
            success:false,
            error:"Invalid token"
        })
    }
    
}