# What is Templating

- Templating is a way to dynamically generate HTML pages using data fromcyour server.
Instead of hardcoing HTML everytime for minute changes in the page , you can simply generate a template.

- In simple words, templates are the blueprint for HTML pages.
- Popular templating engines are:
 - **EJS**
 - **PUG**
 - **Handlebars**

## Getting Started With EJS:

- EJS stands for **embedded javascript engine**, it is a templating engine used to generate dynamic HTML pages with embedded javascript.
- File extension of EJS is **.ejs**
- With EJS you can:
 - Render server side data into the frontend
 - Insert dynamic values like username, age, role, etc.
 - Use loops and conditions.
 - Reuse layouts and components.

## Installing EJS

To install EJS, run:- 

**npm install ejs**

## Setup EJS using express

In your express file, you need to set the view engine to EJS.
Below Code demonstrates the process...

- After setting up Express, create a folder named **views**.
- This folder contains all your ejs templated to include.
- Inside views folder, you can now create your ejs files using **.ejs** extension.
- Render EJS files from express using **res.render("filename")**.