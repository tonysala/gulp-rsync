'use strict';

var gutil = require('gulp-util');
var util = require('util');

function log() {
  process.stdout.write(util.format.apply(this, arguments));
  if (typeof process.stdout.cursorTo === 'function') {
  process.stdout.cursorTo(0);
  } else {
      process.stdout.write("\r");
  }
}

module.exports = function() {
  // HACK: In order to show rsync's transfer progress, override `console` temporarily...
  var orig = console.log;
  console.log = log;
  var retval = gutil.log.apply(this, arguments);
  console.log = orig;
  return retval;
};
