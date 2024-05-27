const express=require("express");
const app=express();
app.get("/",(req,res)=>{
    res.send("hello!I am registration form");
})
const port=8000
app.listen(port,()=>{
    console.log("server connected");
})