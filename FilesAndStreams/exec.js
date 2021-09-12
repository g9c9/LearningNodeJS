const cp = require("child_process");

// cp.exec("start http://www.linkedin.com/learning", (err) => {
//   if (err) throw err;
// });

// cp.exec("ls", (err, data) => {
//   if (err) {
//     throw err;
//   }
//   console.log(data);
// });

cp.exec("node readStream", (err, data, stderr) => {
  console.log(data);
});
