console.log (process.pid) // 27
console.log (process.versions.node) // 10.19.0

console.log (process.argv)
//[ '/usr/bin/node',
//   '/mnt/c/Users/Mark/Documents/GitHub/learningNode/globalProcess.js' ]

const [, , firstName, lastName] = process.argv; // array destructuring
console.log (`Your name is ${firstName} ${lastName}`)
// node global mark christison
// Your name is mark christison

const grab = flag => {
    let indexAferFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indexAferFlag]
};

const greeting = grab("--greeting")
const user = grab("--user")

console.log(`${greeting} ${user}`)
// node globalProcess --user mark --greeting "ah hoy hoy"
// ah hoy hoy mark

// node globalProcess --greeting "Hi" --user "Mary"
// Hi Mary