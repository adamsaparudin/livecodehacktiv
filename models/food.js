const db = require('../db');
const mongoose = require('mongoose');

let Schema = mongoose.Schema

let foodSchema = new Schema({
  name: {type: String, require: true},
  price: {type: Number},
  expire_date: Date
}, {
  timestamps: true
})

let Food = mongoose.model('Food', foodSchema)

module.exports = Food
