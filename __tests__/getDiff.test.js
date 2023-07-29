import { test, expect } from '@jest/globals';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import getDiff from '../src/getDiff.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('generate difference', () => {
  expect(getDiff(getFixturePath('file1.json'), getFixturePath('file2.json'))).toEqual(fs.readFileSync('./__fixtures__/resultStylish.txt', 'utf-8'));
  expect(getDiff(getFixturePath('file1.yml'), getFixturePath('file2.yml'))).toEqual(fs.readFileSync('./__fixtures__/resultStylish.txt', 'utf-8'));
});
