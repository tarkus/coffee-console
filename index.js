var path = require('path');
var fs   = require('fs');
var lib  = path.join(path.dirname(fs.realpathSync(__filename)), '../lib');
require("coffee-script");

start = module.exports = function() {
  cli = require('coffee-script/lib/coffee-script/repl').start();
  try {
    cli.context['app'] = require(fs.realpathSync(".") + "/app");
  } catch(e) {
  }
}

if (require.main == module) {
  start();
}
