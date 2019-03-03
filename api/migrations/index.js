const Database = require('../services/database');
const tables = require('./tables');

(async () => {
  Database.connect();
  Database.testConnection();

  tables.forEach(element => {
    Database.queryToExec(element.query)
      .then(() => console.log('table created', element.descriptor))
      .catch(e => console.log('error on creating the table,', e));
  });
})();
