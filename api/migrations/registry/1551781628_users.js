
  module.exports = {
      tableDescriptor: 'users',
      query: `CREATE TABLE users (ID UUID NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),NAME TEXT NOT NULL)`
    }
    