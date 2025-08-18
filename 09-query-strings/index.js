const express= require("express");
const app = express();
const port = 8080;

app.get("/", (req,res)=>{
   res.send("on the home-page");
})


app.get("/search", (req,res)=>{
    console.log(req.query);
})

app.listen(port, ()=>{
    console.log("listening to port..", port);
})