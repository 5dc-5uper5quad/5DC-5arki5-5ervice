const mongoose = require('mongoose');
const expect = require('chai').expect;
const Review = require('../database/index')

const dbURL = 'mongodb://localhost:27017/usersgamereview';

const clearDB = (done) => {
  mongoose.connection.collections['test'].remove(done);
};

describe('Test', () => {
  before((done) => {
    if (mongoose.connection.db) {
      return done();
    }
    mongoose.connect(dbURL, done);
  });

  beforeEach((done) => {
    clearDB(() => {
      var sampleUser = [
        {
          profile_id: 10,
          username: 'KarateChop',
          userIcon: 10,
          products_owned: 25,
          number_of_reviews: 5,
          reviews: [{
                    game_id: 2,
                    recommended: true,
                    hours_played: 300,
                    datePosted: 2019/05/01,
                    comment: 'jashdwiaj ijdfisj oefsjfs jfisjefj'
                    }]
        }
      ];
      Review.create(sampleUser, done);
    });
  });
});

  it('should seed database', (done) => {
    done();
  })

  it('should have correct keys', (done) => {
    done();
  })

  it('should contain all properties', (done) => {
    done();
  })