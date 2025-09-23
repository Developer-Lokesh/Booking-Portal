const { getrideDB, cancelRideDB, bookrideDB, updateRideLocationDB } = require("../../services/user/ride.service");

const getride = async (req, res) => {
    try {
        const rides = await getrideDB();
        if (!rides) {
            return res.json({
                success: false,
                error: "Rides not found"
            });
        }
        return res.json({
            success: true,
            message: "Your rides",
            data: rides
        })
    } catch (error) {
        console.log(error);
        return res.json({
            success: false,
            error: "Something went wrong"
        });
    }
};



const bookride = async (req, res) => {
    const user = req.user.id;
    const {driver, pickupLocation, dropLocation , price , distance, duration, otp } = req.body;

    if (!user || !driver || !pickupLocation || !dropLocation || !price || !distance || !duration || !otp ) {
        return res.json({
            success: false,
            error: "All fields required!",
            require: ["user", "driver", "pickuplocation", "droplocation", "price", "distance", "duration", "otp"]
        });
    }
    try {
        // 
        const ride = await bookrideDB({ user, driver, pickupLocation, dropLocation , price, distance, duration, otp });
        if (!ride) {
            return res.json({
                success: false,
                error: "Booking failed!"
            });
        }
        return res.json({
            success: true,
            message: "Ride booked successfully",
            data: ride
        })

    } catch (error) {
        console.log(error);
        return res.json({
            success: false,
            error: "Something went wrong"
        })
    }
};


const updateRideLocation = async (req, res) => {
    const { Id } = req.params;
    const {dropLocation} = req.body;
    if (!Id) {
        return res.json({
            success: false,
            error: "Ride not found"
        });
    }
    try {
        const updateData = await updateRideLocationDB(Id, { dropLocation });
        if(!updateData){
            return res.json({
                success:false,
                error:"Something went wrong while updation"
            });
        }
        return res.json({
            success:true,
            message:"Location updated successfully",
            data:updateData
        });
    } catch (error) {
        console.log("Error in Ride controller", error);
        return res.json({
            success: false,
            error: "Something went wrong"
        })
    }
};

const cancelRide = async (req, res) => {
    const { Id } = req.params;
    console.log(Id);
    if (!Id) {
        return res.json({
            success: false,
            error: "Id is required"
        });
    }
    try {
        const cancelled = await cancelRideDB( Id );
        console.log(cancelled)
        if (!cancelled) {
            return res.json({
                success: false,
                error: "Something went wrong while cancelled"
            });
        }
        return res.json({
            success: true,
            messaage: "Ride cancelled successfully",
            data: cancelled
        })
    } catch (error) {
        console.log(error);
        return res.json({
            success: false,
            error: "Something went wrong"
        });
    }
};

module.exports = { getride, bookride, updateRideLocation, cancelRide }
