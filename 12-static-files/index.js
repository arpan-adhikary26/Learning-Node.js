const express = require("express");
const app = express();
const path= require("path");
const port= 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname,"public")));

app.get("/:username",(req,res)=>{
    const instaData=require("./data.json");
    const {username}= req.params;
    const data = instaData[username];
    res.render("instagram", {data});
})

app.listen(port, ()=>{
    console.log(`listening to port ${port}`);
})