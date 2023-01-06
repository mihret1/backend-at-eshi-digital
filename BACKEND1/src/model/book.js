const mongoose=require('mongoose')


const bookSchema= new mongoose.Schema({

    title:{
        type:String

    },
    desc:{

        type:String

    },

    img:{

        type:String

    },

    creator:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    author:[
          {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
        },
],

content:{
    type:String
}




},{timestamps:true})

const Book=mongoose.model('Book',bookSchema)

module.exports=Book