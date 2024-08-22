const fs = require("fs");
setImmediate(() => {
  console.log("setImmediate");
});

setTimeout(() => {
  console.log("timer expired");
}, 0);

Promise.resolve("Promise").then(console.log);

fs.readFile("./dummyFile.txt", "utf8", (err, data) => {
  console.log("File reading callback", data);
});

process.nextTick(() => {
    process.nextTick(()=>{
        console.log("inner nextTick")
        
    })
  console.log("first nextTick");
});

console.log("last Line of code")

// the last line
// first nextTick
// inner nextTick
// Promise
// timer expired
// setImmediate
// File reading callback