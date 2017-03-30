const express=require("express");
const hbs=require("hbs");
var app=express();


app.use(express.static(__dirname+"/public"));

app.set("view engine", "hbs");


app.use((req,res,next)=>{
   res.send("hello its middle ware")
    next();
});


app.get("/one",(req,res)=>{
    res.render("second.hbs");
});


app.get("/about",(req,res)=>{
    res.render("about.hbs");
});













app.listen(3000);