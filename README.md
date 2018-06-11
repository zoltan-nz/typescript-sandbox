# TypeScript SandBox

## Experiment 1 - Streaming: Reading CSV file, transforming records to JavaScript Objects

The goal is to read csv file data as data stream and convert it to JavaScript objects. 

There are more NodeJS package for dealing with csv data. Please note, there is only one letter difference in their package name:
* `csv-parse`: https://www.npmjs.com/package/csv-parse
* `csv-parser`:  https://www.npmjs.com/package/csv-parser

The second option, `csv-parser`, is one of the fastest NodeJS csv parser implementation, however, it is not so popular (only 18k download a week). Playing with these packages, simple performance test clearly showed that `csv-parser` is faster.

On the other hand `csv-parse` is much more popular (more than 250k downloads per week), it has TypeScript support out of the box and it provides more information about parsed lines, so the public API of this package is more advanced. So it is suggested to use this package in our project.
