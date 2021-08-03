const pool = require('../utils/pool.js');

module.exports = class Test {
  id;
  text;
  number; 
  boolean;

  constructor(row) {
    this.id = row.id; 
    this.text = row.text;
    this.number = row.number;
    this.boolean = row.boolean;
  }
};
