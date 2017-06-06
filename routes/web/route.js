/**
 * @author dengyun@henhaoji.com
 *
 * @Date 2017/3/8
 */

'use strict';

const webCtrl = require('../../controllers/web/web');

module.exports = (router) => {
  router.get('/', webCtrl.index);
};