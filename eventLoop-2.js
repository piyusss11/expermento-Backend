const fs = require("fs");
const a = 100;
setImmediate(() => {
  console.log("setImmediate");
});

Promise.resolve("Promise").then(console.log);

fs.readFile("./dummyFile.txt", "utf8", (err, data) => {
  console.log("File reading callback", data);
});

setTimeout(() => {
  console.log("timer expired");
}, 0);

process.nextTick(() => {
  console.log("process.nextTick");
});

function printA() {
  console.log("print a = ", a);
}
printA();
console.log("the last line");
