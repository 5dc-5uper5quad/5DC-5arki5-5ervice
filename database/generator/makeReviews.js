const fs = require('fs');
const faker = require('faker');
const path = require('path');
const db = require('../postgresDB/index');

const getUserIcon = () => {
  const userIcons = ["https://userreviewicons.s3.us-east-2.amazonaws.com/1.jpg", "https://userreviewicons.s3.us-east-2.amazonaws.com/2.jpg", "https://userreviewicons.s3.us-east-2.amazonaws.com/3.jpg", "https://userreviewicons.s3.us-east-2.amazonaws.com/4.jpg", "https://userreviewicons.s3.us-east-2.amazonaws.com/5.jpg", "https://userreviewicons.s3.us-east-2.amazonaws.com/6.jpg", "https://userreviewicons.s3.us-east-2.amazonaws.com/7.jpg", "https://userreviewicons.s3.us-east-2.amazonaws.com/8.jpg", "https://userreviewicons.s3.us-east-2.amazonaws.com/9.jpg", "https://userreviewicons.s3.us-east-2.amazonaws.com/10.jpg", "https://userreviewicons.s3.us-east-2.amazonaws.com/11.jpg", "https://userreviewicons.s3.us-east-2.amazonaws.com/12.jpg", "https://userreviewicons.s3.us-east-2.amazonaws.com/13.jpg", "https://userreviewicons.s3.us-east-2.amazonaws.com/14.jpg", "https://userreviewicons.s3.us-east-2.amazonaws.com/15.jpg", "https://userreviewicons.s3.us-east-2.amazonaws.com/16.jpg", "https://userreviewicons.s3.us-east-2.amazonaws.com/17.jpg", "https://userreviewicons.s3.us-east-2.amazonaws.com/18.jpg", "https://userreviewicons.s3.us-east-2.amazonaws.com/19.jpg", "https://userreviewicons.s3.us-east-2.amazonaws.com/20.jpg"];
  return userIcons[Math.floor(Math.random() * 21)];
};

const csvFile = path.join(__dirname, "./dummyData.tsv");

const totalEntries = 10000000;

const entryObject = (i) => {
  let seeds = {
    game_id: Number(faker.random.number({min: 1, max: 100})),
    recommended: faker.random.boolean(),
    steamPurchase: faker.random.boolean(),
    dayPosted: Number(faker.random.number({min: 5, max: 30})),
    comment: faker.lorem.sentence(),
    helpfulComment: Number(faker.random.number(250)),
    funnyComment: Number(faker.random.number(250)),
    // user:
    profile_id: Number(faker.random.number({min: 1, max: 20})),
    username: faker.internet.userName(),
    user_icon: getUserIcon(),
    hours_played: Number(faker.random.number({min: 1, max: 2000})),
    products_owned: Number(faker.random.number({min: 1, max: 1000})),
    number_of_reviews: Number(faker.random.number({min:1, max: 100}))
  }
  return seeds;
}

const seeder = function() {
  fs.writeFile(csvFile, "", 'utf8', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      fs.open(csvFile, 'r+', (err, fd) => {
        if (err) {
          console.log(err);
        } else {
          console.log('Process started at ' + Date());

          const recursion = (n) => {
            if (n > totalEntries) {
              console.log('FileWrite completed at ' + Date());
              return db.fileLoader('reviews', csvFile, (err, data) => {
                if (err) {
                  console.error(err);
                } else {
                  console.log('Entries loaded into database succesfully at ' + Date());
                  return;
                }
              });
            }

            var {game_id, recommended, steamPurchase, dayPosted, comment, helpfulComment, funnyComment, profile_id, username, user_icon, hours_played, products_owned, number_of_reviews} = entryObject(n);
  
            var inputString = `${game_id}\t${recommended}\t${steamPurchase}\t${dayPosted}\t${comment}\t${helpfulComment}\t${funnyComment}\t${profile_id}\t${username}\t${user_icon}\t${hours_played}\t${products_owned}\t${number_of_reviews}\n`;
            
            fs.write(fd, inputString, (err) => {
              if (err) {
                console.error(err);
              }
              recursion(n + 1)
            });
          }
          recursion(0)
        }
      });
    }
  });
}

seeder();
