let mysql = require('mysql');

var mysqlConnection = mysql.createConnection({
    host: "eu-cdbr-west-02.cleardb.net",
    user: "b7027415a26b90",
    password: "fe28dccd",
    database: "heroku_b22850cda3eabc3",
    multipleStatements: true
});

const pool = mysql.createPool({
    host: 'eu-cdbr-west-02.cleardb.net',
    user: 'b7027415a26b90',
    database: 'heroku_b22850cda3eabc3',
    password: 'fe28dccd'
});

/*pool.connect((err) => {
    if (!err) {
        console.log('Connected to database !')
    } else {
        console.log('Unable to connect to the database...')
    }
});*/

module.exports = pool;