const path = require('path');

const srcResolve = function(file) {
  return path.join(__dirname, '..', 'src', file);
}

const distResolve = function (file) {
  return path.join(__dirname, '..', 'dist', file);
}

module.exports = {
  entry: {
    'index': srcResolve('index'),
  },
  output: {
    path: distResolve(''),
    filename: '[name].js'
  }
};