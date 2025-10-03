const { getUsersDB, getDriversDB } = require("../../services/admin/user.service");

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

const getdrivers = async (req,res) => {
    try {
        const drivers = await getDriversDB();
    if(!drivers){
     return res.json({
        success:false,
        error:"Driver not found"
     });   
    }
    return res.json({
        success:true,
        message:"Drivers fetched successfully",
        data:drivers
    })
    } catch (error) {
        console.log(error);
        return res.json({
            success:false,
            error:"Something went wrong"
        })
    }
}

module.exports = {getusers, getdrivers};