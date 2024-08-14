const crypto = require("node:crypto");

console.log("hello world");
let a = 100;
let b = 98;

// pbkdf2 = Password Base Key Derivative Function
crypto.pbkdf2Sync("password", "salt", 5000000, 50, "sha512")
console.log("sync key is generated") // sync one


crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("key is generated"); // async one
});

function multi(a, b) {
  let result = a * b;
  return result;
}

let c = multi(a, b);
console.log(c);
