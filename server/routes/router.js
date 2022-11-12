const {query} = require('express');
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//GET
router.get('/', (req, res) => {
    let queryText = 'SELECT * FROM todo;';
    pool.query(queryText)
        .then((result) => {
            console.log(result.rows);
            res.send(result.rows);
    })
    .catch ((err) => {
        console.log('Error making query:', queryText, 'error:', err);
        res.sendStatus(500);
    })
});

//POST. this is logging correctly
router.post('/', (req, res) => {
    let newTodo = req.body;

    console.log('adding new todo', newTodo);

    let queryText = `INSERT INTO  "todo" ("list_item", "complete")
                        VALUES($1, $2)`;
    pool.query(queryText, [newTodo.list_item, newTodo.complete])
        .then((response) => {
            console.log('POST result from DB is:', response);
        res.sendStatus(201);
    })
    .catch((err) => {
        console.log('error POSTing query', queryText, 'error:', err);
        res.sendStatus(500);
    });
});


//PUT



//DELETE
router.delete('/:id', (req, res) => {
    let id = req.params.id;
    let queryText = `DELETE FROM "todo" WHERE "id" = $1;`;
    
    pool.query(queryText, [id])
        .then(() => {
        console.log('todo deleted!');
        res.sendStatus(200);
    })
    .catch((err) => {
        console.log('err DELETING', err);
        });
    });


module.exports = router;