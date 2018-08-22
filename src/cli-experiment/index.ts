#!/usr/bin/env node

import CliWithInquirer from './cli-with-inquirer';

const app = new CliWithInquirer();

async function main() {
  try {
    await app.promptQuestions();
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
}

main();
