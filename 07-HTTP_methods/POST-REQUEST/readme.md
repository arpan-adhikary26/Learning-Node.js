# POST REQUEST

The **post** request is used to send data to the server. Usually used for form submissions, sending login detials, creating a new record in database.

**syntax:**

app.post("route",(req,res)()=>{

    res.send("Hello World!!");

});