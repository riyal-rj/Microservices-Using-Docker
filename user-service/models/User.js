import mongoose from "mongoose";
import valiator from "validator";

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:[true,'Please enter ypur name'],
        trim:true,
        maxlength:[200,'Name cannot exceed 200 characters'],
        unique:true,
        minlength:[3,'Name should have more than 3 characters']
    },
    email:{
        type:String,
        unique:true,
        required:[true,'Please enter an email id'],
        trim:true,
        lowercase:true,
        validate:[valiator.isEmail,'Please enter a valid email id']
    }
},{timestamps:true});

export const User=mongoose.model('User',userSchema);