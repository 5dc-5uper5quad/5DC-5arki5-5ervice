const fs = require('fs');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();
const faker = require('faker');

const getUserIcon = () => {
  const userIcons = ["https://userreviewicons.s3.us-east-2.amazonaws.com/1.jpg", "https://userreviewicons.s3.us-east-2.amazonaws.com/2.jpg", "https://userreviewicons.s3.us-east-2.amazonaws.com/3.jpg", "https://userreviewicons.s3.us-east-2.amazonaws.com/4.jpg", "https://userreviewicons.s3.us-east-2.amazonaws.com/5.jpg", "https://userreviewicons.s3.us-east-2.amazonaws.com/6.jpg", "https://userreviewicons.s3.us-east-2.amazonaws.com/7.jpg", "https://userreviewicons.s3.us-east-2.amazonaws.com/8.jpg", "https://userreviewicons.s3.us-east-2.amazonaws.com/9.jpg", "https://userreviewicons.s3.us-east-2.amazonaws.com/10.jpg", "https://userreviewicons.s3.us-east-2.amazonaws.com/11.jpg", "https://userreviewicons.s3.us-east-2.amazonaws.com/12.jpg", "https://userreviewicons.s3.us-east-2.amazonaws.com/13.jpg", "https://userreviewicons.s3.us-east-2.amazonaws.com/14.jpg", "https://userreviewicons.s3.us-east-2.amazonaws.com/15.jpg", "https://userreviewicons.s3.us-east-2.amazonaws.com/16.jpg", "https://userreviewicons.s3.us-east-2.amazonaws.com/17.jpg", "https://userreviewicons.s3.us-east-2.amazonaws.com/18.jpg", "https://userreviewicons.s3.us-east-2.amazonaws.com/19.jpg", "https://userreviewicons.s3.us-east-2.amazonaws.com/20.jpg"];
  return userIcons[Math.floor(Math.random()* 21)];
};

const myGenerator = () => {
  let start = Date.now();
  
  writer.pipe(fs.createWriteStream('./dummyData.csv'));
  
  for (var i = 0; i < 100000; i++) {
    
    writer.write({
      game_id: faker.random.number(),
      recommended: faker.random.boolean(),
      steamPurchase: faker.random.boolean(),
      dayPosted: faker.random.number(),
      comment: faker.lorem.sentence(),
      helpfulComment: faker.random.number(),
      funnyComment: faker.random.number(),
      user: [{
        profile_id: faker.random.number(),
        username: faker.internet.userName(),
        user_icon: getUserIcon(),
        hours_played: faker.random.number(),
        products_owned: faker.random.number(),
        number_of_reviews: faker.random.number()
      }]
    });
  }
  
  writer.end(/*send csv data*/);
  // now send csv file data to DB and repeat process until hitting 10M
  // Work on setting up DB. Will tweak seed later.

  let ms = Date.now() - start;
  console.log('Second(s) elapsed: ' + Math.floor(ms / 1000));
}

myGenerator();