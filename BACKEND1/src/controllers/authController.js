const express=require('express')
const userModel=require('../model/user')




const login=async (req,res)=> {
    const {email,password}=req.body
    const user=await userModel.findOne({email})
    if(!user){
        return res.status(404).json({"user":"user not find"})

        
    }
    if(await !user.verifyPassword(user.password,password)){
       return res.status(404).json({
            status:"error",
            msg:"email or password not valid"
        })
    }

    

    res.status(200).json({
        status:"success ",
        user
    })
}


const register=async(req,res)=>{
    const {email,firstName,lastName,password} =req.body;
    const user= await userModel.create(
        {
            email,
            firstName,
            lastName,
            password
        }
    )
    res.status(201).json({
        status:"success",
        user

    })


}








module.exports ={login,register}