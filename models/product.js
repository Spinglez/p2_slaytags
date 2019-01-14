module.exports = function(sequelize, DataTypes) {
  var Products = sequelize.define("Product", {
    // Giving the Author model a name of type STRING
    name: DataTypes.STRING,
    sku: DataTypes.INTEGER,
    price: DataTypes.FLOAT,
    customerReviewAverage: DataTypes.FLOAT,
    customerReviewCount: DataTypes.INTEGER
  });

  // Products.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
  //   Products.hasMany(models.Post, {
  //     onDelete: "cascade"
  //   });
  // };

  return Products;
};
