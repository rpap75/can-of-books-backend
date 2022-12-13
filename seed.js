'use strict'

require('dotenv').config();
const mongoose = require('mongoose');
const Books = require('./components/Book.js');
const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(MONGO_URL);

async function seedDataBase() {
  await Books.create({
    title: 'The 48 Laws of Power',
    description: 'this is the descrition',
    status: 'this is the status',
  })

  await Books.create({
    title: 'The Scarlet Letter',
    description: 'this is the descrition',
    status: 'this is the status',
  })

  await Books.create({
    title: 'Atomic Habbits',
    description: 'this is the descrition',
    status: 'this is the status',
  })
  console.log('books added');

  mongoose.disconnect();
}

seedDataBase();

