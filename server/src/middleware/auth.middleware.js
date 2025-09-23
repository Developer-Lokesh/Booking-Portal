const {verifyToken} = require("../utils/index")

module.exports = (req, res, next) => {
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
        if(!payload.id){
            return res.json({
                success:false,
                error:"Invalid token"
            });
        }
        req.user = payload;
    } catch (error) {
        console.log(error, "Error in auth.middleware");
        return res.json({
            success:false,
            error:"Invalid toked"
        })
    }
    next();
}