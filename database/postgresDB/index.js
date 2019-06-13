const { Pool } = require('pg');
const pool = new Pool({
  user: 'sarkissos',
  host: 'localhost',
  database: 'reviews',
  password: '1919',
  port: 5432,
});

pool.connect((err) => {
  if (err) {
    console.log('Connection error', err.stack);
  } else {
    console.log('Connected to database');
  }
});


/***********************************************/
// This route should send back the reviews for a game by the game ID
const getGameId = (req, res) => {
  const id = parseInt(req.params.gameid);
  pool.query('SELECT * FROM reviews WHERE game_id = $1', [id], (err, results) => {
    console.log('RESULTS HERE:', results);
    if (err) {
      throw err;
    }
    res.status(200).json(results.rows);
  });
}

/***********************************************/
// This route should post new review
const createReview = (req, res) => {
  // console.log('REQ', req);
  // pool.query('INSERT INTO reviews (');
}

/***********************************************/
// This route should update (PUT) the post with submitted edits
const updateUser = (request, response) => {

}

/***********************************************/
// need DELETE request which deletes an item

const deleteUser = (request, response) => {
  
}

const fileLoader = (table, filepath, callback) => {
  pool.query(`COPY ${table} FROM '${filepath}';`, (err, resp) => {
    callback(err, resp);
  });
}

module.exports = {
  getGameId,
  pool,
  fileLoader
}
