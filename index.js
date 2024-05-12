const express = require("express");
const app = express();

const session = require("express-session")

//this middleware sets session id and signs it with a cookie 
app.use(session({
    //secret is used to sign cookie
    secret:"thisSecret",
    resave: false,
    saveUninitialized: false,

}))


app.get("/", (req,res)=>{
    const pageViews = count++
    res.send(`this page has been visited ${pageViews} times`)
})

app.get("/session",(req,res)=>{
    if(req.session.pageViews){
        req.session.pageViews +=1;
    }else{
        req.session.pageViews = 1;
    }
    res.send(req.session)
})
app.get("/cookie", (req,res)=>{
    res.send("testing secure")
})

app.listen("3000", (req,res)=>{
    console.log("listening on")
})