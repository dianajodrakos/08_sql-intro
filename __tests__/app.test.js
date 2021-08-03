const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('test routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('using POST route, inserts a new entry into database', async () => {
    const newTest = {
      test: 'hello world',
      number: 42,
      boolean: true,
    };

    const res = await request(app)
      .post('/api/v1/test-api')
      .send(test);

    expect(res.body).toEqual({
      id: 1,
      ...newTest,
    });
  });
});
