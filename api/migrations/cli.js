#!/usr/bin/env node
const program = require('commander');
const moment = require('moment');
const { promisify } = require('util');
const fs = require('fs');
const Database = require('../services/database');

// FUNCTIONS TO USE AND PROMISIFY
const readFile = promisify(fs.readFile);

program.description('Migration tool');

const { NODE_ENV } = process.env;

const urzaIndexPath =
  NODE_ENV !== 'development'
    ? `${process.cwd()}/api/migrations/registry/urza_index`
    : `${process.cwd()}/migrations/registry/urza_index`;

// GET VERSION
program.command('version').action(() => {
  console.log('Urza linux version 1.0.0');
});

// CREATE MIGRATIONS
program.command('create <tableName> [fields...]').action((tableName, fields) => {
  const mappedFields = fields
    .map(item => item.split(':'))
    .reduce((acc, item) => {
      const formated = item.map(elem =>
        elem.includes('_') ? elem.replace(/_/, ' ').toUpperCase() : elem.toUpperCase()
      );
      acc.push(formated);
      return acc;
    }, []);

  const query = mappedFields.reduce((acc, item, idx, self) => {
    acc += `${item.join(' ')} ${(item[3] === 'PRIMARY KEY' && 'DEFAULT gen_random_uuid()') || ''}${
      self.length - 1 === idx ? '' : ','
    }`;
    return acc;
  }, '');

  const date = moment().unix();

  const filename = `${date}_${tableName}`;

  const textToWrite = `
  module.exports = {
      tableDescriptor: '${tableName}',
      query: \`CREATE TABLE ${tableName} (${query.trim()})\`
    }
    `;

  const fileDirectory =
    NODE_ENV !== 'development'
      ? `${process.cwd()}/api/migrations/registry`
      : `${process.cwd()}/migrations/registry`;

  fs.writeFile(`${fileDirectory}/${filename}.js`, textToWrite, err => {
    if (err) console.log('SOME ERROR HAPPENED CREATING THE CURRENT MIGRATION', err);

    console.log(`SUCCESS ON CREATING MIGRATION FILE FOR ${tableName.toUpperCase()} TABLE!`);
  });

  const existsUrzaIndex = fs.existsSync(urzaIndexPath);

  // CREATING URZA INDEX IF NOT EXISTS;
  if (!existsUrzaIndex) {
    fs.writeFile(urzaIndexPath, filename, { flag: 'wx' }, err => {
      if (err) console.log('Some error creating the file', err);

      console.log('CREATING THE URZA INDEX');

      process.exit(1);
    });
  }

  // WRITING TO THE URZA INDEX THE CURRENT FILE OF MIGRATIONS
  fs.readFile(urzaIndexPath, 'utf8', (err, data) => {
    if (err) console.log('Some error reading the Urza index', err);

    const newData = `${data}\n${filename}`;

    fs.writeFile(urzaIndexPath, newData, err => {
      if (err) console.log('Error on writing file', err);
    });
  });
});

// REMOVE LAST MIGRATION
program.command('remove last').action(() => {});

// GET STATUS OF MIGRATIONS
program.command('status').action(() => {
  console.log('cwd', process.cwd());
  console.log('process.env', process.env);
});

program.command('migrate').action(() => {
  Database.connect();
  const urzaIndexExists = fs.existsSync(urzaIndexPath);
  if (!urzaIndexExists) {
    console.log('No migrations to run');

    process.exit(1);
  }
  Database.testConnection();

  // READ THE MIGRATIONS FILE => READING THE INDEX, APPENDING THE .JS AND CALLING THE READFILE
  // THIS VAR SHOULD BE ON TOP!!!
  const registryPath =
    NODE_ENV !== 'development'
      ? `${process.cwd()}/api/migrations/registry`
      : `${process.cwd()}/migrations/registry`;

  readFile(`${registryPath}/urza_index`, 'utf8')
    .then(data => {
      console.log(data.split('\n'));
      const filenames = data.split('\n');

      // USING REDUCE TO ADD SERIAL EXECUTION TO THE PROMISES
      const results = filenames.reduce(async (resolved, filename) => {
        try {
          const migrationFile =
            NODE_ENV !== 'development'
              ? `${process.cwd()}/migrations/registry/${filename}.js`
              : `${process.cwd()}/migrations/registry/${filename}.js`;

          const fileReaded = await readFile(migrationFile, 'utf8');
          const stringProccesed = fileReaded.replace(/\n/, '');

          return resolved.then(dataResolved => [...dataResolved, stringProccesed]);
        } catch (error) {
          return [{ error: true, meta: error }];
        }
      }, Promise.resolve([]));

      return results;
    })
    .then(resultsFromReading => {
      const parseToObjects = resultsFromReading.map(item => JSON.parse(JSON.stringify(item)));

      console.log('parsed', parseToObjects);
    })
    .catch(err => {
      console.log('Error on reading the urza index', err);
      process.exit(1);
    });
  // GET THE NUMBER OF FILE THAT ARE CURRENTLY MIGRATIONS
  // ITERATE OVER THEM AND EXECUTE THE QUERY
});

program.parse(process.argv);
