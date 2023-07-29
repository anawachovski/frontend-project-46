import yaml from 'js-yaml';

const parse = (data, extensionName) => {
  switch (extensionName) {
    case 'yml':
    case 'yaml':
      return yaml.load(data);
    default:
      return JSON.parse(data);
  }
};

export default parse;
