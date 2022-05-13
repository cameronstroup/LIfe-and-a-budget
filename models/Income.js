const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our User model
class Income extends Model {}


Income.init(
 {
   id: {
     type: DataTypes.INTEGER,
     primaryKey: true,
     autoIncrement: true
   },
   title: {
     type: DataTypes.STRING,
     allowNull: false
   },
   Budget: {
    type: DataTypes.INTEGER,
    allowNull: false
   },
   Actual: {
    type: DataTypes.DECIMAL(10,2),
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