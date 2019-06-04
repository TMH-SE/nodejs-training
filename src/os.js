const os = require('os')

// OS cpu architecture ex: x64
console.log(os.arch())
// information cpu
console.log(os.cpus())
// endianness of the CPU
console.log(os.endianness())
// free memory
console.log(os.freemem())
//
console.log(os.getPriority(0))
// home directory
console.log(os.homedir())
// hostname of OS
console.log(os.hostname())
// load average
console.log(os.loadavg())
// networks intefaces
console.log(os.networkInterfaces())
// OS platforms
console.log(os.platform())
// OS release
console.log(os.release())
// OS tmp directory
console.log(os.tmpdir())
// total memory
console.log(os.totalmem())
// operating system name
console.log(os.type())
// system uptime
console.log(os.uptime())
// user information
console.log(os.userInfo())
