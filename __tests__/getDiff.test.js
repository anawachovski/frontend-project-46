import { test, expect } from '@jest/globals';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import getDiff from '../src/getDiff.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const resultExpected = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test.each([
  {
    file1: 'file1.json', file2: 'file2.json', format: undefined, expected: 'resultStylish.txt',
  },
  {
    file1: 'file1.yml', file2: 'file2.yml', format: undefined, expected: 'resultStylish.txt',
  },
  {
    file1: 'file1.json', file2: 'file2.json', format: 'stylish', expected: 'resultStylish.txt',
  },
  {
    file1: 'file1.yml', file2: 'file2.yml', format: 'stylish', expected: 'resultStylish.txt',
  },
  {
    file1: 'file1.json', file2: 'file2.json', format: 'plain', expected: 'resultPlain.txt',
  },
  {
    file1: 'file1.yml', file2: 'file2.yml', format: 'plain', expected: 'resultPlain.txt',
  },
])('generate difference', ({
  file1, file2, format, expected,
}) => {
  expect(getDiff(getFixturePath(file1)), getDiff(getFixturePath(file2)), format)
    .toEqual(resultExpected(expected));
});
