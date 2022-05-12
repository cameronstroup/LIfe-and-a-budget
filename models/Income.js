const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our User model
class Income extends Model {}


Income.init(
 {
   title: {
     type: DataTypes.STRING,
     allowNull: false
   },
   Budget: {
    type: DataTypes.INTEGER,
    allowNull: false
   },
   Actual: {
    type: DataTypes.INTEGER,
    allowNull: false
   },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Income'
  }
);
module.exports = Income;