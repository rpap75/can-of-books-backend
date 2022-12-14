'use strict'

const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true
  },

  status: {
    type: String,
    required: true,
    enum: ["read", "not started", "in-progress"],
  }
});

module.exports = mongoose.model('books', bookSchema);