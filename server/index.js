const express = require('express');
// const { Review } = require('../database/mongoDB/index');
const pg = require('pg');
const bodyParser = require('body-parser');

let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

/***********************************************/
// This route should send back the reviews for a game by the game ID
app.get('/:gameid', (req, res) => {
  var id = req.params.gameid;
  Review.find({game_id: id}, (err, data) => {
    if (err) {
      console.error('ERROR:', err);
    } else {
      res.status(200).json(data);
    }
  });
});

/***********************************************/
// This route should post new review
app.post('/', (req, res) => {
  console.log('REQ BODY POST:', req.body);
  const newReview = new Review(req.body);
  newReview.save((err) => {
    if (err) {
      console.log('ERROR:', err);
    } else {
      res.status(201);
    }
  });
});

/***********************************************/
// This route should update the post with submitted edits
app.put('/:gameid', (req, res) => {
  console.log('REQ BODY PUT:', req.body);
  Review.find({game_id: id}, (err, data) => {
    if (err) {
      console.error('ERROR in PUT:', err);
    } else {
      res.status(200);
    }
    // perform udate

    // return update
    res.json(data);
  });
});

/***********************************************/
// need DELETE request which deletes an item
app.delete('/', (req, res) => {
  // find the item
  // delete the item
  // res.status(?);
  // res.json(deletedItem);
});

let port = 3007;

app.listen(port, function() {
  console.log(`Listening on port ${port}!`);
});