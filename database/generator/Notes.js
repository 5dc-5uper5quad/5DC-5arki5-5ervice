
const faker = require('faker');
const fs = require('fs');

// Transfer contents from one file to another

// Great for small files, Synchronous
// const block = fs.readFileSync('small');
// fs.writeFileSync('small-copy', block);

// Asynchronous solution, not good for large files
// fs.readFile('small', (err, data) => {
//   fs.writeFile('small-copy', data, () => {
//     console.log('File saved.');
//   });
// });

// Let's use streams! Works with big files!
// fs.createReadStream('small')
//   .pipe(fs.createWriteStream('small-copy'));


// Let's create streams
// const Readable = require('stream').Readable;
// const rs = new Readable();

// rs.push('Hey, there! ');
// rs.push('What\'s, goin\' on?\n');
// rs.push(null);
// // console.log(Object.getPrototypeOf(rs));
// rs.pipe(process.stdout);