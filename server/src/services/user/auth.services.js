const User = require("../../models/user")

const registerDB = async ({email, name, password,phone}) => {
    const userdata = await User.findOne({email});
    
    if(userdata){
        return {
            success:false,
            error:"User is already exist with this email",
        };
    }

    let newUser = new User({name, email, password, phone});
    return newUser.save();
}

const loginDB = async ({email}) => {
    return await User.findOne({email});
}

module.exports = {loginDB, registerDB}