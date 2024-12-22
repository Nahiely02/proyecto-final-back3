const request = require('supertest');
const app = require('../src/app');
const User = require('../src/models/user.model');
const mongoose = require('mongoose');

beforeAll(async () => {
  await mongoose.connect(process.env.MONGODB_URI_TEST);
});

afterAll(async () => {
  await mongoose.connection.close();
});

beforeEach(async () => {
  await User.deleteMany({});
});

describe('User Authentication', () => {
  test('Should register a new user', async () => {
    const response = await request(app)
      .post('/api/users/register')
      .send({
        username: 'testuser',
        email: 'test@test.com',
        password: 'password123'
      });
    
    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('message', 'Usuario registrado exitosamente');
  });

  test('Should login user and return token', async () => {
    // First register a user
    await request(app)
      .post('/api/users/register')
      .send({
        username: 'testuser',
        email: 'test@test.com',
        password: 'password123'
      });

    // Then try to login
    const response = await request(app)
      .post('/api/users/login')
      .send({
        email: 'test@test.com',
        password: 'password123'
      });

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('token');
  });
});