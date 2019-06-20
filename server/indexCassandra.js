const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/cassandraDB/index');

let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

/***********************************************/
// This route should send back the reviews for a game by the game ID
app.get('/:gameid', (req, res) => {
  var id = req.params.gameid;
  console.log('ID', id);
  db.find({game_id: id}, (err, data) => {
    if (err) {
      console.error('ERROR:', err);
    } else {
      res.status(200).json(data);
    }
  });
});

/***********************************************/
// This route should post new review
// app.post('/', (req, res) => {
//   console.log('REQ BODY POST:', req.body);
//   const newReview = new Review(req.body);
//   newReview.save((err) => {
//     if (err) {
//       console.log('ERROR:', err);
//     } else {
//       res.status(201);
//     }
//   });
// });

let port = 3007;

app.listen(port, function() {
  console.log(`Listening on port ${port}!`);
});