const express = require('express');
const bodyParser = require('body-parser')

const app = express();
const PORT = 5000;

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({ extended: true }))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

let playerName = require('./modules/playerNames')
console.log(playerName);

// GET & POST Routes go here
app.get('/playerName', (req, res) => {
    res.send(playerName);
})

app.post('/playerName', (req, res) => {
    let players = req.body;
    playerName.push(players);
    console.log('pushed into playerName array', playerName);
    res.sendStatus(201);
})

app.listen(PORT, () => {
    console.log('Server is running on port', PORT)
})