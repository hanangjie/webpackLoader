module.exports = function (source) {
  const options = this.getOptions();

  source = source.replace(/\[name\]/g, options.name);

  return source;
};