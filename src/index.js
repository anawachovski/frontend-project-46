import fs from 'fs';
import path from 'path';
import getFormat from './formatters/index.js';
import getDiffTree from './getDiff.js';
import parse from './parsers.js';

const getFullPath = (filepath) => path.resolve(filepath);
const getContent = (filepath) => fs.readFileSync(getFullPath(filepath), 'utf-8');
const getType = (filepath) => path.extname(filepath).slice(1);

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const obj1 = parse(getContent(filepath1), getType(filepath1));
  const obj2 = parse(getContent(filepath2), getType(filepath2));

  return getFormat(getDiffTree(obj1, obj2), format);
};

export default genDiff;
