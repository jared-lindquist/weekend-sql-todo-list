const express = require('express');
const router = express.Router();

// DB CONNECTION
const pg = require('pg');
const Pool = pg.Pool;
const pool = new Pool ({
    database: 'todo_list',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000
});

//GET
router.get('/', (req, res) => {
    let queryText = 'SELECT * FROM todo;';
    pool.query(queryText).then((result) => {
        console.log(result.rows);
        res.send(result.rows);
    }).catch ((err) => {
        console.log('Error making query:', queryText, 'error:', err);
        res.sendStatus(500);
    })
})

//POST
router.post('/', (req, res) => {
    let newTodo = req.body;
    console.log('adding new todo', newTodo);
    let queryText = `INSERT INTO  "todo" ("list_item", "complete")
                        VALUES($1, $2)`;
    pool.query(queryText, [
            newTodo.list_item,
            newTodo.complete
])
.then((result) => {
        res.sendStatus(201);
    })
    .catch((err) => {
        console.log('error adding new Koala', err);
        res.sendStatus(500);
    });
});


//PUT



//DELETE



module.exports = router;