# Experiment 1 - Streaming: Reading CSV file, transforming records to JavaScript Objects

The goal is to read csv file data as data stream and convert it to JavaScript objects. 

There are more NodeJS package for dealing with csv data. Please note, there is only one letter difference in their package name:
* `csv-parse`: https://www.npmjs.com/package/csv-parse
* `csv-parser`:  https://www.npmjs.com/package/csv-parser

The second option, `csv-parser`, is one of the fastest NodeJS csv parser implementation, however, it is not so popular (only 18k download a week). Playing with these packages, simple performance test clearly showed that `csv-parser` is faster.

On the other hand `csv-parse` is much more popular (more than 250k downloads per week), it has TypeScript support out of the box and it provides more information about parsed lines, so the public API of this package is more advanced. So it is suggested to use this package in our project.

Detailed documentation about `csv-parse`: http://csv.adaltas.com/parse/

**Implementation details**

Adding to a project:

```
$ npm i -D @types/csv-parse
$ npm i -S csv-parse
```

(When you deal with files in NodeJS, `fs-extra` is the suggested package.)

```typescript
import { createReadStream } from 'fs-extra';
import { Parse } from 'csv-parse';

// Create an instance with configuration
// `columns: true` option means the csv file first line will be used as column name and each column name will be added as 
// object property to the generated record object. 
const csvParser = new Parse({ columns: true })

createReadStream("/some/file/path.csv")
  .pipe(csvParser)
  .on('data', record => { /* deal with records as JavaScript Object */ })
  .on('end', () => { /* after processing, there are some extra information in csvParser, ex. csvParser.lines contains the number of processed records */ });
```
