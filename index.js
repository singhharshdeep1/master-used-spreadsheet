const express = require('express');
const GoogleSpreadsheet = require('google-spreadsheet');
const creds = require('./client_secret.json');
const cors = require('cors');

let doc = new GoogleSpreadsheet('1M1Ry3gRs81bYnTveFtdRRDRyTvxLEVZTWWE8XZ9LISs');

const app = express();

app.use(cors());


app.get('/', (req, res) => {
    doc.useServiceAccountAuth(creds, (err) => {
        doc.getRows(1, (err, rows) => {
            res.send(rows);
        });
    });
});

app.post('/', (req, res) => {

})

app.listen(3001, () => {
    console.log('Listening on port 3001');
})