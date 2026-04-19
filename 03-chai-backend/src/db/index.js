import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log("Connected to MongoDB !! DB HOST: ", connectionInstance.connection.host);
    
    // console.log(connectionInstance.connection);
    console.log("DB Name:", connectionInstance.connection.name);
    console.log("Status:", connectionInstance.connection.readyState);
    // console.log("Collections:", connectionInstance.connection.collections);
    
  } catch (error) {
    console.log("MongoDB connection error", error);
    process.exit(1)
  }
};

export default connectDB;