require('dotenv').config();
const { Client } = require('pg');

const { DATABASE_URL } = process.env;

console.log(DATABASE_URL);

const client = new Client({
  connectionString: DATABASE_URL
});

client
  .connect()
  .then(() => console.log('Success on database connection'))
  .catch(err => console.log('Error on connection', err));

(async () => {
  const pgCryptoQuery = 'CREATE EXTENSION IF NOT EXISTS pgcrypto;';
  const query = `CREATE TABLE clients (
    id uuid not null primary key default gen_random_uuid(),
    name text not null,
    lastname text not null,
    email text not null,
    reason text not null,
    address text not null,
    createdAt timestamp not null default now(),
    updatedAt timestamp default null,
    deletedAt timestamp default null
  )`;

  client
    .query(pgCryptoQuery)
    .then(() => console.log('Success on pgCrypto query'))
    .then(() => client.query(query))
    .then(() => console.log('Success on client query'))
    .catch(err => console.log('Some error running one query', err));
})();
