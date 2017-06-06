/**
 * @author dengyun@henhaoji.com
 *
 * @Date 2017/3/10
 */

'use strict';

const categoryCtrl = require('../../../controllers/api/v1/category');

module.exports = (router) => {
  router.get('/categories', categoryCtrl.getCourseCategory);
  router.post('/categories', categoryCtrl.addCourseCategory);
};

