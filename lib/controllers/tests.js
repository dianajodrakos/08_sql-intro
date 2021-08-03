const { Router } = require('express');
const TestService = require('../services/TestServices.js');

module.exports = Router()
  .post('/', async (req, res, next) => {
    try {
      const entry = await TestService.createEntry(req.body);
      res.send(entry);
    } catch(err) {
      next(err);
    }
  })
  
  .get('/', async (req, res, next) => {
    try {
      
    } catch(err) {
      next(err);
    }
  });

