const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


// create our Expenses model
class Expenses extends Model {}


Expenses.init(
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
    modelName: 'Expenses'
  }
);
module.exports = Expenses;