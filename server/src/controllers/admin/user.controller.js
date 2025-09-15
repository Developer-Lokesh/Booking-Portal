const { getUsersDB } = require("../../services/admin/user.service");

const getusers = async (req,res) => {
    try {
        const users = await getUsersDB();
        if(!users){
            return res.json({
                success:false,
                error:"Users not found"
            });
        }
        return res.json({
            success:true,
            message:"User fetched successfully",
            data:users
        });
    } catch (error) {
        console.log(error);
        return res.json({
            success:false,
            error:"Something went wrong"
        });
    }
}

module.exports = {getusers};