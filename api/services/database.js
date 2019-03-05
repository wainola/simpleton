require('dotenv').config();
const { Client } = require('pg');

const { DATABASE_URL } = process.env;

class Database {
  constructor(connectionString) {
    if (Database.exists) {
      return Database;
    }
    this.conn = new Client({
      connectionString
    });
    Database.exists = true;
    Database.instance = this;
    return this;
  }

  async connect() {
    try {
      await this.conn.connect();
      console.log('Success on connection!');
    } catch (e) {
      console.log('Error on connecting ', e);
    }
  }

  async closeConnection() {
    try {
      await this.conn.end();
      console.log('Connection terminated');
    } catch (e) {
      console.log('Error terminating the connection', e);
    }
  }

  async testConnection() {
    try {
      const q = await this.conn.query('SELECT NOW()');
      const r = await q.rows;
      console.log('RESULT TEST CONNECTION:', r);
    } catch (e) {
      console.log('SOME ERROR ON TESTING THE CONECTION', e);
    }
  }

  async queryToExec(query) {
    try {
      const q = await this.conn.query(query);
      const r = await q.rows;
      if (r.length === 0) {
        return { sucess: true };
      }
      return r;
    } catch (e) {
      return { error: true, meta: e };
    }
  }
}

module.exports = new Database(DATABASE_URL);
