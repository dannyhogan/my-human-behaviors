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
  })

  .get('/:id', (req, res, next) => {
    Habit
      .findById(req.params.id)
      .then(habit => res.send(habit))
      .catch(next);
  })

  .patch('/:id', (req, res, next) => {
    const {
      count
    } = req.body;

    Habit
      .findByIdAndUpdate(req.params.id, { count }, { new: true })
      .then(habit => res.send(habit))
      .catch(next);
  })

  .delete('/:id', (req, res, next) => {
    Habit
      .findByIdAndDelete(req.params.id)
      .then(habit => res.send(habit))
      .catch(next);
  });
