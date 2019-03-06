#!/usr/bin/env node
const program = require('commander');
const moment = require('moment');
const { promisify } = require('util');
const fs = require('fs');
const Database = require('../services/database');
const Utils = require('./utils');

// FUNCTIONS TO USE AND PROMISIFY
const readFile = promisify(fs.readFile);
const unlink = promisify(fs.unlink);
const writeFile = promisify(fs.writeFile);

program.description('Migration tool');

const { NODE_ENV } = process.env;

const urzaIndexPath =
  NODE_ENV !== 'development'
    ? `${process.cwd()}/api/migrations/registry/urza_index`
    : `${process.cwd()}/migrations/registry/urza_index`;

const fileDirectory =
  NODE_ENV !== 'development'
    ? `${process.cwd()}/api/migrations/registry`
    : `${process.cwd()}/migrations/registry`;

const urzaIndexExists = fs.existsSync(urzaIndexPath);

// GET VERSION
program.command('version').action(() => {
  console.log('Urza linux version 1.0.0');
});

// GET STATUS OF MIGRATIONS
program.command('status').action(() => {
  console.log('cwd', process.cwd());
  console.log('process.env', process.env);
});

// CREATE MIGRATIONS
program.command('create <tableName> [fields...]').action(async (tableName, fields) => {
  const mappedFields = await Utils.mapFields(fields);

  const query = await Utils.buildQuery(mappedFields);

  const date = moment().unix();

  const filename = `${date}_${tableName}`;

  const sqlQuery = await Utils.buildTableQuery(tableName, query);

  writeFile(`${fileDirectory}/${filename}.sql`, sqlQuery)
    .then(() => {
      console.log(`Migration file for ${tableName} created!`);
    })
    .then(async () => {
      const existsUrzaIndex = urzaIndexExists;

      // IF URZA INDEX DOESNT EXITS WE CREATED AND WRITE TO THE INDEX
      if (!existsUrzaIndex) {
        try {
          const urzaIndexResult = await writeFile(urzaIndexPath, filename, { flag: 'wx' });
          return urzaIndexResult;
        } catch (error) {
          console.log('error on writing the non existing urza file');
          return error;
        }
      }

      // IF URZA INDEX ALREADY EXISTS, WE WRITE ON IT
      try {
        const fileR = await readFile(urzaIndexPath, 'utf8')
          .then(data => {
            const newDataToWrite = `${data}\n${filename}`;
            return newDataToWrite;
          })
          .then(async dataWroted => {
            const writeToUrza = await writeFile(urzaIndexPath, dataWroted);
            return writeToUrza;
          });

        return fileR;
      } catch (error) {
        console.log('Error writing urza index', error);
        return error;
      }
    })
    .catch(error => {
      console.error('Error on creating the migration file', error);
    });
});

// RUN ALL MIGRATION
program.command('migrate').action(() => {
  const existsUrzaIndex = urzaIndexExists;

  if (!existsUrzaIndex) {
    console.log('No migrations to run');

    process.exit(1);
  }

  // READ THE MIGRATIONS FILE => READING THE INDEX, APPENDING THE .JS AND CALLING THE READFILE
  readFile(`${fileDirectory}/urza_index`, 'utf8')
    .then(dataRead => {
      console.log(dataRead.split('\n'));
      const filenames = dataRead.split('\n');

      // USING REDUCE TO ADD SERIAL EXECUTION TO THE PROMISES
      const results = filenames.reduce(async (resolved, filename) => {
        try {
          const migrationFile =
            NODE_ENV !== 'development'
              ? `${process.cwd()}/api/migrations/registry/${filename}.sql`
              : `${process.cwd()}/migrations/registry/${filename}.sql`;

          const fileRead = await readFile(migrationFile, 'utf8');
          const stringProccesed = fileRead.replace(/\n/, '');

          return resolved.then(dataResolved => [...dataResolved, stringProccesed]);
        } catch (error) {
          return [{ error: true, meta: error }];
        }
      }, Promise.resolve([]));

      return results;
    })
    .then(async resultsFromReading => {
      // HERE WE SEND THE MIGRATIONS TO THE DATABASE
      const makeConnection = await Database.connect();

      // WE RUN THE MIGRATIONS
      if (!makeConnection.error) {
        resultsFromReading.forEach(async query => {
          try {
            const queryResult = await Database.queryToExec(query);
            console.log('query executed', queryResult);
          } catch (e) {
            console.log('Error on executing the query', e);
          }
        });
      }
    })
    .catch(err => {
      console.log('Error on reading the urza index', err);
      process.exit(1);
    });
});

// RUN THE LATEST MIGRATION
program.command('migrate:last').action(() => {
  Database.connect();
  const urzaIndexExists = fs.existsSync(urzaIndexPath);
  if (!urzaIndexExists) {
    console.log('No migrations to run');

    process.exit(1);
  }

  // READ THE MIGRATIONS FILE => READING THE INDEX, APPENDING THE .JS AND CALLING THE READFILE
  // THIS VAR SHOULD BE ON TOP!!!
  const registryPath =
    NODE_ENV !== 'development'
      ? `${process.cwd()}/api/migrations/registry`
      : `${process.cwd()}/migrations/registry`;

  readFile(`${registryPath}/urza_index`, 'utf8')
    .then(async dataFile => {
      const filenames = dataFile.split('\n');
      const lastMigration = filenames.pop();
      const filename = `${registryPath}/${lastMigration}.sql`;

      try {
        const fileContent = await readFile(filename, 'utf8');
        return fileContent;
      } catch (e) {
        console.log('Error reading the last migration file', e);
      }
    })
    .then(async fileContent => {
      const queryToExec = fileContent;

      try {
        const results = await Database.queryToExec(queryToExec);
        return results;
      } catch (e) {
        console.log('Some error happened during query execution', e);
      }
    })
    .then(resultsOfInsertion => {
      console.log('RESULT OF INSERTION', resultsOfInsertion);
      Database.closeConnection();
      process.exit(1);
    });
});

// REMOVE LAST MIGRATION
program.command('remove last').action(() => {});

// REMOVE ALL THE MIGRATIONS FILE AND THE INDEX
program.command('remove:all').action(async () => {
  const urzaIndexExists = fs.existsSync(urzaIndexPath);
  if (!urzaIndexExists) {
    console.log('There is no urza index. Exiting');
    process.exit(1);
  }

  const registryPath =
    NODE_ENV !== 'development'
      ? `${process.cwd()}/api/migrations/registry`
      : `${process.cwd()}/migrations/registry`;

  readFile(`${registryPath}/urza_index`, 'utf-8')
    .then(result => {
      const filenames = result.split('\n');
      const filenamesWithExtension = filenames.map(item => `${item}.sql`);

      // THIS IS A GOOD PLACE FOR A METHOD THAT RETURNS A PROMISE
      filenamesWithExtension.forEach(async filename => {
        try {
          const result = await unlink(`${registryPath}/${filename}`);
          console.log('DELETION RESULT', result);
        } catch (e) {
          console.log('Some error happened durin the cleaning', e);
        }
      });
    })
    .then(async () => {
      try {
        const result = await unlink(`${urzaIndexPath}`);
        console.log('Success deletion of urza index');
      } catch (e) {
        console.log('Some error happened', e);
      }
    })
    .catch(e => {
      console.log('Some error happened!', e);
    });
});

program.parse(process.argv);
