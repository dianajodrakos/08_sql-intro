const Test = require('../models/Test');

module.exports = class TestService {
  
  static async createEntry(data) {
    const entry = await Test.insert(data);
    return entry;
  }

};
