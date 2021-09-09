const path = require("path");

//console.log(__dirname);   // __dirname is global
//console.log(__filename);  // __filename is global

console.log(`The file name is ${path.basename(__filename)}`);
