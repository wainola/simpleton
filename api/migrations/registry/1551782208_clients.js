
  module.exports = {
      tableDescriptor: 'clients',
      query: `CREATE TABLE clients (ID UUID NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),NAME TEXT NOT NULL ,LASTNAME TEXT NOT NULL ,AGE NUMERIC NOT NULL)`
    }
    