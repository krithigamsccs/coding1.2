import express from "express";
const app = express()

app.get("/",(req,res)=>{
    res.send("server running on port 3000")
})
app.listen(3000)