// Creating our User model
module.exports = function(sequelize, DataTypes) {
  var Giveback = sequelize.define("Giveback", {

    title: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
 
  return Giveback;
};
