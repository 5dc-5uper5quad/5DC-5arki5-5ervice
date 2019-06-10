const FacebookFeed = require('./readableStream');

let feed = new FacebookFeed();

feed.on('readable', () => {
  let data = feed.read();

  if (data) {
    process.stdout.write(JSON.stringify(data));
  }
});

feed.on('end', () => {
  console.log('No more data');
});