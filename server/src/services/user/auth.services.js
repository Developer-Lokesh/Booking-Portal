const user = require("../../models/user")

const registerDB = async ({email, name, password}) => {
    const userdata = await user.findOne({email});
    
    if(userdata){
        return res.json({
            success:false,
            message:"User is already exist with this email",
        });
    }

    newUser = new user({name, email, password});
    return newUser.save();
}

const loginDB = async ({email}) => {
    return await user.findOne({email});
}

module.exports = {loginDB, registerDB}