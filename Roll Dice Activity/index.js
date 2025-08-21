const express = require("express");
const app = express();
const port=8080;
const path= require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/rolldice",(req,res)=>{
    diceNum = Math.floor(Math.random()*6)+1;
    res.render("rolldice", {diceNum});
})



app.listen(port, ()=>{
    console.log(`listening to port ${port}`);
})