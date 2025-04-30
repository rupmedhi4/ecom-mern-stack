const mongoose =require("mongoose")
const dotenv = require("dotenv")


dotenv.config()

const dbConnect = async ()=>{
    try {
       await mongoose.connect(process.env.MONGO_URL)
        console.log("db connected successfully");
    } catch (error) {
        console.log(`db not connected ${error}`);
        
    }
}

module.exports = dbConnect
   