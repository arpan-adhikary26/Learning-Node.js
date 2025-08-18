const express = require("express");
const app= express();
const port=8080;


app.get("/", (req,res)=>{
    res.send("On the home-page");
})

app.get("/:username", (req,res)=>{
    const{username,userid}=req.params;
    res.send(`${username} logged in...`);
})


app.listen(port,()=>{
    console.log(`listening to port ${port}`);
});