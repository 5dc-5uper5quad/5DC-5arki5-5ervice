const cassandra = require('cassandra-driver');
const cassClient = new cassandra.Client({
  contactPoints: ['127.0.0.1'],
  localDataCenter: 'datacenter1',
  keyspace: 'reviews'
});

cassClient.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to Cassandra');
  }
});

var tableString = `CREATE TABLE reviews(id, comment, dayposted, funnycomment, game_id, helpfulcomment, hours_played, number_of_reviews, products_owned, profile_id, recommended, steampurchase, user_icon, username)`;

/***********************************************/
// This route should send back the reviews for a game by the game ID
// const getGameId = (req, res) => {
//   const id = parseInt(req.params.gameid);
//   console.log('CONSOLE', id);
//   var start = new Date();
//   client.query('SELECT * FROM reviews WHERE game_id = $1', [id], (err, results) => {
//     console.log(new Date() - start);
//     console.log('RESULTS HERE:', results);
//     if (err) {
//       throw err;
//     }
//     res.status(200).json(results.rows);
//   });
// }

module.exports.cassdb = cassClient;