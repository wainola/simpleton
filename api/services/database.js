require('dotenv').config();
const { Client } = require('pg');

class Database {
  constructor(connectionString) {
    if (Database.instance) {
      return Database;
    }
    this.connectionString = connectionString;
    this.conn = new Client({
      connectionString: this.connectionString
    });
    this.conn
      .connect()
      .then(() => console.log('Connected to postgres'))
      .catch(e => console.log('Some error ocurred:', e));
    Database.instance = true;
    Database = this;
    return Database;
  }
}

module.exports = new Database();
