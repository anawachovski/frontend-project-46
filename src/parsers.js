import yaml from 'js-yaml';

const parse = (data, extensionName) => {
  switch (extensionName) {
    case 'yml':
    case 'yaml':
      return yaml.load(data);
    case 'json':
      return JSON.parse(data);
    default:
      throw new Error(`Unknown element: '${extensionName}'!`);
  }
};

export default parse;
