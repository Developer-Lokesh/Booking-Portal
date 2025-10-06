const { getmeDB } = require("../../services/admin/getme.service");

const getMe = async (req, res) => {
    const {id} = req.user;
    console.log(id);
    try {
        const me = await getmeDB(id);
        console.log(me, "this is me");
        if(!me){
            return res.json({
                success:false,
                error:"Something went wrong"
            });
        }
        return res.json({
            success:true,
            message:"Information fetched",
            data: me,
        })
    } catch (error) {
        return res.json({
            success:false,
            error:"Something went wrong aa"
        })
    }
}

module.exports = {getMe};