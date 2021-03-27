const Pool = require('pg').Pool;

const pool = new Pool({
    user:"Postgres",
    password:"jdp",
    database:"scheduler",
    host:"localhost",
    port:"5432"
})

module.exports = pool;