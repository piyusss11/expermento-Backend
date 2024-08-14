const fs = require("fs");
const https = require("https");

console.log("hello bhailog");
let a = 100;
let b = 98;

fs.readFile("./dummyFile.txt", "utf8", (err, data) => {
  console.log("dummy data is :", data);
});
https.get("https://dummyjson.com/products", (res) => {
  console.log("data fetched");
});


// not to use sync ones which blocks the main thread
fs.readFileSync("./dummyFile.txt", "utf8") 
console.log("this will execue after file read")

setTimeout(() => {
  console.log("timeOut done");
}, 5000);

function multi(a, b) {
  let result = a * b;
  return result;
}

let c = multi(a, b);
console.log(c);
