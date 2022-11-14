// DB CONNECTION
const pg = require('pg');
//below is how we set up pool.js if we are deploying to Heroku
//and using bit.io DB
let pool;

if (process.env.DATABASE_URL) {
    pool = new pg.Pool({
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
        }
    });
}
else {
    pool = new pg.Pool({
        host: 'localhost',
        port: 5432,
        database: 'todo_list',
        max: 10,
        idleTimeoutMillis: 30000
    });
};
//below is how we would set up pool using our local Postico DB
// const Pool = pg.Pool;
// const pool = new Pool ({
//     database: 'todo_list',
//     host: 'localhost',
//     port: 5432,
//     max: 10,
//     idleTimeoutMillis: 30000
// });

pool.on('connect', () => {
    console.log('PostgreSQL is connected');
});

pool.on('error', (error) => {
    console.log('Error with Postgres pool', error);
});

module.exports = pool;