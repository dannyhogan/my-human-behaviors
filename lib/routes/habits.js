const { Router } = require('express');
const Habit = require('../models/Habit');

module.exports = Router()
  .post('/', (req, res, next) => {
    const {
      name,
      description
    } = req.body;

    Habit
      .create({ name, description })
      .then(habit => res.send(habit))
      .catch(next);
  })

  .get('/', (req, res, next) => {
    Habit
      .find()
      .then(habits => res.send(habits))
      .catch(next);
  });
