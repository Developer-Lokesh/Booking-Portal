const { permitInfoDB } = require("../../services/driver/permit.service");

const permitInfo = async (req, res) => {
   const {vehicleInfo, permitImg, registrationNumber, validityDate, RC} = req.body;
   if(!vehicleInfo || !permitImg || !registrationNumber || !validityDate || !RC){
    return res.json({
        success:false,
        error:"All fields required",
        required:["vehicleInfo", "permitImg", "registrationNumber", "validityDate", "RC"],
    });
   } 
   try {
        const permit = await permitInfoDB({vehicleInfo, permitImg, registrationNumber, validityDate, RC});
        if(!permit){
            return res.json({
                success:false,
                error:"Something went wrong!"
            });
        }
        return res.json({
            success:true,
            message:"Permit registered successfully",
            data:permit,
        });
    } catch (error) {
        console.log(error);
        if(error.code === 11000){
            return res.json({
                success:false,
                error:"Permit is already asign another vehicle"
            })
        }
        return res.json({
            success:false,
            error:"Something went wrong",
        })
    }
};
module.exports = {permitInfo};