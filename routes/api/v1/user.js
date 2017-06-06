/**
 * @author dengyun@henhaoji.com
 *
 * @Date 2017/3/8
 */

'use strict';

const userCtrl = require('../../../controllers/api/v1/user');

module.exports = (router) => {
  router.get('/users', userCtrl.getUsers);
  // router.get('/users/:id',)
  // router.post('/users/:id',)
  // router.put('/users/:id',)
  // router.delete('/users/:id',)
};