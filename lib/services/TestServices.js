const Test = require('../models/Test');

module.exports = class TestService {
  
  static async createEntry(data) {
    const entry = await Test.insert(data);
    return entry;
  }

  static async updateEntry(id, { text, number, boolean }) {
    const currentTest = await Test.getById(id);
    const newText = text ?? currentTest.text;
    const newNumber = number ?? currentTest.number;
    const newBoolean = boolean ?? currentTest.boolean;

    const entry = await Test.update(id, newText, newNumber, newBoolean);
    return entry;
  }

  static async deleteEntry(id) {
    const entry = await Test.delete(id);
    return { message: `Entry ${entry.id} was deleted.` };
  }

};
