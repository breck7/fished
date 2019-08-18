const fished = require("./index.js")
/*keep-line*/ const sampleCode = require("fs").readFileSync("sample.fished", "utf8")
const program = new fished(sampleCode)
const errors = program.getAllErrors()
console.log("Sample program compiled with " + errors.length + " errors.")
if (errors.length)
 console.log(errors.map(error => error.getMessage()))