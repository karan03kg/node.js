const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 3000;

mongoose.connect("mongodb://localhost:27017/new_data")
.then(()=>console.log("Mongo connected"))
.catch((err)=>console.log("Error")) 

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    }
},
{timestamps:true})

const User = mongoose.model("user",userSchema);

app.use(express.urlencoded ({extended:false}));

app.get("/",(req,res)=>{
    res.send("Hello");
})

app.post("/",async(req,res)=>{
    const {name,email} = req.body;
    console.log(name);

    await User.create({
        name:name,
        email:email
    })
    res.send("done");
})

app.get("/user",async(req,res)=>{
    const allUser = await User.find({});
    console.log(allUser);
    res.send("done");
})

app.listen(port,()=>{
    console.log(`Server is running on port:${port}`);
})