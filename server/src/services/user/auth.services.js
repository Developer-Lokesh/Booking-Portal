const User = require("../../models/user")

const registerDB = async ({email, name, password,phone,role}) => {
    const userdata = await User.findOne({email});
    
    if(userdata){
        return {
            success:false,
            error:"User is already exist with this email",
        };
    }

    let newUser = new User({name, email, password, phone,role});
    return newUser.save();
}

const loginDB = async ({email}) => {
    return await User.findOne({email}).select("-__v");
}

module.exports = {loginDB, registerDB}