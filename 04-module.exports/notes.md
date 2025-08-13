# module.exports

The module.export is a special object in javascript that contains all the essential information that can be shared from one file to another. With the help of it , you can share your code from one file to many.

**For example:**
module.exports="hello";

you can include it in any file using the require() function.

**For example:**
let imp = require("./file-path);

### Exporting file from a different directory

To export a file from a different directory, you have to create a **index.js** file in the folder containing the files and require the files in the  **index.js**.

Later you can now include the actually file from any directory using the require() function by passing the directory name as argument.

**working flow:**
- You make a directory named **fruits**
- You have files named apple.js, banana.js and orange.js
- You create an **index.js**  file inside the same **fruits** folder
- Require all the files and export them as an array inside the **index.js**
- Now from any other directory, you can access the files of **fruits** directory by
  including the **fruits** directory using **require(./fruits);**

