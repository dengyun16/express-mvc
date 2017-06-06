/**
 * @author dengyun@henhaoji.com
 *
 * @Date 2017/3/7
 */

'use strict';

require('./global_regist');
const web = require('./servers/web');

Promise.resolve([web]).each(function (app) {
  app.start();
});