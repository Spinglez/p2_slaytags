module.exports = function(sequelize, DataTypes) {
  var Products = sequelize.define('Products', {
    provider: DataTypes.STRING,
    name: DataTypes.STRING,
    sku: DataTypes.STRING,
    price: DataTypes.FLOAT
  });
  return Products;
};
