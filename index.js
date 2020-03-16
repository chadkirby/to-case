function toSnake(str) {
  return split(str).join('_');
}

function toScreamingSnake(str) {
  return toSnake(str).toUpperCase();
}

function toKebab(str) {
  return split(str).join('-');
}

function toUpperCamel(str) {
  return split(str).map(
    (x) => x.replace(/^[a-z]/, (ltr) => ltr.toUpperCase())
  ).join('');
}

function toCamel(str) {
  return toUpperCamel(str).replace(/^[A-Z]/, (ltr) => ltr.toLowerCase());
}

// convert a string in an arbitrary case to an array of lower-case words
function split(str) {
  // split kebab/snake case at dash/underscore delimiter
  // split camel case at an upper-char followed by a lower-char
  let splitta = /[-_]/.test(str) ? /[-_]+/ : /(?=[A-Z][a-z])/;
  return str.split(splitta).map((word) => word.toLowerCase());
}

module.exports = { toSnake, toScreamingSnake, toKebab, toCamel, toUpperCamel };
