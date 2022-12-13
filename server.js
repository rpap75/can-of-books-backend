'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Books = require('./components/Book.js');
const dataBase = mongoose.connection;
mongoose.connect(process.env.MONGO_URL);
dataBase.once('open', () => console.log('connected to mongo'));

const PORT = process.env.PORT || 3002;



const app = express();
app.use(cors());


app.get('/test', (request, response) => {

  response.send('test request received')

})

app.get('/books', async (req, res) => {
  let results = [];

  if (req.query.title) {
    let title = req.query.title;
    results = await Books.find({ title: title });
  } else {
    results = await Books.find();
  }
  res.send(results);
})

app.listen(PORT, () => console.log(`listening on ${PORT}`));


