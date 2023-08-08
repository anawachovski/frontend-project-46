import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import { test, expect } from '@jest/globals';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const resultExpected = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test.each([
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
  {
    file1: 'file1.json', file2: 'file2.json', format: 'json', expected: 'resultJson.txt',
  },
  {
    file1: 'file1.yml', file2: 'file2.yml', format: 'json', expected: 'resultJson.txt',
  },
])('generate difference', ({
  file1, file2, format, expected,
}) => {
  expect(genDiff(getFixturePath(file1), getFixturePath(file2), format))
    .toEqual(resultExpected(expected));
});
