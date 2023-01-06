const express=require('express')
const authRoute=require('./src/routers/authRoute')
const bookRoute=require('./src/routers/bookRoute')
const userRoute=require('./src/routers/userRoute')



const app=express()
const mongoose=require('mongoose')
const port=3500

app.use(express.json())
// const MONGO_URL=mongodb://localhost/blog



mongoose.connect("mongodb://localhost/eshi",()=>{
    console.log("database connected")
})


app.use('/api/v1/auth',authRoute)
app.use('/api/v1/book',bookRoute)
app.use('/api/v1/user',userRoute)



// app.use("/",()=>{
//     console.log("hello world is already taken ")
// })



app.get("/",(req,res)=>{
    console.log("somehting")
    res.send("something is happing")
}) 

app.get("/json",(req,res)=>{
    res.json({
        "she is ":"cool"
    })

})

app.get('/post',(req,res)=>{
    res.send("post page")
})


app.get('/hello',(req,res)=>{
    res.send("<h1>hello</h1>")
})

app.post("/",(req,res)=>{
    // console.log("somehting")
    res.send("something is happing in  post")
}) 


app.put('/put',(req,res)=>{
    res.send("post page is updated")
})




app.listen(port,()=>{
    console.log("backend is running")
})