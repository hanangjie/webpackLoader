module.exports = function (source) {
  const options = this.getOptions();
console.log(source)
  source = source.replace(/\[name\]/g, options.name);

  return source;
};

module.exports.pitch = function(a,b,c) {
  c.value = 2;
  console.log(1)
}