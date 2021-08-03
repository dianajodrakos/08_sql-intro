const Test = require('../models/Test');
const pool = require('../utils/pool');

module.exports = class TestService {
  
  static async createEntry(data) {
    const entry = await Test.insert(data);
    return entry;
  }

  static async updateEntry(id, { text, number, boolean }) {
    const { currentText, currentNumber, currentBoolean } = await Test.getById(id);

    const newText = text ?? currentText;
    const newNumber = number ?? currentNumber;
    const newBoolean = boolean ?? currentBoolean;

    const entry = await Test.update(id, newText, newNumber, newBoolean);
    return entry;
  }
};
