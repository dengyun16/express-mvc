/**
 * @author dengyun@henhaoji.com
 *
 * @Date 2017/3/13
 */

'use strict';

const userService = require('../../services/user');

module.exports = {
  index
};

async function index(req,res, next) {
  let users = await userService.getUsers({});
  res.locals.users = users;
  return next({code : 200, view : 'users'});
}