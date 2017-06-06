/**
 * @author dengyun@henhaoji.com
 *
 * @Date 2017/3/13
 */

'use strict';

let customSanitizers = {
  toArray(value) {
    return (typeof value === 'string') ? JSON.parse(value) : value;
  },
  toIntArray(value) {
    return _.map((typeof value === 'string') ? JSON.parse(value) : value, _.toInteger);
  }
};

let customValidators = {
  isArray(value) {
    try {
      return _.isArray((typeof value === 'string') ? JSON.parse(value) : value);
    } catch (e) {
      return false;
    }
  },
  isIntArray(value) {
    try {
      value = (typeof value === 'string') ? JSON.parse(value) : value;
      return _.isArray(value) && _.every(value, (item) => _.isInteger(_.toInteger(item)));
    } catch (e) {
      return false;
    }
  }
};

module.exports = {
  customSanitizers,
  customValidators
};