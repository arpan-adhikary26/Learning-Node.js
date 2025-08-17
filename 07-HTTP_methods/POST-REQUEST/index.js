const express = require("express");
const app = express();
const port = 8080;

app.use(express.json());

app.listen(port, ()=>{
    console.log("listening to port 8080");
});

app.post("/", (req,res)=>{
    res.send("posting a request in home page");
})