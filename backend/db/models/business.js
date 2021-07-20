'use strict';
module.exports = (sequelize, DataTypes) => {
  const Business = sequelize.define('Business', {
    id: DataTypes.INTEGER,
    ownerId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    location: DataTypes.STRING
  }, {});
  Business.associate = function(models) {
    // associations can be defined here
    Business.hasMany(models.Review, {foreignKey: 'id'})
    Business.belongsTo(models.User, {foreignKey: 'ownerId'})
  };
  return Business;
};