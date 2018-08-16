import { Parser } from 'csv-parse';
import { createReadStream } from 'fs-extra';
import { resolve } from 'path';
import { cwd } from 'process';

// Number of records in the csv file: 39088
const CSV_FILE_PATH = 'resources/transactions.csv';
const filePath = resolve(cwd(), CSV_FILE_PATH);

const csvParser = new Parser({
  columns: true,
});

createReadStream(filePath)
  .pipe(csvParser)
  .on('data', chunk => {
    // console.log(chunk);
  })
  .on('end', () => {
    console.log('Processed lines: ', csvParser.lines);
    console.log('Empty lines: ', csvParser.empty_line_count);
  });
