const pg = require('pg');
const faker = require('faker');

let output = [];

let test = () => {
  var count = 0;
  while (count < 10) {
    var user = {}
    user.game_id = faker.random.number(),
    user.recommended = faker.random.boolean(),
    user.steamPurchase = faker.random.boolean(),
    user.dayPosted = faker.random.number(),
    user.comment = faker.lorem.sentences(),
    user.helpfulComment = faker.random.number(),
    user.funnyComment = faker.random.number(),
    user.user = [{
            profile_id: faker.random.number(),
            username: String,
            user_icon: String,
            hours_played: faker.random.number(),
            products_owned: faker.random.number(),
            number_of_reviews: faker.random.number()
          }]
    output.push(user);
    count++;
  }
}

test();
console.log(output);