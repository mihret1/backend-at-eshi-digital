const express=require('express')
const bookModel=require('../model/book')



const getBook= async (req,res)=>{

    const book= await bookModel.findById(req.params.id)
    if(!book){
        return res.status(404).json({"book":"book not find"})
   
    }
    res.status(200).json({
        status:"success ",
        book
    })
    
}

const getBooks= async (req,res)=>{
    const books= await bookModel.find()
    if(!books){
        return res.status(404).json({"books":"books not find"})
   
    }
    res.status(200).json({
        status:"success ",
        users
    })
    
}

const createBook=async (req,res)=>{
    const {title, img,desc, content}=req.body
    const book=await bookModel.create({
        title,
        img,
        desc,
        content


    })
    res.status(201).json({
        status:"success",
        book

    })



}



const updatedBook=async (req,res)=>{
    const {title,img,content,desc}=req.body
    const book=await bookModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
        )

        if(!book){
            res.status(404).json({
                status:"not found",
                

            })

            
        }

        res.status(200).json({
            status:"sucessfull updated",
            book

        })
    
}


const deleteBook=async (req,res)=>{
    const book= await bookModel.findByIdAndDelete(req.params.id)
    console.log(book)
    res.status(200).json({
        status:"deleted"
    })
}



module.exports ={getBook,getBooks,createBook,updatedBook,deleteBook}