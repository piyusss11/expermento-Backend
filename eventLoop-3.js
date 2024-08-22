const fs = require("fs");
setImmediate(() => {
  console.log("setImmediate");
});

setTimeout(() => {
  console.log("timer expired");
}, 0);

Promise.resolve("Promise").then(console.log);

fs.readFile("./dummyFile.txt", "utf8", (err, data) => {
  setTimeout(() => {
    console.log("2nd timer");
  }, 0);

  process.nextTick(() => {
    console.log("2nd process.nextTick");
  });

  setImmediate(() => {
    console.log("2nd setImmediate");
  });
  console.log("File reading callback", data);
});

process.nextTick(() => {
  console.log("process.nextTick");
});

console.log("the last line");

// the last line
// process.nextTick
// Promise
// timer expired
// setImmediate
// File reading callback
// 2nd process.nextTick
// 2nd setImmediate
// 2nd timer
