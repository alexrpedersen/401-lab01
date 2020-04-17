'use strict';

const mongoose = require('mongoose');

//{ payload: 'test' }
const noteItem = mongoose.Schema({
  text: { type: String, required: false, },
  category: { type: String, required: true,},
});

module.exports = mongoose.model('noteItem', noteItem);