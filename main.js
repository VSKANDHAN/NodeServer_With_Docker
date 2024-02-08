const express=require('express')
const app=express()
const port=process.env.PORT||5000
app.get('/',(req,res)=>{
    res.send('Hello Welcome to Node Server inside Docker Container')
})

app.listen(port,()=>{console.log('Server Started at the port',port);})