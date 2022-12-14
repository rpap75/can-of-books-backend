'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Books = require('./models/Book.js');
const { response } = require('express');
const dataBase = mongoose.connection;
mongoose.connect(process.env.MONGO_URL);

dataBase.once('open', () => console.log('connected to mongo'));

const PORT = process.env.PORT || 3002;
const app = express();


app.use(express.json());
app.use(cors());

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

app.post('/books', async (request, respond) => {
  // request.body;

  console.log(request.body);

  let newBook = await Books.create(request.body);

  respond.send(newBook);
})

app.delete('/books/:id', async (request, response) => {
  console.log(request.params.id)
  try {
    let id = request.params.id
    let deletedBook = await Books.findByIdAndDelete(id)
    console.log('here is the value of id: ', id)
    response.send(deletedBook).status(200)
  } catch (error) {
    response.send(error).status(500);
  }
})



app.listen(PORT, () => console.log(`listening on ${PORT}`));


