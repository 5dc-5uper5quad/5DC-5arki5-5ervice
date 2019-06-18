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
    console.log('Connection error', err);
  } else {
    console.log('Connected to Postgres database');
  }
});

/***********************************************/
// This route should send back the reviews for a game by the game ID
const getGameId = (req, res) => {
  const id = Number(req.params.gameid);
  console.log('ID from Postgres', typeof id, id);
  pool.query(`SELECT * FROM reviews WHERE game_id = ${id}`, (err, results) => {
    if (err) {
      throw err;
    }
    let output = [];
    for (var i = 0; i < 10; i++) {
      output.push(results.rows[i]);
    }
    res.status(200).json(output);
  });
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