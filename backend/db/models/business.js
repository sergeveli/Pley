'use strict';
module.exports = (sequelize, DataTypes) => {
  const Business = sequelize.define('Business', {
    id: DataTypes.INTEGER,
    ownerId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    decription: DataTypes.TEXT,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING
  }, {});
  Business.associate = function(models) {
    // associations can be defined here
    Business.hasMany(models.user, {foreignKey: 'ownerId'})
  };
  return Business;
};