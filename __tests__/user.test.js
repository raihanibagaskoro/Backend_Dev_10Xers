const request = require('supertest');
const app = require('../app'); // Assuming your Express app is in app.js
const { User } = require('../models');

// Mocking User.findOne to return a dummy user
jest.mock('../models', () => ({
  User: {
    findOne: jest.fn()
  }
}));

// Mocking bcrypt.compare to return true
jest.mock('bcryptjs', () => ({
  compare: jest.fn(() => true)
}));

// Mocking createToken function
jest.mock('../helpers', () => ({
  createToken: jest.fn(() => 'dummy_access_token')
}));

describe('UserController', () => {
  test('login should return access token if credentials are valid', async () => {
    // Mock user data
    const mockUser = {
      id: 1,
      username: 'testuser',
      password: 'hashed_password'
    };

    // Mock request body
    const requestBody = {
      username: 'testuser',
      password: 'password123'
    };

    // Mock User.findOne to return the mock user
    User.findOne.mockResolvedValue(mockUser);

    // Make request to login endpoint
    const response = await request(app)
      .post('/login')
      .send(requestBody);

    // Assertions
    expect(response.status).toBe(200);
    expect(response.body.access_token).toBe('dummy_access_token');
  });

  
});
