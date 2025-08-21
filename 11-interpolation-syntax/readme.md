# What is interpolation

- In Ejs, interpolation refers to how you embedded javascript into your HTML template.
- You can read more about interpolation from (https://ejs.co)

## Types of interpolation

1. **Output Escaped**
   - Outputs the value, and escapes HTML
   - syntax: **<%= code here %>**
   - For example: <%= username %>, will render only "arpan".

2. **Output Unescaped**
   - Outputs the unescaped value into the template.
   - syntax: **<%- code here %>**
   - For example: "<%-<b>Arpan</b>%>

3. **Scriplet/No Output**
   - Scriptlet tag, for control-flow, no output.
   - syntax: <% if(islogin) { %>
     
     <h2>Welcome Back!</h2>

     <% } %>

4. **Comments**
   - Comments in EJS, not rendered in html.
   - syntax: <%# This will not be shown in the rendered HTML %>
