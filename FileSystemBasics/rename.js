const fs = require("fs");

// Synchronous rename
fs.renameSync("./assets/colors.json", "./assets/colorData.json");

// Asynchronous rename
fs.rename("./assets/notes.md", "./storage-files/notes.md", (err) => {
  if (err) {
    throw err;
  }
});

setTimeout(() => {
  fs.unlinkSync("./assets/helloworld.txt");
}, 4000);
