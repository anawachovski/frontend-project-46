import _ from 'lodash';

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

export default getDiffTree;
