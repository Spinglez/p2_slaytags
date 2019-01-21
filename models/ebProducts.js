module.exports = function(sequelize, DataTypes) {
    var EBProducts = sequelize.define('EBProducts', {
      // Giving the Author model a name of type STRING
      name: DataTypes.STRING,
      sku: DataTypes.STRING,
      price: DataTypes.FLOAT
    });
  
    return EBProducts;
  };