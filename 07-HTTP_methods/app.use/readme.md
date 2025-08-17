# What is app.use

app.use() is a method used in express to add middlewares to your app.

## What is middleware

A middleware is a function that runs between request and response.

**syntax:**

app.use((req,res)()=>{

    //function to execute

})

## Sending request

- When you run a express server , you can send requests to your browser, postman, curl, frontend, etc using GET, POST, etc. Your server listens for these and responds.

- You can send a response using res.send() method, where res is an **response** object.

- **syntax:**

app.use((req,res)()=>{

    res.send("Hello World!!");

})

- using res.send(), you can send a string, object, html code, array or buffer.