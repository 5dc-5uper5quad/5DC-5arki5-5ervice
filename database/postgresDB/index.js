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
// This should query the reviews for a game by the game ID
const getGameId = (req, res) => {
  const id = Number(req.params.gameid);
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

/***********************************************/
// This should post a message to the database as a new record
// const postMessage = (req, res) => {
//   const comment = req.body.comment;
//   // console.log('WHAT IS THE ', comment);
//   // console.log('BODY', req.body);
//   const body = req.body;
//   pool.query(`INSERT INTO reviews(game_id, day) VALUES(${body.gameid}, ${body.dayPosted}, ${body.recommended}, ${comment}, ${body.helpfulComment}, ${body.funnyComment}, ${body.user.profile_id}, ${body.user.username}, ${body.user.user_icon}, ${body.user.hours_played}, ${body.user.number_of_reviews}`)
//     .then(res => {
//       console.log(res.rows[0])
//     })
//     .catch(err => console.error(err.stack));

// }

// Example:
// INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY,JOIN_DATE) VALUES (3, 'Teddy', 23, 'Norway', 20000.00, DEFAULT );

// Data structure:
// BODY { game_id: 57,
//   dayPosted: 31,
//   recommended: true,
//   comment: 'And this is yet another message!',
//   helpfulComment: 375,
//   funnyComment: 127,
//   user:
//    [ { profile_id: 102,
//        username: 'Riddle_Me_This',
//        user_icon: 'https://userreviewicons.s3.us-east-2.amazonaws.com/BM.jpg',
//        hours_played: 876,
//        products_owned: 89,
//        number_of_reviews: 10 } ] }

const fileLoader = (table, filepath, callback) => {
  pool.query(`COPY ${table} FROM '${filepath}';`, (err, resp) => {
    callback(err, resp);
  });
}

module.exports = {
  // postMessage,
  getGameId,
  fileLoader
}