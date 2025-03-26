// const {createServer} = require("node:http");  --> common js
//import http from "http"; // --> es6

/***** ES6 ******/
// import {a, b} from "./mymodule.js";  // --> named export
// console.log(a, b);

import ankur from "./mymodule.js"; // --> default export can be imported by any name
console.log(ankur);

// const a = require("./mymodule2.js"); // --> common j
// console.log(a);
