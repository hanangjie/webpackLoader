module.exports = function (source) {
  const options = this.getOptions();

  source = source.replace(/\[color\]/g, options.color);
  return `var style = document.createElement('style')
  style.textContent = ${JSON.stringify(source)};
  document.body.appendChild(style)`;
};