import stylish from './stylish.js';
import getPlainFormat from './plain.js';

const ast = (filesDif, format) => {
  switch (format) {
    case 'stylish': return stylish(filesDif);
    case 'plain': return getPlainFormat(filesDif);
    default: throw new Error(`Unknown type: ${format}!`);
  }
};

export default ast;
