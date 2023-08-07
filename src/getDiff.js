import fs from 'fs';
import path from 'path';
import _ from 'lodash';
import parse from './parsers.js';
import getFormat from './formatters/index.js';

const getData = (filepath) => {
  const absolutePath = path.resolve(filepath);
  const extensionName = path.extname(absolutePath).slice(1);
  const data = fs.readFileSync(absolutePath, 'utf-8');

  return parse(data, extensionName);
  // return JSON.parse(data);
};

const getDiffTree = (obj1, obj2) => { 
  const keys = _.union(_.keys(obj1), _.keys(obj2));
  const sortedKeys = _.sortBy(keys);

  const result = sortedKeys.map((key) => {
    if (_.isPlainObject(obj1[key]) && _.isPlainObject(obj2[key])) {
      return { key, status: 'nested', children: getDiffTree(obj1[key], obj2[key]) };
    }
    if (!Object.hasOwn(obj1, key)) {
      return { key, status: 'added', value: obj2[key] };
    }
    if (!Object.hasOwn(obj2, key)) {
      return { key, status: 'deleted', value: obj1[key] };
    }
    if (!_.isEqual(obj1[key], obj2[key])) {
      return {
        key, status: 'changed', value1: obj1[key], value2: obj2[key],
      };
    }
    return { key, status: 'unchanged', value: obj1[key] };
  });

  return result;
};

const getDiff = (filepath1, filepath2, format = 'stylish') => getFormat(getDiffTree(getData(filepath1), getData(filepath2)), format);

export default getDiff;
