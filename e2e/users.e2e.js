const request = require('supertest');

const createApp = require('./../src/app');

describe('test for /users path', () => {
  let app = null;
  let server = null;
  let api = null;

  beforeEach(() => {
    app = createApp();
    server = app.listen(9000);
    api = request(app);
  });

  describe('GET /users', () => {
    // test for /users
  });

  describe('POST /users', () => {
    test('should return a 400 Bad request with password invalid', async () => {
      const inputData = { email: 'mail@example.com', password: '----' };
      const { statusCode, body } = await api
        .post('/api/v1/users')
        .send(inputData);
      expect(statusCode).toBe(400);
      expect(body.message).toMatch(/password/);
    });

    test('should return a 400 Bad request with email invalid', async () => {
      const inputData = { email: 'hola', password: 'securepassword' };
      const response = await api.post('/api/v1/users').send(inputData);
      expect(response.statusCode).toBe(400);
      expect(response.body.message).toMatch(/email/);
    });
  });

  describe('PUT /users', () => {
    // test for /users
  });

  afterEach(() => {
    server.close();
  });
});
