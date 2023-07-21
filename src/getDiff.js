import fs from 'fs';
import path from 'path';
import _ from 'lodash';

const getDiff = (filepath1, filepath2) => {
  const obj1 = JSON.parse(fs.readFileSync(path.resolve(filepath1)));
  const obj2 = JSON.parse(fs.readFileSync(path.resolve(filepath2)));
  const keys = _.union(_.keys(obj1), _.keys(obj2));
  const sortedKeys = _.sortBy(keys);

  const getDiffTree = sortedKeys.map((key) => {
    if (!Object.hasOwn(obj1, key)) {
		return { key, status: 'added', value: obj2[key] }
	 }
	 if (!Object.hasOwn(obj2, key)) {
		return { key, status: 'deleted', value: obj1[key] }
	 }
	 if (!_.isEqual(obj1[key], obj2[key])) {
		return { key, status: 'changed', value1: obj1[key], value2: obj2[key] }
	 }
	 return { key, status: 'unchanged', value: obj1[key] }
  });

  const space = '  ';
  const result = `{\n${getDiffTree.map((node) => {
    if (node.status === 'added') {
		return `${space}+ ${node.key}: ${node.value}`;
	 }
	 if (node.status === 'deleted') {
		return `${space}- ${node.key}: ${node.value}`;
	 }
	 if (node.status === 'changed') {
		return `${space}- ${node.key}: ${node.value1}\n${space}+ ${node.key}: ${node.value2}`;
	 }
	 if (node.status ==='unchanged') {
		return `${space}  ${node.key}: ${node.value}`;
	 }
  }).join('\n')}\n}`;
  return result;
};

export default getDiff;