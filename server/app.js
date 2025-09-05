require("dotenv").config();
const express = require("express");
const { connectDB } = require("./src/config/db");
const authRoutes = require("./src/routes/user.routes")
const app = express()
const port = 4001;

connectDB();

app.use(express.json());

app.get("/", (req,res) => {
    res.send("This is the starting of booking portal");  
});

app.use("/auth", authRoutes)

app.listen(port,() => {
    console.log(`server is running on http://localhost:${port}`);
});