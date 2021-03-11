// Creating our User model
module.exports = function(sequelize, DataTypes) {
  var Giveback = sequelize.define("Giveback", {

    Organization: {
      type: DataTypes.STRING,
      allowNull: false
    },
    
    category: {
      // or a num 
      type: DataTypes.STRING,
      allowNull: false
    },

    employeeMatch: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },

    taxDeductible: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    
    },
    receiptDocumentation: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    
    },
    
    amount: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      validate: {
        min: 0,
      }
    }
  });
 
  return Giveback;
};
