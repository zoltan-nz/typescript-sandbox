#!/usr/bin/evn node

const fs = require('fs');
const path = require('path');
const dev = fs.existsSync(path.join(__dirname, '../tsconfig.json'));

if (dev) require('ts-node/register');

require(`../${dev ? 'some-cli' : '../dist/some-cli/some-cli'}`).run()
  .catch(require('@oclif/errors/handle'));
