const parse = (data, extensionName) => {
  return extensionName === 'json' ? JSON.parse(data) : 'error'; //тут будет swith с другими форматами или другая конструкция
}
export default parse;