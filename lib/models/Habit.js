const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  count: {
    type: Number,
    required: true,
    default: 0,
    min: 0
  }
});

const Habit = mongoose.model('Habit', habitSchema);

module.exports = Habit;
