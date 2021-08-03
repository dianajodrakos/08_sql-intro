const express = require('express');
const app = express();
const testController = require('./controllers/tests.js');

app.use(express.json());

app.use('/api/v1/test-api', testController);

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
