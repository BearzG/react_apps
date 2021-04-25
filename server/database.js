const mysql = require('mysql');

console.log('Reading whole database.js module');



const main_connection = async () => {

    const con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Elmercanelo123',
        database: 'exatlon'
    });

    // The connection need to be created each time we want to use it, not only once

    await con.connect((err) => {
        if (err) throw err;
        console.log('Succesfully Connected')
    });

    // con.query('SELECT * FROM heroes', (err, res) => {
    //     console.log(res);
    // })

    return con;
}

// main_connection();

module.exports = main_connection;