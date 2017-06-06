/**
 * @author dengyun@henhaoji.com
 *
 * @Date 2017/3/7
 */

'use strict';

const path = require('path');
const pkg = require('../package.json');

module.exports = {
  web         : {
    url : 'http://127.0.0.1:10086',
    host:'127.0.0.1',
    port: 10086,
    name: pkg.name
  },
  view        : {
    cache : {},
    engine: 'ejs',
    dir   : 'views'
  },
  log         : {
    dir           : `/raid/${pkg.name}/log/`,
    nolog         : /\.(js|css|png|jpg|jpeg|ico|svg|gif)/,
    format        : ":remote-addr :method :url :status :response-time ms :user-agent :content-length",
    replaceConsole: true,
    level         : "AUTO",
    console       : false
  },
  static      : {
    dir   : path.join(__dirname, '../public'),
    maxAge: 1000 * 60 * 60,
    // 页面缓存设置
    pageCacheStatus : false,
    pageCacheRedisPre : 'webStatic:',
    expire : 60 * 60 * 24
  },
  redis       : {
    host: '127.0.0.1',
    port: 6379,
    db  : 8,
    sessionDB : 2,
    opt : {auth_pass: ''}
  },
  mysql       : {
    host              : '127.0.0.1',
    username          : 'root',
    password          : 'root',
    port              : 3306,
    database          : 'expressmvc',
    connectTimeout    : 5000,
    waitForConnections: true,
    connectionLimit   : 50,
    logging           : true
  }
};