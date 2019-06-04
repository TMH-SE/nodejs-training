const fs = require('fs')

/* -----------------------------------------------async------------------------------------- */

// fs.open('example.txt', 'a', (err, fd) => {
//   if (err) {
//     throw err
//   }
//   // append file
//   fs.appendFile('example.txt', 'hello world', { encoding: 'utf8', mode: 0o666, flag: 'a' }, (err) => {
//     if (err) {
//       throw err
//     }
//     console.log('appended to file!')
//     fs.close(fd, (err) => {
//       if (err) {
//         throw err
//       }
//     })
//   })
// })

/* ------------------------------------------------sync------------------------------------- */
let fd

try {
  // open file
  fd = fs.openSync('example.txt', 'a')
  // append file
  fs.appendFileSync(fd, 'hello world', { encoding: 'utf8', mode: 0o666, flag: 'a' })
  // make directory
  fs.mkdirSync('hello nodejs', { recursive: true, mode: 0o777 })
  // copy file
  fs.copyFileSync('example.txt', 'hello nodejs/copyfile.txt')
  // read directory
  console.log(fs.readdirSync('hello nodejs', { encoding: 'utf8', withFileTypes: true }))
  // read file
  console.log(fs.readFileSync('hello nodejs/copyfile.txt', { encoding: 'utf8', flag: 'r' }))
  // write file
  fs.writeFileSync('hello nodejs/copyfile.txt', 'helo', { encoding: 'utf8' })
  // rename file
  fs.renameSync('copyfile.txt', 'copyfile(1).txt')
  // truncate
  fs.truncateSync('hello nodejs/copyfile.txt', 3)
  // remove file
  fs.unlinkSync('hello nodejs/copyfile.txt')
  // remove directory
  fs.rmdirSync('hello nodejs')
} catch (err) {
  throw err
} finally {
  if (fd !== undefined) {
    // close file
    fs.closeSync(fd)
  }
}
