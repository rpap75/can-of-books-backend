'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const Books = require('./models/Book.js');
const { response, request } = require('express');
const PORT = process.env.PORT || 3002;
const app = express();
const mongoose = require('mongoose');
const dataBase = mongoose.connection;
const authorize = require('./auth/authorize');

mongoose.connect(process.env.MONGO_URL);

dataBase.once('open', () => console.log('connected to mongo'));
app.use(express.json());
app.use(cors());
app.use(authorize);


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
    response.send(deletedBook)
  } catch (error) {
    response.send(error);
  }
})

app.put('/books/:id', async (request, response) => {
  let id = request.params.id
  let updatedBook = await Books.findByIdAndUpdate({ _id: id }, request.body);
  console.log('hello hello hello', id);
  response.send(updatedBook);
})

app.listen(PORT, () => console.log(`listening on ${PORT}`));


