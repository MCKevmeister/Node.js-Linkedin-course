const path = require("path")

console.log (__dirname) // /mnt/c/Users/Mark/Documents/GitHub/learningNode
console.log (__filename) // /mnt/c/Users/Mark/Documents/GitHub/learningNode/global.js

console.log (`The file name is ${path.basename(__filename)}`) // The file name is global.js
