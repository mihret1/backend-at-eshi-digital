const mongoose=require('mongoose')
const bcrypt=require('bcrypt')


const userSchema= new mongoose.Schema({

    firsName:{
        type:String,


    },
    lastName:{
        type:String
    },
    password:{
        type:String,


    },
    email:{
        type:String
    },

    createdAt:{
        type:Date,
        defaultValue:Date.now

    },

    updatedAt:{
        type:Date,
        defaultValue:Date.now

    }


},{timestamps:true}

)



userSchema.pre("save",async function(next){
    if(this.isModified("password")){
        this.password=await
        bcrypt.hash(this.password,10)
    }
    next()
})


userSchema.methods.verifyPassword=async function(
    canditatePassword,
    userPassword,

){
    return await 
    bcrypt.compare(canditatePassword,userPassword)
}




const User=mongoose.model('User',userSchema)
module.exports=User
