/**
 * @author dengyun@henhaoji.com
 *
 * @Date 2017/3/8
 */

'use strict';

module.exports = function (options) {
  options = options || {};
  return async function (req, res, next) {
    let tmpUrl = req.url;
    let pageCachePathKey = options.pageCacheRedisPre + tmpUrl;
    if (options.noCache.test(req.url) || req.url.indexOf('/api') > -1) {
      return next();
    }
    let pageContent = await cache.get(pageCachePathKey);
    if (options.pageCacheStatus && pageContent) {
      return next({code : 200, page : pageContent});
    } else {
      return next();
    }
  }
};