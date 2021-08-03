const { Router } = require('express');
const TestService = require('../services/TestServices.js');

module.exports = Router()
  .post('/', async (req, res, next) => {
    try {
      const data = await TestService.createEntry(req.body);
      res.send(data);
    } catch(err) {
      next(err);
    }
  })
  
  .get('/', async (req, res, next) => {
    try {
      const data = await TestService.getAllEntries();
      res.send(data);
    } catch(err) {
      next(err);
    }
  });

