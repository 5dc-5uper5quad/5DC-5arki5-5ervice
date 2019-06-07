const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/usersgamereview', { useNewUrlParser: true });
const dbURL = 'mongodb://localhost:27017/usersgamereview';
const async = require('async');
const faker = require('faker');

const reviewSchema = new mongoose.Schema({
  game_id: Number,
  recommended: Boolean,
  steamPurchase: Boolean,
  dayPosted: Number,
  comment: String,
  helpfulComment: Number,
  funnyComment: Number,
  user: [{
          profile_id: Number,
          username: String,
          user_icon: String,
          hours_played: Number,
          products_owned: Number,
          number_of_reviews: Number
        }]
});

const Review = mongoose.model('Review', reviewSchema);

//User Icon images
const getUserIcon = () => {

  const userIcons = ["https://userreviewicons.s3.us-east-2.amazonaws.com/1.jpg", "https://userreviewicons.s3.us-east-2.amazonaws.com/2.jpg", "https://userreviewicons.s3.us-east-2.amazonaws.com/3.jpg", "https://userreviewicons.s3.us-east-2.amazonaws.com/4.jpg", "https://userreviewicons.s3.us-east-2.amazonaws.com/5.jpg", "https://userreviewicons.s3.us-east-2.amazonaws.com/6.jpg", "https://userreviewicons.s3.us-east-2.amazonaws.com/7.jpg", "https://userreviewicons.s3.us-east-2.amazonaws.com/8.jpg", "https://userreviewicons.s3.us-east-2.amazonaws.com/9.jpg", "https://userreviewicons.s3.us-east-2.amazonaws.com/10.jpg", "https://userreviewicons.s3.us-east-2.amazonaws.com/11.jpg", "https://userreviewicons.s3.us-east-2.amazonaws.com/12.jpg", "https://userreviewicons.s3.us-east-2.amazonaws.com/13.jpg", "https://userreviewicons.s3.us-east-2.amazonaws.com/14.jpg", "https://userreviewicons.s3.us-east-2.amazonaws.com/15.jpg", "https://userreviewicons.s3.us-east-2.amazonaws.com/16.jpg", "https://userreviewicons.s3.us-east-2.amazonaws.com/17.jpg", "https://userreviewicons.s3.us-east-2.amazonaws.com/18.jpg", "https://userreviewicons.s3.us-east-2.amazonaws.com/19.jpg", "https://userreviewicons.s3.us-east-2.amazonaws.com/20.jpg"];

  return userIcons[Math.floor(Math.random()* 21)];
};


//Create individual reviews
const createReview = () => {
  let comment = {};
  comment.gameid = faker.random.number({min: 1, max: 100});
  comment.recommend = faker.random.boolean();
  comment.dateDay = faker.random.number({min: 5, max: 30});
  comment.purchase = faker.random.boolean();
  comment.randomReview = faker.lorem.paragraph();
  comment.helpful = faker.random.number(250);
  comment.funny = faker.random.number(250);
  return comment;
};

//Creates template for user
const userTemplate = (num) => {
  let user = {};
  user.userID = faker.random.number({min: 1, max: num});
  user.userIcon = getUserIcon();
  user.username = faker.internet.userName();
  user.hoursPlayed = faker.random.number({min: 1, max: 2000});
  user.productsOwned = faker.random.number({min: 1, max: 1000});
  user.numOfReviews = faker.random.number({min:1, max: 100});
  return user;
};


//Create new user entry- seed DB
const seed = () => {
  for (var i = 0; i < 200; i++) {
    var reviewEntry = createReview();
    var userEntry = userTemplate(20);
    var newReview = new Review ({
      game_id: reviewEntry.gameid,
      recommended: reviewEntry.recommend,
      dayPosted: reviewEntry.dateDay,
      steamPurchase: reviewEntry.purchase,
      comment: reviewEntry.randomReview,
      helpfulComment: reviewEntry.helpful,
      funnyComment: reviewEntry.funny,
      user: [{
            profile_id: userEntry.userID,
            username: userEntry.username,
            user_icon: userEntry.userIcon,
            hours_played: userEntry.hoursPlayed,
            products_owned: userEntry.productsOwned,
            number_of_reviews: userEntry.numOfReviews
          }]
    });

    newReview.save((err) => {
      if (err) {
        console.log(err);
      }
      if (i === 199) {
        mongoose.disconnect();
      }
    })
  }
};


seed();
//db.collection.drop() -to drop db after seeding



// //Async: Open/close database for seeding
// async.series([

//   //Connect to Mongo, drop database
//   (callback) => {
//     mongoose.connect(dbURL, (err, db) => {
//       if (err) {
//         console.error(err);
//       } else {
//         db.dropDatabase((err, results) => {
//           db.close(true, (err, results) => {
//             callback(null, 'Database dropped successfully');
//           });
//         });
//       }
//     });
//   },

//   //Connect to MongoDB with mongoose
//   (callback) => {
//     mongoose.connect(dbURL);
//     mongoose.connection.on('Connected!', () => {
//       console.log('Database connected via Mongoose')
//       callback(null, 'Connected to mongodb!');
//     });
//   },

//   //Seed database
//   (callback) => {
//     var users = [];
//     for (var i = 0; i < 20; i++) {
//       var userEntry = createUser(i);
//       var newUser = new User ({
//         profile_id: userEntry.id,
//         userIcon: userEntry.icon,
//         username: userEntry.name,
//         products_owned: userEntry.productsOwned,
//         reviews: userEntry.reviewArr,
//         number_of_reviews: userEntry.reviewArr.length
//       });

//       users.push(newUser);
//     }

//       async.eachSeries((users, userSavedCallback) => {
//         users.save((err) => {
//           if (err) {
//             console.log(err);
//           } else {
//             console.log('User saved');
//             userSavedCallback();
//           }
//         });
//       });
//     },

//   (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       callback(null, "Database successfully seeded")
//     }
//   }
// ],

// (err, results) => {
//   console.log('Seeding Completed')
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(results);
//   }
//   process.exit(0);
// });