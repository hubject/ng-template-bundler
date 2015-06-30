'use strict';
var fs = require('fs');
var path = require('path');
var util = require('util');

var tBundle = fs.readFileSync(path.join(__dirname, './bundle.tmpl'), 'utf-8');
var tBrowserify = fs.readFileSync(path.join(__dirname, './browserify.tmpl'), 'utf-8');

module.exports = function (content, options) {
  var moduleName = options.module || 'templates';
  var output;

  output = util.format(tBundle, moduleName, content);
  if(options.browserify) {
    output = util.format(tBrowserify, output);
  }
  return output;
};
