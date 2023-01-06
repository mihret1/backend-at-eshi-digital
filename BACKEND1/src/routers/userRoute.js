


const {getOneUser,getUsers,updatedUser,deleteUser}=require("../controllers/userController")
const express=require('express')

const router=express.Router()


router.get('/',getUsers)


router.route('/:id')

  .put(updatedUser)
  .delete(deleteUser)
  .get(getOneUser)



module.exports=router