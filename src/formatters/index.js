import getStylishFormat from './stylish.js';
import getPlainFormat from './plain.js';
import getJsonFormat from './json.js';

const getFormat = (filesDif, format) => {
  switch (format) {
    case 'stylish': return getStylishFormat(filesDif);
    case 'plain': return getPlainFormat(filesDif);
    case 'json': return getJsonFormat(filesDif);
    default: throw new Error(`Unknown type: ${format}!`);
  }
};

export default getFormat;
