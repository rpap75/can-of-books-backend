'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
const Books = require('./components/Book.js');
const MONGODB_URL = process.env.MONGODB_URL;

mongoose.connect(MONGODB_URL);

// Use a differnet method on the Cats model.
Books.find()
  .then(results => {
    console.log('Here are all of our books', results);
  })
  .catch(err => {
    console.log('Ugh oh, ', err);
  });