/*const mongoose = require('mongoose');

// Define a schema for the collection
const ngoSchema = new mongoose.Schema({
  name: String,
  address: String,
  phone: String,
});

// Create a model for the collection
const Model = mongoose.model('studngos', ngoSchema);

module.exports = Model;*/

const mongoose = require('mongoose');

// Define a schema for the collection
const student = new mongoose.Schema({
  name: String,
  usn: String,
  mobile_number: String,
  mail_id: String,
  password: String,
  ngo1: {
    name: String,
    hours_spent: Number
  },
  ngo2: {
    name: String,
    hours_spent: Number
  },
  ngo3: {
    name: String,
    hours_spent: Number
  },
  ngo4: {
    name: String,
    hours_spent: Number
  },
others: String,
ngos: Number,
activity_points: Number
}, { collection: 'student' });

// Create a model for the collection
const Model = mongoose.model('Student', student);

module.exports = Model;
