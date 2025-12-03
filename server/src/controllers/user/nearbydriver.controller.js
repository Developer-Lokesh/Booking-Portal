const Driver = require("../../models/driver");

const nearbyDriver = async (req, res) => {
    const {pickuplong, pickuplat} = req.body;

    if(pickuplong && pickuplat){
        return res.json({
            success:false,
            error:"Pickuplong and pickuplat is required",
            required:["pickuplong", "pickuplat"]
        })
    }

    try {
        
    const near = await Driver.find({
        status:"online",
        isAvailable: true,
        location:{
            $near:{
                $geometry:{
                    type:"point",
                    coordinates:[pickuplong, pickuplat]
                },
                $maxDistance : 5000
            }
        }
    })

    if(!near){
        return res.json({
            success:false,
            error:"Something went wrong"
        });
    }

    return res.json({
        success:false,
        message:"All nearby drivers",
        data: near
    })
    } catch (error) {
        console.log(error, "error in nearbydriver controller");
       return res.json({
        success:false,
        error:"Something went wrong",
       }); 
    }
};

module.exports = {nearbyDriver};