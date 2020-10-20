const express = require('express');
require('dotenv').config();

const app = express();

const server = require('http').Server(app);

const port = process.env.PORT;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('room');
});

server.listen(port, () => {
  console.log(`server started on ${port}`);
});
