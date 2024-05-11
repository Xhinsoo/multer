const express = require("express");
const app = express();

const session = require("express-session")

//this middleware sets session id and signs it with a cookie 
app.use(session({
    secret:"thisSecret",

}))

app.get("/", (req,res)=>{
    // res.cookie("name","shin",{secure:true})
    res.send("hello")
})


app.get("/cookie", (req,res)=>{
    res.send("testing secure")
})

app.listen("3000", (req,res)=>{
    console.log("listening on")
})