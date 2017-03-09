const db = require('../db');
const mongoose = require('mongoose');

let Schema = mongoose.Schema

let restaurantSchema = new Schema({
  name: {type: String, require: true},
  owner: {type: String},
  address: String,
  open_status: {type: Boolean, default: true}
}, {
  timestamps: true
})

let Restaurant = mongoose.model('Restaurant', restaurantSchema)

module.exports = Restaurant
