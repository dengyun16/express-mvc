/**
 * @author dengyun@henhaoji.com
 *
 * @Date 2017/3/7
 */

global.ROOT_PATH = __dirname;

global.config         = require('config');
global._              = require('lodash');
global.Promise        = require('bluebird');
global.fse            = require('fs-extra');
global.logger         = require('./tools/logger');
global.db             = require('./models');
global.cache          = require('./lib/cache');
global.handleError    = require('./middlewares/error-handle');
global.paramValidator = require('./middlewares/param-validator');