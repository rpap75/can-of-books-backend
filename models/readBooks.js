'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
const Books = require('./Book.js');
const MONGODB_URL = process.env.MONGODB_URL;

mongoose.connect(MONGODB_URL);

Books.find()
  .then(results => {
    console.log('Here are all of our books', results);
  })
  .catch(err => {
    console.log('Ugh oh, ', err);
  });