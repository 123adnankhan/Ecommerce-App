import mongoose from "mongoose";

const connectDB = async ()=>{
    
    // This line will be executed when mongodb connection is successfully established 
    mongoose.connection.on('connected',()=>{
        console.log("DB Connected")
    })
    await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`)
}

export default connectDB;