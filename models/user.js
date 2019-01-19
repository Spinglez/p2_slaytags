module.exports = function(sequelize, DataTypes) {
  let Users = sequelize.define('Users', {
    // Giving the Author model a name of type STRING
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    accessToken: DataTypes.STRING
  });

  return Users;
};
