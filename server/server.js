const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const PORT = process.env.PORT || 5000;
const pool = require('../server/modules/pool');


/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.post('/feedback', (req, res) => {
    console.log('Sending feedback to DB', req.body);
    const feedback = req.body
    const sqlText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments" )
                    VALUES ($1, $2, $3, $4);`;
pool.query(sqlText, [ feedback.feeling, feedback.understanding, feedback.support, feedback.comments ])
.then( result => {
    res.sendStatus(201);
})
.catch( error => {
    console.log('Error sending feedback to DB:', error);
    res.sendStatus(500) 
})
});

app.get('/feedback', (req, res) => {
    console.log('Getting feedback from DB', );

    const sqlText = `SELECT * FROM "feedback" ORDER BY "id" ASC;`;
    pool.query(sqlText)
    .then(result => {
        res.send(result.rows);
    })
    .catch(error => {
        res.sendStatus(error);
        alert('Trouble getting feedback from DB.')
    })
})

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});