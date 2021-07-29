const fs = require("fs");


const text = fs.readFile("./assets/Readme.md", "UTF-8", (err, text) => {
    console.log ("file contents read");
    console.log (text);
})
