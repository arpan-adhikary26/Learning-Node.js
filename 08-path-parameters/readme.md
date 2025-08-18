# What is path parameters

- Path parameters are variables that lets you capture value from the URL path.
- You can create a path parameter using :(colon) following by the variable name.
- For example - https://localhost:8080/:username
- here, :username is treated as a parameter that will hold value sent by the user.

## Accessing parameters

To access parameters from the url , use **req.params** method.