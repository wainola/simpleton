
  module.exports = {
      tableDescriptor: 'books',
      query: `CREATE TABLE books (ID UUID NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),TITLE TEXT NOT NULL ,ISBN NUMERIC NOT NULL)`
    }
    