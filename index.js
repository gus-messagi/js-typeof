'use strict'

module.exports = function(variable) {
  return Object.prototype.toString.call(variable).split(' ')[1].replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
}