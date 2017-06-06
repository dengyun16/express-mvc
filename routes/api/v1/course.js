/**
 * @author dengyun@henhaoji.com
 *
 * @Date 2017/3/8
 */

'use strict';

const courseCtrl = require('../../../controllers/api/v1/course');

module.exports = (router) => {
  router.get('/courses',  courseCtrl.getCourses);
  router.get('/courses/:id', courseCtrl.getCourseDetail);
};