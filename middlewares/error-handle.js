/**
 * @author dengyun@henhaoji.com
 *
 * @Date 2017/3/8
 */

'use strict';

module.exports = function (params) {
  if (typeof params === 'function') {
    return catchError(params);
  } 
  if (typeof params === 'object') {
    for (let key in params) {
      if (typeof params[key] === 'function') {
        params[key] = catchError(params[key]);
      }
    }
  }
  return params;
};

function catchError(controller) {
  return function (req, res, next) {
    let func = controller.apply(this, arguments);
    if (func && typeof func.then === 'function') {
      return func.catch((err) => next({code : 500, msg : err.message || err, err : err}));
    }
    return func;
  }  
}