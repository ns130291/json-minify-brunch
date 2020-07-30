'use strict';

// Documentation for Brunch plugins:
// http://brunch.io/docs/plugins

class JSONminifyPlugin {
  constructor(config) {
    this.config = config.plugins.JSONminify || {};
  }

  compileStatic({data, path}) {
    //console.log(path);
    //const res = JSON.stringify(JSON.parse(data));
    //return res;
    return Promise.resolve({data: JSON.stringify(JSON.parse(data))});
  }

}

JSONminifyPlugin.prototype.brunchPlugin = true;
JSONminifyPlugin.prototype.type = 'template';

JSONminifyPlugin.prototype.extension = 'json';
JSONminifyPlugin.prototype.staticTargetExtension  = 'json';

JSONminifyPlugin.prototype.defaultEnv = 'production';

module.exports = JSONminifyPlugin;
