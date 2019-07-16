require('dotenv').config();

const request = require('supertest');
const app = require('../lib/app');
const connect = require('../lib/utils/connect');
const mongoose = require('mongoose');
const Habit = require('../lib/models/Habit');

describe('app routes', () => {
  beforeAll(() => {
    connect();
  });

  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  afterAll(() => {
    return mongoose.connection.close();
  });

  it('creates a new habit', () => {
    return request(app)
      .post('/api/v1/habits')
      .send({ name: 'drink water', description: 'put water in throat hole' })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          name: 'drink water',
          description: 'put water in throat hole',
          count: 0,
          __v: 0
        });
      });
  });

  it('gets a list of all habits', async() => {
    const habit = await Habit.create({ name: 'my habit' });

    return request(app)
      .get('/api/v1/habits')
      .then(res => {
        const habitJSON = JSON.parse(JSON.stringify(habit));
        expect(res.body).toEqual([habitJSON]);
      });
  });
});
