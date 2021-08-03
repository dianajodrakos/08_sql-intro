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

  static async insert({ text, number, boolean }) {
    const { rows } = await pool.query(
      'INSERT INTO tests (text, number, boolean) VALUES ($1, $2, $3) RETURNING *',
      [text, number, boolean]
    );

    return new Test(rows[0]);
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM tests');
    return rows.map((row) => new Test(row));
  }

};
