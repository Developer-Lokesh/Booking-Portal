module.exports = (req, res, next) => {
    if(req.user.role !== "admin"){
        return res.json({
            success:false,
            error:"Access denied!"
        });
    }
    next();
}