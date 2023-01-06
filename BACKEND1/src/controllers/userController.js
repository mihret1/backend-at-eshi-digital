const express=require('express')
const userModel=require('../model/user')




//GET one user
const getOneUser=async (req, res) => {
    try {
      const user = await userModel.findById(req.params.id);
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  };



//all user
const getUsers= async (req,res)=>{
    const users= await userModel.find()
    if(!users){
        return res.status(404).json({"users":"users not find"})
   
    }
    res.status(200).json({
        status:"success ",
        users
    })
    
}




const updatedUser=async (req,res)=>{
    const {email,firstName,lastName,password}=req.body
    const user=await userModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
        )

        if(!user){
            res.status(404).json({
                status:"not found",
                

            })

            
        }

        res.status(200).json({
            status:"sucessfull updated",
            user

        })
    
}


const deleteUser=async (req,res)=>{
    const book= await userModel.findByIdAndDelete(req.params.id)
    res.status(200).json({
        status:"deleted"
    })
}



module.exports ={getOneUser,getUsers,deleteUser,updatedUser}