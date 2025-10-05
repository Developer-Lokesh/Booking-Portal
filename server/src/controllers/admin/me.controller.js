const { getmeDB } = require("../../services/admin/getme.service");

const getMe = async (req, res) => {
    const {id} = req.user;
    try {
        const me = await getmeDB(id);
        if(!me){
            return res.json({
                success:false,
                error:"Something went wrong"
            });
        }
        return res.json({
            success:true,
            message:"Information fetched"
        })
    } catch (error) {
        return res.json({
            success:false,
            error:"Something went wrong"
        })
    }
}

module.exports = {getMe};