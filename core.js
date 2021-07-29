const path = require("path")
const util = require ( "util" )
const { getHeapStatistics } = require ( "v8" )
const dirUploads = path.join(__dirname, 'www', 'files', 'uploads')

console.log (dirUploads)

util.log( path.basename(__filename) ) // like console.log but also prints time

util.log(" ^ The name of the current file")

util.log(getHeapStatistics())