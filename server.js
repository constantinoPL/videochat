const express = require('express');
require('dotenv').config();

const app = express();

const server = require('http').Server(app);
const { v4: uuidv4 } = require('uuid');

const port = process.env.PORT;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.redirect(`/${uuidv4()}`);
});

app.get('/:room', (req, res) => {
  res.render('room', { roomId: req.params.room });
});

server.listen(port, () => {
  console.log(`server started on ${port}`);
});
