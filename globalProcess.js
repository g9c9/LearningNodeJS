// process object can be accessed globally
// contains information about the current process and tools
// to interact with process
//console.log(process.pid);
//console.log(process.versions.node);

//--------------------------------------------------------------------------

// array of arguments entered in process
// console.log(process.argv);

// -------------------------------------------------------------------------

// Run the process using the command "node globalProcess Joe Smith"
// Prints out "Your name is Joe Smith"
//const [, , firstName, lastName] = process.argv;
//console.log(`Your name is ${firstName} ${lastName}`);

// -------------------------------------------------------------------------
// Run command: node globalProcess --user Jack --greeting "Salutations to"
const grab = (flag) => {
  let indexAfterFlag = process.argv.indexOf(flag) + 1;
  return process.argv[indexAfterFlag];
};

// Grab a specific flag from the list of arguments
const greeting = grab("--greeting");
const user = grab("--user");

console.log(`${greeting} ${user}`);
