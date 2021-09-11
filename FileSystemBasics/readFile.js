const fs = require("fs");

// Synchronous reading
//const text = fs.readFileSync("./assets/helloworld.txt", "UTF-8");

// Asynchronous reading of text
// fs.readFile("./assets/helloworld.txt", "UTF-8", (err, text) => {
//   console.log("file contents read");
//   console.log(text);
// });

//console.log(text);

//Asynchronous reading of binary file (image file in this case)
fs.readFile("./assets/GOWRG_Wallpaper_Desktop_Family_1080.jpg", (err, img) => {
  if (err) {
    console.log(`An error has occured: ${err.message}`);
    process.exit();
  }
  console.log("file contents read");
  console.log(img);
});
