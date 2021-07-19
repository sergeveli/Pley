'use strict';
module.exports = (sequelize, DataTypes) => {
  const Favorites = sequelize.define('Favorites', {
    userId: DataTypes.INTEGER,
    businessImg: DataTypes.STRING,
    businessId: DataTypes.INTEGER
  }, {});
  Favorites.associate = function(models) {
    Favorites.belongsTo(models.User, { foreignKey: 'userId'})
    Favorites.belongsTo(models.Business, {foreignKey: 'businessId'})
  };
  return Favorites;
};