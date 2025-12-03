//online or offline

const { onlineDB, offlineDB } = require("../../services/driver/driverStatus.service");

const onlineStatus = async (req,res) => {
    const {id} = req.params;
    
    if(!id){
        return res.json({
            success:false,
            error: "Id is required"
        });
    }
    try {
        const online = await onlineDB(id);

        if(!online){
            return res.json({
                success:false,
                error:"Something went wrong"
            });
        }

        return res.json({
            success:true,
            message:"Status updated successfully",
            data:online,
        });

    } catch (error) {
        console.log(error, "error in driver status controller");
        return res.json({
            success:false,
            error:"Something went wrong"
        });
    }
};

const offlineStatus = async (req,res) => {
    const {id} = req.params;

    if(!id){
        return res.json({
            success:false,
            error:"Id is required",
        })
    }

    try {

        const offline = await offlineDB(id);

        if(!offline){
            return res.json({
                success:false,
                error:"Something went wrong"
            });
        }

        return res.json({
            success:true,
            message:"Status updated successfully",
            data:offline
        })
        
    } catch (error) {
        console.log(error, "error in driverStatus controller");
        return res.json({
           success:false,
           error:"Something went wrong" 
        })
    }
};

module.exports = {onlineStatus, offlineStatus}