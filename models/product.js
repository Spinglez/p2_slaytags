module.exports = function(sequelize, DataTypes) {
  var Products = sequelize.define('Products', {
    // Giving the Author model a name of type STRING
    name: DataTypes.STRING,
    sku: DataTypes.INTEGER,
    price: DataTypes.FLOAT
  });

  return Products;
};
