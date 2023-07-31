const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    console.log('This is the get request in feedback router');
    pool.query('SELECT * from "feedback";').then((result) => {
        console.log('log result', result.rows);
        res.send(result.rows);
    }).catch((error) => {
        console.log('log error in feeback', error);
        res.sendStatus(500);
    })
})


router.post('/', (req, res) => {
    let updateFeedback = req.body;
    console.log('adding:', updateFeedback)
    const sqlText = 'INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") VALUES ($1, $2, $3, $4);';
    const values = [updateFeedback.questionOne, updateFeedback.questionTwo, updateFeedback.questionThree, updateFeedback.questionFour]
    pool.query(sqlText, values)
      .then(result => {
        res.sendStatus(201);
      })
      .catch(error => {
        console.log('Error in POST:', error)
        req.sendStatus(500);
      })
  })

  module.exports = router;