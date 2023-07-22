#!/usr/bin/env node
import { program } from 'commander';
import getDiff from '../src/getDiff.js';

program
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0', '-V, --version', 'output the version number')
  .option('-f, --format <type>', 'output format')
  .argument('<filepath1>', 'first configuration file')
  .argument('<filepath2>', 'second configuration file')
  .action((filepath1, filepath2) => {
    const result = getDiff(filepath1, filepath2);
    console.log(result);
  });

program.parse();
