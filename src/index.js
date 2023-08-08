import fs from 'fs';
import path from 'path';
import getFormat from './formatters/index.js';
import getDiffTree from './getDiff.js';
import parse from './parsers.js';

const getContent = (filepath) => fs.readFileSync(path.resolve(filepath), 'utf-8');
const getExtName = (filepath) => path.extname(filepath).slice(1);

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const obje1 = parse(getContent(filepath1), getExtName(filepath1));
  const obj2 = parse(getContent(filepath2), getExtName(filepath2));

  return getFormat(getDiffTree(obje1, obj2), format);
};

export default genDiff;
