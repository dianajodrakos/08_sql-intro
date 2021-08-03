const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const TestService = require('../lib/services/TestServices.js');

describe('test routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('using POST route, inserts a new entry into database', async () => {
    const newTest = {
      text: 'hello world',
      number: 42,
      boolean: true,
    };

    const res = await request(app)
      .post('/api/v1/test-api')
      .send(newTest);

    expect(res.body).toEqual({
      id: '1',
      ...newTest,
    });
  });


  it('using GET route, returns all database entries', async () => {
    const newTest1 = await TestService.createEntry({
      text: 'hello world',
      number: 42,
      boolean: true,
    });

    const newTest2 = await TestService.createEntry({
      text: 'goodnight moon',
      number: 13,
      boolean: false,
    });

    const res = await request(app).get('/api/v1/test-api');

    expect(res.body).toEqual([newTest1, newTest2]);

  });
});
