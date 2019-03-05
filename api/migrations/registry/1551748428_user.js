
  module.exports = {
      tableDescriptor: 'user',
      query: `CREATE TABLE user (ID UUID NOT NULL PRIMARY KEY DEFAULT gen_random_uuid())`
    }
    