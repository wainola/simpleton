const pgcrypto = {
  descriptor: 'PGCRYPTO',
  qyery: `CREATE EXTENSION IF NOT EXISTS pgcrypto;`
};

const userTable = {
  descriptor: 'USER TABLE',
  query: `
CREATE TABLE users (
  id UUID NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  lastname TEXT NOT NULL,
  email TEXT NOT NULL,
  createdAt TIMESTAMP NOT NULL DEFAULT NOW(),
  updatedAt TIMESTAMP default NULL,
  deletedAt TIMESTAMP default NULL
);
`
};

const requestCause = {
  descriptor: 'REQUEST_CAUSE TABLE',
  query: `
CREATE TABLE request_cause (
  id UUID NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
  request TEXT NOT NULL,
  user_id UUID NOT NULL REFERENCES users(id),
  createdAt TIMESTAMP NOT NULL DEFAULT NOW(),
  updatedAt TIMESTAMP default NULL,
  deletedAt TIMESTAMP default NULL
);
`
};

const address = {
  descriptor: 'ADDRESS TABLE',
  query: `
CREATE TABLE address (
  id UUID NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
  address TEXT NOT NULL,
  lat TEXT NOT NULL,
  lng TEXT NOT NULL,
  user_id UUID NOT NULL REFERENCES users(id),
  createdAt TIMESTAMP NOT NULL DEFAULT NOW(),
  updatedAt TIMESTAMP default NULL,
  deletedAt TIMESTAMP default NULL
);
`
};

const adminUser = {
  descriptor: 'ADMIN_USER TABLE',
  query: `
CREATE TABLE admin (
  id UUID NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  lastname TEXT NOT NULL,
  password TEXT NOT NULL,
  createdAt TIMESTAMP NOT NULL DEFAULT NOW(),
  updatedAt TIMESTAMP default NULL,
  deletedAt TIMESTAMP default NULL
)
`
};

module.exports = [pgcrypto, userTable, requestCause, address, adminUser];
