const { Router } = require('express');
const TestService = require('../services/TestServices.js');
const Test = require('../models/Test.js');

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
      const data = await Test.getAll();
      res.send(data);
    } catch(err) {
      next(err);
    }
  })
  
  .get('/:id', async (req, res, next) => {
    try {
      const data = await Test.getById(req.params.id);
      res.send(data);
    } catch(err) {
      next(err);
    }
  })

  .put('/:id', async (req, res, next) => {
    try {

    } catch(err) {
      next(err);
    }
  })
  
  ;

