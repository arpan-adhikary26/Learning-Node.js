# What is NPM

- NPM stands for **Node Package Manager**, it is standard package manager that is automatically installed with node.js
- To verify npm version, type **npm -v** in the terminal

## What NPM does

1. Install Packages i.e code libraries and tools created by other developer
2. Manage dependencies
3. Run scripts
4. Publish your own packages to the npm registry

## Installing Packages

Packages can be installed in two manners:
1. Local Installation 
2. Global Installation

## Local Installation:

- Installed in a specific folder and is only accessible to that folder.
- **syntax:** npm install package_name or inp i package_name
- For example - npm install express
- When installed locally, node_modules(folder containing actuall package code), package.json, and package-lock.json.

### package.json

This file contains descriptive and functional meta data about the project such as name, version and dependencies.

**npm init** is the command used to create a package.json file for your node.js project.

### package-lock.json

This file contains exact information about dependencies and sub-dependencies.

## Global Installation:

- Installed globally so that modules can be accessed from any directory.
- Not the best practice , developers mainly prefer local installation.
- **syntax:** npm install -g package_name or inp i -g package_name

## require v/s import:

- require-> it the CommonJS module system
- import-> ES Modules (ESM) Standard

**CommonJS syntax:**
//require

const marks = require("/marks);

//export

module.exports = 75;

**ESM syntax:**
//import

import {name} from '/name';

//export

export let name = 'ARPAN';
