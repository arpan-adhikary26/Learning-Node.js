# What is PROCESS in node.js

In node.js, **process** refers to a global object that gives you information and control over the current node.js process that is running currently.

## What PROCESS does?

Process let's you:
- Access environment variable like APIs Key's, DB credentials and more.
- Information about process like PID, version, OS info.
- Read Command line arguments
- Exit & Kill Process

## Examples:

- console.log(process.argv); (returns array of arguments provided with default params)
- console.log(process.pid); (returns process id).
- console.log(process.version); (returns process version).
- process.exit(); (exits process immediately)
- console.log(process.cwd()); (prints current working directory).