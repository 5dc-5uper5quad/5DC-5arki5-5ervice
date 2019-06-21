// const nr = require('newrelic');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('../database/postgresDB/index');

let app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname + '/../client/dist'));

/***********************************************/
// This route should send back the reviews for a game by the game ID
app.get('/:gameid', db.getGameId);

/***********************************************/
// This route should post new review
// app.post('/', db.postMessage);



let port = 3007;

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});