require("dotenv").config();
const User = require("../models/user");
const { hashPassword } = require("../utils");
const {connectDB} = require("./db")

const dbSeed = async ( ) => {
    try {
        await connectDB();

        console.log("creating admin");
        console.log("Database seeding");

        const admin = new User({
            name:"Lokesh",
            email:"9027410147lk@gmail.com",
            password: await hashPassword("admin"),
            phone:9027410147,
            role:"admin"
        });
        await admin.save();

        console.log("admin created");
        process.exit(0);
    } catch (error) {
        console.log(error);
        if(error.code === 11000){
            console.log("This Email is already asign to another admin");
            process.exit(1);  
        }
        console.log(error);
        console.log("Something went wrong");
        process.exit(1);
    }
}

dbSeed();