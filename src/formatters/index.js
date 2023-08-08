import getStylishFormat from './stylish.js';
import getPlainFormat from './plain.js';

const getFormat = (filesDif, format) => {
  switch (format) {
    case 'stylish': return getStylishFormat(filesDif);
    case 'plain': return getPlainFormat(filesDif);
    case 'json': return JSON.stringify(filesDif, null, '');
    default: throw new Error(`Unknown type: ${format}!`);
  }
};

export default getFormat;
