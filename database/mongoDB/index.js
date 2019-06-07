const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/usersgamereview', { useNewUrlParser: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
  console.log('Connected to MongoDB!');
  });


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


module.exports.Review = Review;