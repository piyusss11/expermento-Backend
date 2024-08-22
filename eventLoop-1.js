const fs = require("fs");
const a = 100;
setImmediate(() => {
  console.log("immediate");
  setTimeout(() => {
    console.log("timer in immediate");
  }, 0);
});

fs.readFile("./dummyFile.txt", "utf8", (err, data) => {
  console.log("File reading callback", data);
});

setTimeout(() => {
  console.log("timer expired");
}, 0);

function printA() {
  console.log("print a = ", a);
}
printA();
console.log("the last line");
