const express = require("express");
const app = express();
const port = 8080;

app.listen(port,()=>{
    console.log(`listening to port ${port}`);
});

app.get("/", (req,res)=>{
    res.send("You are inside the homepage");
});

app.get("/search", (req,res)=>{
    res.send("You are inside the search page");
});

app.get("/contact", (req,res)=>{
    res.send("You are inside the contact page");
});

