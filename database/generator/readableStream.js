
// const faker = require('faker');
// const fs = require('fs');
const stream = require('stream');

let FacebookFeed = function() {
  let readableStream = new stream.Readable({
    objectMode : true
  });

  let updates = [
    {place: 'I am at the US'},
    {place: 'I am at the UK'}
  ]

  readableStream._read = () => {
    if (updates.length) {
      return readableStream.push(updates.shift());
    }
    readableStream.push(null);
  }
  
  return readableStream;
}

module.exports = FacebookFeed;