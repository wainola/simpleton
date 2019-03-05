#!/usr/bin/env node
const program = require('commander');
const moment = require('moment');
const fs = require('fs');

program.description('Migration tool');

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

  const date = moment().unix();

  const filename = `${date}_${tableName}`;

  const urzaIndexPath = './api/migrations/registry/urza_index';

  const query = mappedFields.reduce((acc, item, idx, self) => {
    acc += `${item.join(' ')} ${(item[3] === 'PRIMARY KEY' && 'DEFAULT gen_random_uuid()') || ''}${
      self.length - 1 === idx ? '' : ','
    }`;
    return acc;
  }, '');

  const textToWrite = `
  module.exports = {
      tableDescriptor: '${tableName}',
      query: \`CREATE TABLE ${tableName} (${query.trim()})\`
    }
    `;

  fs.writeFile(`./api/migrations/registry/${filename}.js`, textToWrite, err => {
    if (err) console.log('Some error::', err);
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

program.command('remove last').action(() => {});

program.parse(process.argv);
