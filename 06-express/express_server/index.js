const express = require("express"); //requiring express module
const app = express();

const port = 8080;

app.listen(port, ()=>{
    console.log(`listening to port ${port}`);
}) //server started