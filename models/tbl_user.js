/**
 * @author dengyun@henhaoji.com
 *
 * @Date 2017/3/7
 */

'use strict';

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('User', {
    id : {
      type : DataTypes.INTEGER,
      primaryKey : true,
      autoIncrement : true,
      allowNull : false
    },
    name : {
      type :DataTypes.STRING(50),
      defaultValue : '',
      allowNull:false
    },
    age : {
      type : DataTypes.INTEGER(3)
    }
  }, {
    tableName : 'tbl_user',
    freezeTableName : true,
    timestamps : false
  });
};