import { User } from "../models/User.js";

export const createUser=async(req,res)=>{
    const {username,email}=req.body;
    try{

    if(!username || !email){
        return res.status(400).json(
            {
                status:'Failed',
                message:'Username and email are required'
            }
        );
    }

    const existingUserByUsername=await User.findOne({username});

    if(existingUserByUsername){
        return res.status(400).json(
            {
                status:'Failed',
                message:'Username already exists'
            }
        );
    }

    const existingUserByEmail=await User.findOne({email});

    if(existingUserByEmail){
        return res.status(400).json(
            {
                status:'Failed',
                message:'Email already exists'
            }
        );
    }
    const newUser=new User({
        username,
        email
    });

    await newUser.save();
    return res.status(201).json(
        {
            status:'Success',
            message:'User created successfully',
            user:newUser
        }
    );
    } catch (error) {
        console.log(error);
        return res.status(500).json(
            {
                status:'Failed',
                message:'Something went wrong'
            }
        );
    }    
}


export const getAllUsers=async(req,res)=>{
    try {
        const users=await User.find({});
        return res.status(200).json(
            {
                status:'Success',
                message:'Users fetched successfully',
                users
            }
        );
    } catch (error) {
        console.log(error);
        return res.status(500).json(
            {
                status:'Failed',
                message:'Something went wrong'
            }
        );
    }
}