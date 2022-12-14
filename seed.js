'use strict'

require('dotenv').config();
const mongoose = require('mongoose');
const Books = require('./models/Book.js');
const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(MONGO_URL);

async function seedDataBase() {
  await Books.create({
    title: 'The 48 Laws of Power',
    description: 'this is the descrition',
    status: 'read',
  })

  await Books.create({
    title: 'The Scarlet Letter',
    description: 'this is the descrition',
    status: 'not started',
  })

  await Books.create({
    title: 'Atomic Habbits',
    description: 'this is the descrition',
    status: 'in-progress',
  })
  console.log('books added');

  mongoose.disconnect();
}

seedDataBase();

