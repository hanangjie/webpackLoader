module.exports = function (source) {
  const options = this.getOptions();

  console.log(source)
  source = source.replace(/\[name\]/g, options.name);

  return source;
};

module.exports.pitch = function(d,e,f) {
  console.log(d)
  console.log(e)
  console.log(f)
  // return (
  //   'module.exports = require(' +
  //   JSON.stringify('-!' + d) +
  //   ');'
  // );
}