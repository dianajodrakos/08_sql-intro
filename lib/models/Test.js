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

  static async getById(id) {
    const { rows } = await pool.query(
      'SELECT * FROM tests WHERE id=$1',
      [id]);
    return new Test(rows[0]);
  }

  static async update(id, text, number, boolean) {
    const { rows } = await pool.query(
      'UPDATE tests SET text=$1, number=$2, boolean=$3 WHERE id=$4 RETURNING *',
      [text, number, boolean, id]
    );
    return new Test(rows[0]);
  }
};
