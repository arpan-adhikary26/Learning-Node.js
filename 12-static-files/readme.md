# What are static files

Static files are those that dont change dynamically, for example:
- HTML
- CSS
- Javascript
- Fonts
- Images

## Serving Static files to express

To serve static files to express:-

- Create a folder named "public" that will contain all your static assets.
- Use the following syntax

 **app.use(express.static(path.join(__dirname,"public")))**
