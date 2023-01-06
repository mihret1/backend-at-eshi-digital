// const {login,register}=require("../controllers/authController")



const {getBook,getBooks,createBook,updatedBook,deleteBook}=require("../controllers/bookController")
const express=require('express')

const router=express.Router()


router.get('/',getBooks)
router.post('/',createBook)


router.route('/:id')

  .put(updatedBook)
  .delete(deleteBook)
  .get(getBook)



module.exports=router