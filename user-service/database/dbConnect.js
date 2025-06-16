import mongoose from "mongoose";
import { ENV_VARS } from "../envVARS.js";

export const dbConnect=async()=>{
    try {
        await mongoose.connect(ENV_VARS.MONGODB_URI);
        console.log("MongoDB Database Connected");
    } catch (error) {
        console.log(error);
    }
}
