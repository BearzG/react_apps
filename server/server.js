const express = require('express');
const app = express();
const cors = require('cors') // -> enabling the cross origin resource sharing between my servers

const database = require('./database');

async function main_server(port) {
    await app.listen(port || process.env.PORT);
    console.log(`Listening on port: ${port}`);

    app.use(cors()); // Allows to external pages make requests to my server-page

    app.get('/', (req, res) => {
        let connec = database();
        connec.then(data => {
            data.query("SELECT * FROM heroes WHERE id != 10", (err, resp) => { if (err) throw err; console.log(resp); res.send(resp); data.end();});
        });
    });
}

main_server(4000);