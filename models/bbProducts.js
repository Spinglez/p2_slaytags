module.exports = function(sequelize, DataTypes) {
  var BBProducts = sequelize.define('BBProducts', {
    // Giving the Author model a name of type STRING
    name: DataTypes.STRING,
    sku: DataTypes.INTEGER,
    price: DataTypes.FLOAT
  });

  return BBProducts;
};
