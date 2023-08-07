import stylish from './stylish.js';

const ast = (filesDif, format) => {
  switch (format) {
    case 'stylish': return stylish(filesDif);
    case 'plain': return 'error';
    default: throw new Error(`Unknown type: ${format}!`);
  }
};

export default ast;
