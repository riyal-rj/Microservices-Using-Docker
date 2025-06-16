import mongoose from "mongoose";

const taskSchema=new mongoose.Schema({
    taskTitle:
    {
        type:String,
        required:[true,'Please enter task name'],
        trim:true,
        maxlength:[200,'Name cannot exceed 200 characters'],
        unique:true,
        minlength:[3,'Name should have more than 3 characters']
    },
    taskDescription:
    {
        type:String,
        required:[true,'Please enter task description'],
        trim:true,
        maxlength:[200,'Name cannot exceed 200 characters'],
        unique:true,
        minlength:[3,'Name should have more than 3 characters']
    },
    userId:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:[true,'Please enter task description'],
        trim:true,
        maxlength:[200,'Name cannot exceed 200 characters'],
        unique:true,
        minlength:[3,'Name should have more than 3 characters']
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
},{timestamps:true});

export const Task=mongoose.model('Task',taskSchema);